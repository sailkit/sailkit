import { describe, it, expect } from 'vitest';
import { createTheme } from '$lib/theme.js';
import { extractMJMLMarkup, renderSvelteComponent } from '$lib/render.js';
import { ValidationError } from '$lib/errors.js';

import HeadThemeTest from './components/HeadThemeTest.svelte';

describe('Theme API', () => {
  describe('createTheme', () => {
    it('creates a theme with all options', () => {
      const themeOptions = {
        fonts: [
          {
            name: 'Roboto',
            href: 'https://fonts.googleapis.com/css2?family=Roboto'
          }
        ],
        breakpoint: '480px' as const,
        styles: {
          global: 'font-family="Roboto, sans-serif"',
          components: {
            text: 'color="#333333"',
            button: 'background-color="#007bff"'
          },
          custom: [
            '.header { font-size: 24px; }',
            {
              inline: true as const,
              css: '.footer { padding: 20px; }'
            }
          ]
        }
      };

      const theme = createTheme(themeOptions);
      expect(theme).toEqual(themeOptions);
    });

    it('creates a theme with partial options', () => {
      const theme = createTheme({
        styles: {
          global: 'font-family="Arial, sans-serif"'
        }
      });

      expect(theme).toEqual({
        fonts: undefined,
        breakpoint: undefined,
        styles: {
          global: 'font-family="Arial, sans-serif"',
          components: undefined,
          custom: undefined
        }
      });
    });
  });

  describe('Theme application', () => {
    const basicTheme = createTheme({
      fonts: [
        {
          name: 'Roboto',
          href: 'https://fonts.googleapis.com/css2?family=Roboto'
        }
      ],
      breakpoint: '480px' as const,
      styles: {
        global: 'font-family="Roboto, sans-serif"',
        components: {
          text: 'color="#333333"',
          button: 'background-color="#007bff"'
        }
      }
    });

    const basicProps = {
      subject: 'Test Email',
      preview: 'Test Preview'
    };

    it('applies theme to Head component', () => {
      const markup = renderSvelteComponent(HeadThemeTest, {
        ...basicProps,
        theme: basicTheme
      });

      const result = extractMJMLMarkup(markup);

      expect(result).toContain('<mj-title>Test Email</mj-title>');
      expect(result).toContain('<mj-preview>Test Preview</mj-preview>');
      expect(result).toContain(
        '<mj-font name="Roboto" href="https://fonts.googleapis.com/css2?family=Roboto" />'
      );
      expect(result).toContain('<mj-breakpoint width="480px" />');
      expect(result).toContain('<mj-all font-family="Roboto, sans-serif" />');
      expect(result).toContain('<mj-text color="#333333" />');
    });

    it('merges theme with individual props correctly', () => {
      const markup = renderSvelteComponent(HeadThemeTest, {
        ...basicProps,
        theme: basicTheme,
        // Override and add individual props
        fonts: [
          {
            name: 'Open Sans',
            href: 'https://fonts.googleapis.com/css2?family=Open+Sans'
          }
        ],
        styles: {
          components: {
            text: 'color="#000000"', // Override theme
            section: 'padding="20px"' // Add new
          }
        }
      });

      const result = extractMJMLMarkup(markup);

      // Individual font should override theme font
      expect(result).toContain(
        '<mj-font name="Open Sans" href="https://fonts.googleapis.com/css2?family=Open+Sans" />'
      );
      // Individual text color should override theme
      expect(result).toContain('<mj-text color="#000000" />');
      // Theme button style should remain
      expect(result).toContain('<mj-button background-color="#007bff" />');
      // New section style should be added
      expect(result).toContain('<mj-section padding="20px" />');
    });

    it('merges custom styles from theme and props', () => {
      const customStyleTheme = createTheme({
        styles: {
          custom: [
            '.theme-header { font-size: 24px; }',
            {
              inline: true as const,
              css: '.theme-footer { padding: 20px; }'
            }
          ]
        }
      });

      const markup = renderSvelteComponent(HeadThemeTest, {
        ...basicProps,
        theme: customStyleTheme,
        styles: {
          custom: [
            '.prop-header { font-size: 20px; }',
            {
              inline: true as const,
              css: '.prop-footer { margin: 20px; }'
            }
          ]
        }
      });

      const result = extractMJMLMarkup(markup);

      // Both theme and prop styles should be present
      const expectedStyles = [
        '<mj-style>.theme-header { font-size: 24px; }</mj-style>',
        '<mj-style inline="inline">.theme-footer { padding: 20px; }</mj-style>',
        '<mj-style>.prop-header { font-size: 20px; }</mj-style>',
        '<mj-style inline="inline">.prop-footer { margin: 20px; }</mj-style>'
      ];

      expectedStyles.forEach((style) => {
        expect(result).toContain(style);
      });
    });

    it('throws ValidationError when theme provides invalid global style syntax', () => {
      const invalidTheme = createTheme({
        styles: {
          global: 'font-family Arial' // Invalid syntax
        }
      });

      expect(() =>
        renderSvelteComponent(HeadThemeTest, {
          ...basicProps,
          theme: invalidTheme
        })
      ).toThrowError(
        new ValidationError(
          'Invalid property format in Head global styles: "font-family Arial" (Expected format: attribute="value" ...)'
        )
      );
    });

    it('throws ValidationError when theme provides invalid component style syntax', () => {
      const invalidTheme = createTheme({
        styles: {
          components: {
            text: 'color=#123456' // Invalid syntax
          }
        }
      });

      expect(() =>
        renderSvelteComponent(HeadThemeTest, {
          ...basicProps,
          theme: invalidTheme
        })
      ).toThrowError(
        new ValidationError(
          'Invalid property format in Head "text" styles: "color=#123456" (Expected format: attribute="value" ...)'
        )
      );
    });

    it('throws ValidationError when props provide invalid style syntax, overriding valid theme', () => {
      const validTheme = createTheme({
        styles: {
          global: 'font-family="Roboto, sans-serif"' // Valid
        }
      });

      expect(() =>
        renderSvelteComponent(HeadThemeTest, {
          ...basicProps,
          theme: validTheme,
          styles: {
            global: 'padding 10px' // Invalid override
          }
        })
      ).toThrowError(
        new ValidationError(
          'Invalid property format in Head global styles: "padding 10px" (Expected format: attribute="value" ...)'
        )
      );
    });
  });
});
