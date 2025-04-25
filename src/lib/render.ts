/**
 * @module render
 * @description Core email rendering functionality for SailKit
 */

// Type imports
import type { Component, ComponentProps } from 'svelte';
import type { RenderOptions, RenderResult } from './types.js';

// External dependencies
import { render } from 'svelte/server';
import mjml2html from 'mjml';
import { minify } from 'html-minifier-terser';
import { convert } from 'html-to-text';
import pretty from 'pretty';

// Internal dependencies
import { RenderError, ValidationError } from './errors.js';
import { handleError } from './utils/logger.js';
import { formatMjmlError } from './utils/mjmlErrorFormatter.js';

// Constants
import {
  DEFAULT_MINIFY_OPTIONS,
  DEFAULT_MJML_OPTIONS,
  DEFAULT_PLAIN_TEXT_OPTIONS,
  DEFAULT_RENDER_OPTIONS
} from './defaults.js';
const MJML_TAG_REGEX = /<mj-[^>]*>/g;
const COMMENTS_REGEX = /<!--[\s\S]*?-->/g;

/**
 * Renders a Svelte component as an email template
 * @template Props - Component props type
 * @param component - Svelte component to render
 * @param props - Component properties
 * @param options - Render configuration options
 * @returns Rendered email result with HTML and plain text versions
 * @throws {RenderError} If rendering fails at any stage
 */
export async function renderComponentAsEmailTemplate<Props extends ComponentProps<Component>>(
  component: Component<Props>,
  props: Props = {} as Props,
  options: RenderOptions = DEFAULT_RENDER_OPTIONS
): Promise<RenderResult> {
  const startTime = performance.now();

  try {
    const { html, plainText } = await processEmailTemplate(component, props, options);

    return {
      html,
      plainText,
      meta: {
        renderTime: performance.now() - startTime,
        size: html.length
      }
    };
  } catch (error) {
    const componentName = component.name || component.constructor?.name;
    handleError(error, 'Email template rendering failed', componentName ?? undefined);
  }
}

/**
 * Processes the template through the rendering pipeline
 * @private
 */
async function processEmailTemplate<Props extends ComponentProps<Component>>(
  component: Component<Props>,
  props: Props,
  options: RenderOptions
): Promise<{ html: string; plainText: string }> {
  const rawHtml = renderSvelteComponent(component, props);
  const mjmlMarkup = extractMJMLMarkup(rawHtml);
  const { html: processedHtml } = await convertMJMLToHTML(mjmlMarkup);
  const finalHtml = await postProcessHTML(processedHtml, options);
  const plainText = options.plainText ? renderPlainText(rawHtml) : '';

  return { html: finalHtml, plainText };
}

/**
 * Renders a Svelte component to HTML
 * @private
 */
export function renderSvelteComponent<Props extends ComponentProps<Component>>(
  component: Component<Props>,
  props: Props
): string {
  const { body } = render(component, { props });

  if (!body) {
    throw new RenderError('Component rendered empty body');
  }

  return body;
}

/**
 * Extracts MJML markup from rendered HTML
 * @private
 */
export function extractMJMLMarkup(html: string): string {
  const match = html.match(MJML_TAG_REGEX);
  if (!match) {
    const originalMessage = 'No MJML markup found in component output';
    const { message: formattedMessage } = formatMjmlError(originalMessage);

    throw new ValidationError(formattedMessage);
  }

  return match[0].replace(COMMENTS_REGEX, '');
}

/**
 * Converts MJML markup to HTML
 * @private
 */
export async function convertMJMLToHTML(markup: string): Promise<{ html: string }> {
  try {
    return mjml2html(markup, {
      ...DEFAULT_MJML_OPTIONS
    });
  } catch (error) {
    const originalMessage = error instanceof Error ? error.message : String(error);

    throw new ValidationError(
      'Template validation failed',
      error instanceof Error ? error : new Error(originalMessage)
    );
  }
}

/**
 * Post-processes HTML (beautify, minify, etc.)
 * @private
 */
async function postProcessHTML(html: string, options: RenderOptions): Promise<string> {
  let processed = html;

  if (options.beautify) {
    try {
      processed = pretty(processed);
    } catch (error) {
      throw new RenderError(
        'HTML beautification failed',
        error instanceof Error ? error : undefined
      );
    }
  }

  if (options.minify) {
    try {
      processed = await minify(processed, DEFAULT_MINIFY_OPTIONS);
    } catch (error) {
      throw new RenderError('HTML minification failed', error instanceof Error ? error : undefined);
    }
  }

  return processed;
}

/**
 * Generates plain text version of the email
 * @private
 */
function renderPlainText(html: string): string {
  try {
    return convert(html, DEFAULT_PLAIN_TEXT_OPTIONS);
  } catch (error) {
    throw new RenderError(
      'Plain text rendering failed',
      error instanceof Error ? error : undefined
    );
  }
}
