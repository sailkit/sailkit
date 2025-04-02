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
import {
  DEFAULT_MINIFY_OPTIONS,
  DEFAULT_MJML_OPTIONS,
  DEFAULT_PLAIN_TEXT_OPTIONS,
  DEFAULT_RENDER_OPTIONS
} from './defaults.js';
import { RenderError, ValidationError, extractValidationDetails } from './errors.js';

// Constants
const MJML_REGEX = /<mjml[\s\S]*?<\/mjml>/;
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
    // Get component name for better error context
    const componentName = component.name;

    if (error instanceof ValidationError) {
      // add component name to the error message
      error.message = `Error in ${componentName}.svelte: ${error.formattedMessage}`;
      console.error(error.message);

      throw error;
    }

    // For other render errors, include relevant context
    if (error instanceof RenderError) {
      error.message = `Error rendering ${componentName}.svelte: ${error.formattedMessage}`;

      // Log the error to console
      console.error(error.message);

      throw error;
    }

    // Generic error handling
    const errorMessage = `Error rendering ${componentName}: ${error instanceof Error ? error.message : String(error)}`;
    console.error(errorMessage);

    throw new RenderError(errorMessage, error instanceof Error ? error : undefined);
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
  const match = html.match(MJML_REGEX);
  if (!match) {
    throw new RenderError('No MJML markup found in component output');
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
    if (error && typeof error === 'object' && 'errors' in error) {
      const details = extractValidationDetails(error);

      let specificMessage = 'Email template has validation errors';

      // If we have details, include the first error in the main message for visibility
      if (details.length > 0) {
        const firstError = details[0];
        const component = `<${firstError.tagName}>` || 'unknown';

        specificMessage = `Invalid value in ${component}: ${firstError.message}`;
      }

      throw new ValidationError(specificMessage, details);
    }

    throw new RenderError(
      'MJML conversion failed',
      error instanceof Error ? error : new Error(String(error))
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
    processed = pretty(processed);
  }

  if (options.minify) {
    processed = await minify(processed, DEFAULT_MINIFY_OPTIONS);
  }

  return processed;
}

/**
 * Generates plain text version of the email
 * @private
 */
function renderPlainText(html: string): string {
  return convert(html, DEFAULT_PLAIN_TEXT_OPTIONS);
}
