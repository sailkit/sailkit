import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  renderSvelteComponent,
  extractMJMLMarkup,
  convertMJMLToHTML,
  renderComponentAsEmailTemplate
} from '$lib/render.js';
import { RenderError, ValidationError, PreviewError, SailKitError } from '$lib/errors.js';
import InvalidMJML from './assets/InvalidMJML.svelte';
import Empty from './assets/Empty.svelte';

describe('Error Classes', () => {
  describe('SailKitError', () => {
    it('creates correct error with name and message', () => {
      const error = new SailKitError('Test error');
      expect(error).toBeInstanceOf(Error);
      expect(error.name).toBe('SailKitError');
      expect(error.message).toBe('Test error');
      expect(error.cause).toBeUndefined();
    });

    it('preserves the cause when provided', () => {
      const cause = new Error('Original error');
      const error = new SailKitError('Test error', cause);
      expect(error.cause).toBe(cause);
    });
  });

  describe('RenderError', () => {
    it('is a SailKitError with correct name', () => {
      const error = new RenderError('Test error');
      expect(error).toBeInstanceOf(SailKitError);
      expect(error.name).toBe('RenderError');
      expect(error.message).toBe('Test error');
    });

    it('preserves cause when provided', () => {
      const cause = new Error('Test cause');
      const error = new RenderError('Test error', cause);
      expect(error.cause).toBe(cause);
    });
  });

  describe('PreviewError', () => {
    it('is a SailKitError with correct name', () => {
      const error = new PreviewError('Test error');
      expect(error).toBeInstanceOf(SailKitError);
      expect(error.name).toBe('PreviewError');
      expect(error.message).toBe('Test error');
    });

    it('preserves cause when provided', () => {
      const cause = new Error('Original cause');
      const error = new PreviewError('Preview failed', cause);
      expect(error.cause).toBe(cause);
    });
  });

  describe('ValidationError', () => {
    it('is a RenderError with correct name', () => {
      const error = new ValidationError('Test error');
      expect(error).toBeInstanceOf(RenderError);
      expect(error.name).toBe('ValidationError');
      expect(error.message).toBe('Test error');
    });

    it('preserves cause when provided', () => {
      const cause = new Error('Format error');
      const error = new ValidationError('MJML error', cause);
      expect(error.cause).toBe(cause);
    });
  });
});

describe('Error Handling in Rendering Pipeline', () => {
  // Suppress console errors during tests
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  const validMjml =
    '<mjml><mj-body><mj-section><mj-column><mj-text>Test</mj-text></mj-column></mj-section></mj-body></mjml>';

  describe('extractMJMLMarkup', () => {
    it('throws ValidationError for non-MJML HTML', () => {
      const invalidHtml = '<div>Hello World</div>';

      expect(() => extractMJMLMarkup(invalidHtml)).toThrow(ValidationError);

      try {
        extractMJMLMarkup(invalidHtml);
      } catch (error) {
        if (!(error instanceof ValidationError)) {
          throw new Error('Expected ValidationError');
        }
        expect(error.message).toContain('Invalid template');
        expect(error.cause).toBeUndefined();
      }
    });

    it('extracts valid MJML without errors', () => {
      expect(() => extractMJMLMarkup(validMjml)).not.toThrow();
      const result = extractMJMLMarkup(validMjml);
      expect(result).toBe(validMjml);
    });
  });

  describe('convertMJMLToHTML', () => {
    it('rejects with ValidationError for invalid MJML', async () => {
      const html = renderSvelteComponent(InvalidMJML, { text: 'Hello World' });
      const mjml = extractMJMLMarkup(html);

      await expect(convertMJMLToHTML(mjml)).rejects.toThrow(ValidationError);

      try {
        await convertMJMLToHTML(mjml);
      } catch (error) {
        if (!(error instanceof ValidationError)) {
          throw new Error('Expected ValidationError');
        }
        expect(error.message).toBe('Template validation failed');
        expect(error.cause).toBeInstanceOf(Error);
      }
    });

    it('resolves with HTML for valid MJML', async () => {
      const result = await convertMJMLToHTML(validMjml);

      expect(result).toHaveProperty('html');
      expect(typeof result.html).toBe('string');
      expect(result.html).toContain('<html');
    });
  });

  describe('renderComponentAsEmailTemplate', () => {
    it('rejects for components without MJML markup', async () => {
      await expect(renderComponentAsEmailTemplate(Empty, {})).rejects.toThrow(SailKitError);
    });

    it('rejects for components with invalid MJML', async () => {
      await expect(
        renderComponentAsEmailTemplate(InvalidMJML, { text: 'Hello World' })
      ).rejects.toThrow(SailKitError);
    });

    it('rejects for components with missing required props', async () => {
      // @ts-expect-error - Intentionally missing required prop 'text'
      await expect(renderComponentAsEmailTemplate(InvalidMJML, {})).rejects.toThrow(SailKitError);
    });
  });
});
