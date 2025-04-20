import { describe, it, expect } from 'vitest';
import { formatMjmlError } from '$lib/utils/mjmlErrorFormatter.js';

describe('formatMjmlError', () => {
  describe('Single-line errors', () => {
    it('should format illegal attribute errors', () => {
      const originalMessage =
        'Line 5 of email.mjml (mj-text) — Attributes color:, "#333" are illegal';
      const { message } = formatMjmlError(originalMessage);

      expect(message).toBe('Invalid template: Illegal Attributes for <Text>: color');
    });

    it('should format multiple illegal attributes', () => {
      const originalMessage =
        'Line 3 of email.mjml (mj-text) — Attributes color:, "#333", font-size:, "16px" are illegal';
      const { message } = formatMjmlError(originalMessage);

      expect(message).toBe('Invalid template: Illegal Attributes for <Text>: color, font-size');
    });

    it('should format nesting errors', () => {
      const originalMessage =
        'Line 7 of email.mjml (mj-text) — mj-text cannot be used inside mj-body, only inside: mj-column, mj-hero';
      const { message } = formatMjmlError(originalMessage);

      expect(message).toBe('Invalid template: <Text> cannot be used inside <Body>');
    });

    it('should format unknown element errors', () => {
      const originalMessage =
        "Line 10 of file.mjml (unknown-tag) — Element unknown-tag doesn't exist or is not registered";
      const { message } = formatMjmlError(originalMessage);

      expect(message).toBe(
        "Invalid template: Element unknown-tag doesn't exist or is not registered"
      );
    });

    it('should format malformed MJML errors', () => {
      const originalMessage =
        'Malformed MJML. Check that your structure is correct and enclosed in <mjml> tags.';
      const { message } = formatMjmlError(originalMessage);

      expect(message).toBe(
        'Invalid template: Check that your structure is correct and enclosed in <Html> tags'
      );
    });

    it('should handle unrecognized error patterns', () => {
      const originalMessage = 'Some unexpected MJML error format';
      const { message } = formatMjmlError(originalMessage);

      expect(message).toContain('Invalid template: Unrecognized MJML validation error');
      expect(message).toContain('Some unexpected MJML error format');
    });
  });

  describe('Multi-line errors', () => {
    it('should format multiple error lines', () => {
      const originalMessage = `ValidationError:
      Line 5 of email.mjml (mj-text) — Attributes color:, "#333" are illegal
      Line 10 of email.mjml (custom-element) — Element custom-element doesn't exist or is not registered`;

      const { message } = formatMjmlError(originalMessage);

      expect(message).toContain('ValidationError:');
      expect(message).toContain('Invalid template: Illegal Attributes for <Text>: color');
      expect(message).toContain(
        "Invalid template: Element custom-element doesn't exist or is not registered"
      );
    });

    it('should preserve prefix text before error lines', () => {
      const originalMessage = `MJML Error Occurred:
      Line 3 of email.mjml (mj-text) — mj-text cannot be used inside mj-body, only inside: mj-column, mj-hero`;

      const { message } = formatMjmlError(originalMessage);

      expect(message).toContain('MJML Error Occurred:');
      expect(message).toContain('Invalid template: <Text> cannot be used inside <Body>');
    });
  });

  it('should preserve the original message', () => {
    const originalMessage = 'Test MJML error';
    const { originalMessage: preserved } = formatMjmlError(originalMessage);

    expect(preserved).toBe(originalMessage);
  });
});
