import { describe, it, expect } from 'vitest';
import { createTheme } from '$lib/theme.js';
import { extractMJMLMarkup, renderSvelteComponent } from '$lib/render.js';

import HeadThemeTest from './components/HeadThemeTest.svelte';

describe('Theme API', () => {
  it('should create a theme with all options', () => {
    const theme = createTheme({
      fonts: [
        {
          name: 'Roboto',
          href: 'https://fonts.googleapis.com/css2?family=Roboto'
        }
      ],
      breakpoint: '480px',
      styles: {
        global: 'font-family="Roboto, sans-serif"',
        components: {
          text: 'color="#333333"',
          button: 'background-color="#007bff"'
        },
        custom: [
          '.header { font-size: 24px; }',
          {
            inline: true,
            css: '.footer { padding: 20px; }'
          }
        ]
      }
    });

    expect(theme).toEqual({
      fonts: [
        {
          name: 'Roboto',
          href: 'https://fonts.googleapis.com/css2?family=Roboto'
        }
      ],
      breakpoint: '480px',
      styles: {
        global: 'font-family="Roboto, sans-serif"',
        components: {
          text: 'color="#333333"',
          button: 'background-color="#007bff"'
        },
        custom: [
          '.header { font-size: 24px; }',
          {
            inline: true,
            css: '.footer { padding: 20px; }'
          }
        ]
      }
    });
  });

  it('should create a theme with partial options', () => {
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

  it('should apply theme to Head component', () => {
    const theme = createTheme({
      fonts: [
        {
          name: 'Roboto',
          href: 'https://fonts.googleapis.com/css2?family=Roboto'
        }
      ],
      breakpoint: '480px',
      styles: {
        global: 'font-family="Roboto, sans-serif"',
        components: {
          text: 'color="#333333"'
        }
      }
    });

    const markup = renderSvelteComponent(HeadThemeTest, {
      subject: 'Test Email',
      preview: 'Test Preview',
      theme
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

  it('should merge theme with individual props', () => {
    const theme = createTheme({
      fonts: [
        {
          name: 'Roboto',
          href: 'https://fonts.googleapis.com/css2?family=Roboto'
        }
      ],
      styles: {
        components: {
          text: 'color="#333333"',
          button: 'background-color="#007bff"'
        }
      }
    });

    const markup = renderSvelteComponent(HeadThemeTest, {
      subject: 'Test Email',
      preview: 'Test Preview',
      theme,
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

  it('should merge custom styles from theme and props', () => {
    const theme = createTheme({
      styles: {
        custom: [
          '.theme-header { font-size: 24px; }',
          {
            inline: true,
            css: '.theme-footer { padding: 20px; }'
          }
        ]
      }
    });

    const markup = renderSvelteComponent(HeadThemeTest, {
      subject: 'Test Email',
      preview: 'Test Preview',
      theme,
      styles: {
        custom: [
          '.prop-header { font-size: 20px; }',
          {
            inline: true,
            css: '.prop-footer { margin: 20px; }'
          }
        ]
      }
    });

    const result = extractMJMLMarkup(markup);

    // Theme styles should be present
    expect(result).toContain('<mj-style>.theme-header { font-size: 24px; }</mj-style>');
    expect(result).toContain(
      '<mj-style inline="inline">.theme-footer { padding: 20px; }</mj-style>'
    );
    // Individual prop styles should be present
    expect(result).toContain('<mj-style>.prop-header { font-size: 20px; }</mj-style>');
    expect(result).toContain('<mj-style inline="inline">.prop-footer { margin: 20px; }</mj-style>');
  });
});
