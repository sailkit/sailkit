/**
 * @module preview
 * @description Email template preview functionality for SailKit
 */

// Type imports
import type { Component, ComponentProps } from 'svelte';
import type { RenderOptions, RenderResult } from './types.js';
import type { ExecException } from 'child_process';

// External dependencies
import { exec } from 'child_process';
import fs from 'fs';
import os from 'os';
import path from 'path';

// Internal dependencies
import { dev } from '$app/environment';
import { DEFAULT_RENDER_OPTIONS } from './defaults.js';
import { PreviewError, SailKitError } from './errors.js';
import { renderComponentAsEmailTemplate } from './render.js';
import { handleError } from './utils/logger.js';

// Constants and types
const PLATFORM_COMMANDS = {
  win32: 'start',
  darwin: 'open',
  linux: 'xdg-open'
} as const;
const TEMP_FILE_PREFIX = 'email-preview-';
const TEMP_DIR = os.tmpdir();

type SupportedPlatform = keyof typeof PLATFORM_COMMANDS;
type PreviewMode = 'browser' | 'console';

/**
 * Previews a Svelte component as HTML
 * @template Props - Component props type
 * @param component - Component to preview
 * @param props - Component properties
 * @param mode - Preview mode (browser or console)
 * @throws {PreviewError} If preview fails
 */
export async function previewComponentAsHTML<Props extends ComponentProps<Component>>(
  component: Component<Props>,
  props: Props = {} as Props,
  mode: PreviewMode = 'browser',
  options?: RenderOptions
): Promise<void> {
  try {
    validateEnvironment();

    await deleteExistingTempFiles();

    const renderResult = await renderComponentForPreview(
      component,
      props,
      options ?? DEFAULT_RENDER_OPTIONS
    );

    await displayPreview(renderResult, mode ?? 'browser');
  } catch (error) {
    // Only log the error if it hasn't already been logged at a lower level
    if (!(error instanceof SailKitError)) {
      const componentName = component.name || component.constructor?.name || undefined;
      handleError(error, 'Preview generation failed', componentName ?? undefined);
    }
  }
}

/**
 * Renders a component for preview
 * @template Props - Component props type
 * @param component - Component to render
 * @param props - Component properties
 * @param options - Render options
 * @returns Rendered result
 */
export async function renderComponentForPreview<Props extends ComponentProps<Component>>(
  component: Component<Props>,
  props: Props = {} as Props,
  options: RenderOptions
): Promise<RenderResult> {
  validateEnvironment();

  return await renderComponentAsEmailTemplate(component, props, {
    plainText: options?.plainText ?? DEFAULT_RENDER_OPTIONS.plainText,
    beautify: options?.beautify ?? DEFAULT_RENDER_OPTIONS.beautify,
    minify: options.minify ?? DEFAULT_RENDER_OPTIONS.minify
  });
}

/**
 * Displays preview in specified mode
 * @private
 */
async function displayPreview(renderResult: RenderResult, mode: PreviewMode): Promise<void> {
  if (mode === 'browser') {
    await openInBrowser(renderResult.html);
  } else {
    displayInConsole(renderResult);
  }
}

/**
 * Opens preview in browser
 * @private
 */
async function openInBrowser(html: string): Promise<void> {
  const filePath = await createTempFile(html);
  await openFileInBrowser(filePath);
}

/**
 * Creates temporary file for preview
 * @private
 */
async function createTempFile(content: string): Promise<string> {
  const filePath = path.join(TEMP_DIR, `${TEMP_FILE_PREFIX}${Date.now()}.html`);

  try {
    await fs.promises.writeFile(filePath, content, 'utf-8');
    return filePath;
  } catch (error) {
    throw new PreviewError(
      'Preview file creation failed',
      error instanceof Error ? error : undefined
    );
  }
}

/**
 * Opens file in platform's default browser
 * @private
 */
async function openFileInBrowser(filePath: string): Promise<void> {
  const platform = os.platform();
  const command = PLATFORM_COMMANDS[platform as SupportedPlatform];

  if (!command) {
    throw new PreviewError(`Unsupported platform: ${platform}`);
  }

  return new Promise<void>((resolve) => {
    exec(`${command} "${filePath}"`, (error: ExecException | null) => {
      if (error) {
        handleError(error, 'Browser launch failed');
      } else {
        resolve();
      }
    });
  });
}

/**
 * Displays preview in console
 * @private
 */
function displayInConsole(renderResult: RenderResult): void {
  console.log('\n=== HTML Preview ===\n');
  console.log(renderResult.html);

  if (renderResult.plainText) {
    console.log('\n=== Plain Text Preview ===\n');
    console.log(renderResult.plainText);
  }

  console.log('\n=== Render Statistics ===\n');
  console.log(`Render Time: ${renderResult.meta.renderTime.toFixed(2)}ms`);
  console.log(`Size: ${renderResult.meta.size} bytes`);
}

/**
 * Deletes existing temporary files
 * @private
 */
async function deleteExistingTempFiles(): Promise<void> {
  try {
    const files = await fs.promises.readdir(TEMP_DIR);
    const previewFiles = files.filter((file: string) => file.startsWith(TEMP_FILE_PREFIX));

    await Promise.all(
      previewFiles.map((file: string) =>
        fs.promises.rm(path.join(TEMP_DIR, file), { force: true, recursive: true })
      )
    );
  } catch (error) {
    console.warn('Preview cleanup failed:', error);
  }
}

/**
 * Validates development environment
 * @private
 */
function validateEnvironment(): void {
  if (!dev) {
    throw new PreviewError('Preview is only available in development mode');
  }
}
