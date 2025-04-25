import { describe, it, expect } from 'vitest';
import { createTheme } from '$lib/theme.js';
import { extractMJMLMarkup, renderSvelteComponent } from '$lib/render.js';

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
          global: {
            fontFamily: 'Roboto, sans-serif'
          },
          components: {
            text: {
              color: '#333333'
            },
            button: {
              backgroundColor: '#007bff'
            }
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
      expect(theme).toEqual({
        fonts: themeOptions.fonts,
        breakpoint: themeOptions.breakpoint,
        styles: themeOptions.styles
      });
    });

    it('creates a theme with partial options', () => {
      const theme = createTheme({
        styles: {
          global: {
            fontFamily: 'Arial, sans-serif'
          }
        }
      });

      expect(theme).toEqual({
        fonts: undefined,
        breakpoint: undefined,
        styles: {
          global: {
            fontFamily: 'Arial, sans-serif'
          },
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
        global: {
          fontFamily: 'Roboto, sans-serif'
        },
        components: {
          text: {
            color: '#333333'
          },
          button: {
            backgroundColor: '#007bff'
          }
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
            text: {
              color: '#000000' // Override
            },
            section: {
              padding: '20px' // Add
            }
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

    it('properly overwrites theme styles with directly defined styles', () => {
      const theme = createTheme({
        fonts: [
          {
            name: 'Roboto',
            href: 'https://fonts.googleapis.com/css2?family=Roboto'
          }
        ],
        breakpoint: '480px' as const,
        styles: {
          global: {
            fontFamily: 'Roboto, sans-serif',
            backgroundColor: '#ffffff',
            textAlign: 'center'
          },
          components: {
            text: {
              color: '#333333',
              fontSize: '16px',
              padding: '10px'
            },
            button: {
              backgroundColor: '#007bff',
              color: '#ffffff',
              borderRadius: '4px'
            },
            section: {
              backgroundColor: '#f8f9fa',
              padding: '20px'
            }
          },
          custom: [
            '.theme-class { color: blue; }',
            {
              inline: true as const,
              css: '.theme-inline { padding: 15px; }'
            }
          ]
        }
      });

      // Component props that should override theme settings
      const overrideProps = {
        ...basicProps,
        theme: theme,
        fonts: [
          {
            name: 'Open Sans',
            href: 'https://fonts.googleapis.com/css2?family=Open+Sans'
          }
        ],
        breakpoint: '600px' as const,
        styles: {
          global: {
            fontFamily: 'Open Sans, sans-serif',
            backgroundColor: '#f0f0f0',
            lineHeight: '1.5' as const // New property
          },
          components: {
            text: {
              color: '#000000', // Override
              fontSize: '18px' as const, // Override
              fontWeight: 'bold' as 'bold' // New property
            },
            button: {
              backgroundColor: '#ff0000', // Override
              fontSize: '14px' as const // New property
            },
            image: {
              width: '100px' as const // New property
            }
          },
          custom: [
            '.override-class { color: red; }',
            {
              inline: true as const,
              css: '.override-inline { margin: 10px; }'
            }
          ]
        }
      };

      const markup = renderSvelteComponent(HeadThemeTest, overrideProps);
      const result = extractMJMLMarkup(markup);

      // Font and breakpoint should be overridden
      expect(result).toContain(
        '<mj-font name="Open Sans" href="https://fonts.googleapis.com/css2?family=Open+Sans" />'
      );
      // Original theme font should not be present
      expect(result).not.toContain('Roboto');
      expect(result).toContain('<mj-breakpoint width="600px" />');
      // Original theme breakpoint should not be present
      expect(result).not.toContain('480px');

      // Global styles - Check for the custom attributes with overridden values
      expect(result).toContain('font-family="Open Sans, sans-serif"');
      // Original theme font-family should not be present in the mj-all attributes
      expect(result).not.toMatch(/<mj-all [^>]*font-family="Roboto, sans-serif"/);

      expect(result).toContain('background-color="#f0f0f0"');
      expect(result).toContain('line-height="1.5"');
      expect(result).toContain('text-align="center"');

      // Component styles should be merged with override priority
      expect(result).toContain('color="#000000"'); // Override from props
      // Original theme text color should not be present in mj-text
      expect(result).not.toMatch(/<mj-text [^>]*color="#333333"/);

      expect(result).toContain('font-size="18px"'); // Override from props
      // Original theme font size should not be present in mj-text
      expect(result).not.toMatch(/<mj-text [^>]*font-size="16px"/);

      expect(result).toContain('font-weight="bold"'); // New in props
      expect(result).toContain('padding="10px"'); // From theme

      // Button color was overridden
      expect(result).toContain('background-color="#ff0000"'); // Override from props
      // Original theme button background color should not be present in mj-button
      expect(result).not.toMatch(/<mj-button [^>]*background-color="#007bff"/);

      expect(result).toContain('border-radius="4px"'); // From theme
      expect(result).toContain('font-size="14px"'); // New in props

      expect(result).toContain('background-color="#f8f9fa"'); // From theme
      expect(result).toContain('padding="20px"'); // From theme
      expect(result).toContain('width="100px"'); // New in props

      // Custom styles from both sources should be present
      expect(result).toContain('<mj-style>.theme-class { color: blue; }</mj-style>');
      expect(result).toContain(
        '<mj-style inline="inline">.theme-inline { padding: 15px; }</mj-style>'
      );
      expect(result).toContain('<mj-style>.override-class { color: red; }</mj-style>');
      expect(result).toContain(
        '<mj-style inline="inline">.override-inline { margin: 10px; }</mj-style>'
      );
    });
  });
});
