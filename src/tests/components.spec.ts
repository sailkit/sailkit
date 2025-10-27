import { describe, it, expect } from 'vitest';
import { extractMJMLMarkup, renderSvelteComponent } from '$lib/render.js';
import { base } from '$app/paths';

import Html from './components/HtmlTest.svelte';
import Head from './components/HeadTest.svelte';
import Body from './components/BodyTest.svelte';
import Section from './components/SectionTest.svelte';
import Column from './components/ColumnTest.svelte';
import Container from './components/ContainerTest.svelte';
import Text from './components/TextTest.svelte';
import Image from './components/ImageTest.svelte';
import Button from './components/ButtonTest.svelte';
import Table from './components/TableTest.svelte';
import Social from './components/SocialTest.svelte';
import Raw from './components/RawTest.svelte';

describe('Core Components', () => {
  describe('Html Component', () => {
    it('converts HTML props to MJML attributes', () => {
      const result = renderSvelteComponent(Html, {
        language: 'ar',
        dir: 'rtl',
        owa: true
      });

      expect(result).toContain('<mjml lang="ar" dir="rtl" owa="desktop">');
    });

    it('omits the owa attribute when disabled', () => {
      const result = renderSvelteComponent(Html, {
        language: 'en',
        dir: 'ltr',
        owa: false
      });

      expect(result).toContain('<mjml lang="en" dir="ltr">');
      expect(result).not.toContain('owa="desktop"');
    });
  });

  describe('Head Component', () => {
    it('converts Head props to appropriate MJML elements', () => {
      const headProps = {
        subject: 'Test Email',
        preview: 'Test Preview',
        fonts: [
          {
            name: 'Open Sans',
            href: 'https://fonts.googleapis.com/css?family=Open+Sans'
          }
        ],
        breakpoint: '480px' as const,
        styles: {
          global: {
            fontFamily: 'Open Sans'
          },
          components: {
            text: {
              color: '#333333'
            }
          },
          custom: [
            // Regular CSS (not inlined)
            `.title {
              font-size: 32px;
              font-weight: 600;
              color: #1F2937;
            }`,
            {
              inline: true as const,
              css: '.header { font-size: 24px; }'
            },
            `@media (max-width: 480px) { .title { font-size: 24px; } .mobile-hidden { display: none; } }`
          ]
        }
      };

      const markup = renderSvelteComponent(Head, headProps);
      const result = extractMJMLMarkup(markup);

      // Verify the essential elements are present
      const expectedElements = [
        '<mj-head>',
        '<mj-raw>',
        '<meta name="x-apple-disable-message-reformatting"/>',
        '<meta name="color-scheme" content="light dark"/>',
        '<meta name="supported-color-schemes" content="light dark"/>',
        '</mj-raw>',
        '<mj-title>Test Email</mj-title>',
        '<mj-preview>Test Preview</mj-preview>',
        '<mj-font name="Open Sans" href="https://fonts.googleapis.com/css?family=Open+Sans" />',
        '<mj-breakpoint width="480px" />',
        '<mj-all font-family="Open Sans" />',
        '<mj-text color="#333333" />',
        '<mj-style>.title { font-size: 32px; font-weight: 600; color: #1F2937; }</mj-style>',
        '<mj-style inline="inline">.header { font-size: 24px; }</mj-style>',
        '@media (max-width: 480px) { .title { font-size: 24px; } .mobile-hidden { display: none; } }',
        '</mj-head>'
      ];

      expectedElements.forEach((element) => {
        expect(result).toContain(element);
      });
    });
  });

  describe('Body Component', () => {
    it('converts Body props to MJML attributes', () => {
      const bodyProps = {
        backgroundColor: '#f6f6f6',
        width: '650px' as const,
        class: 'custom-body'
      };

      const markup = renderSvelteComponent(Body, bodyProps);
      const result = extractMJMLMarkup(markup);

      expect(result).toContain(
        '<mj-body background-color="#f6f6f6" width="650px" css-class="custom-body">'
      );
      expect(result).toContain('</mj-body>');
    });
  });

  describe('Section Component', () => {
    it('converts Section props to MJML attributes', () => {
      const sectionProps = {
        backgroundColor: '#f6f6f6',
        backgroundPosition: 'top center',
        backgroundPositionX: 'none',
        backgroundPositionY: 'none',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto' as const,
        backgroundUrl: 'https://example.com/bg.jpg',
        border: 'none',
        borderBottom: '1px solid #333333',
        borderLeft: '1px solid #333333',
        borderRadius: '4px',
        borderRight: '1px solid #333333',
        borderTop: '1px solid #333333',
        class: 'custom-section',
        direction: 'ltr' as const,
        fullWidth: 'true',
        padding: '10px 25px',
        paddingBottom: '20px' as const,
        paddingLeft: '20px' as const,
        paddingRight: '20px' as const,
        paddingTop: '20px' as const,
        textAlign: 'left' as const
      };

      const markup = renderSvelteComponent(Section, sectionProps);
      const result = extractMJMLMarkup(markup);

      // Verify Section component renders correctly
      expect(result).toContain('<mj-section');
      Object.entries(sectionProps).forEach(([key, value]) => {
        // Convert from camelCase to kebab-case with special handling for 'class'
        let attr = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        if (attr === 'class') attr = 'css-class';
        if (attr === 'full-width') value = value.toString();

        expect(result).toContain(`${attr}="${value}"`);
      });

      expect(result).toContain('<div>Test Section</div>');
      expect(result).toContain('</mj-section>');

      // Also verify Group is rendered
      expect(result).toContain('<mj-group');
      expect(result).toContain('background-color="#f6f6f6"');
      expect(result).toContain('css-class="custom-group"');
      expect(result).toContain('direction="ltr"');
      expect(result).toContain('vertical-align="middle"');
      expect(result).toContain('width="75%"');
      expect(result).toContain('<div>Test Group</div>');
      expect(result).toContain('</mj-group>');
    });
  });

  describe('Column Component', () => {
    it('converts Column props to MJML attributes', () => {
      const columnProps = {
        backgroundColor: '#f6f6f6',
        border: 'none',
        borderBottom: '1px solid #333333',
        borderLeft: '1px solid #333333',
        borderRadius: '4px',
        borderRight: '1px solid #333333',
        borderTop: '1px solid #333333',
        class: 'custom-column',
        innerBackgroundColor: '#f6f6f6',
        innerBorder: 'none',
        innerBorderBottom: '1px solid #333333',
        innerBorderLeft: '1px solid #333333',
        innerBorderRadius: '4px',
        innerBorderRight: '1px solid #333333',
        innerBorderTop: '1px solid #333333',
        padding: '10px 25px',
        paddingBottom: '20px' as const,
        paddingLeft: '20px' as const,
        paddingRight: '20px' as const,
        paddingTop: '20px' as const,
        verticalAlign: 'middle' as const,
        width: '50%' as const
      };

      const markup = renderSvelteComponent(Column, columnProps);
      const result = extractMJMLMarkup(markup);

      // Verify Column component renders correctly
      expect(result).toContain('<mj-column');
      Object.entries(columnProps).forEach(([key, value]) => {
        // Convert from camelCase to kebab-case with special handling for 'class'
        let attr = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        if (attr === 'class') attr = 'css-class';

        expect(result).toContain(`${attr}="${value}"`);
      });

      expect(result).toContain('<div>Test Column</div>');

      // Verify sub-components are rendered
      expect(result).toContain(
        '<mj-divider border-color="#e0e0e0" border-style="dashed" border-width="1px" padding="15px 0" />'
      );
      expect(result).toContain('<mj-spacer height="20px" />');
      expect(result).toContain('</mj-column>');
    });
  });

  describe('Container Component', () => {
    it('converts Container props to MJML wrapper', () => {
      const containerProps = {
        backgroundColor: '#f6f6f6',
        backgroundPosition: 'top center',
        backgroundPositionX: 'none',
        backgroundPositionY: 'none',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto' as const,
        backgroundUrl: 'https://example.com/bg.jpg',
        border: 'none',
        borderBottom: '1px solid #333333',
        borderLeft: '1px solid #333333',
        borderRadius: '4px',
        borderRight: '1px solid #333333',
        borderTop: '1px solid #333333',
        class: 'custom-container',
        fullWidth: 'true',
        padding: '10px 25px',
        paddingBottom: '20px' as const,
        paddingLeft: '20px' as const,
        paddingRight: '20px' as const,
        paddingTop: '20px' as const,
        textAlign: 'center' as const
      };

      const markup = renderSvelteComponent(Container, containerProps);
      const result = extractMJMLMarkup(markup);

      // Verify Container component renders as mj-wrapper
      expect(result).toContain('<mj-wrapper');
      Object.entries(containerProps).forEach(([key, value]) => {
        // Convert from camelCase to kebab-case with special handling for 'class'
        let attr = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        if (attr === 'class') attr = 'css-class';
        if (attr === 'full-width') value = value.toString();

        expect(result).toContain(`${attr}="${value}"`);
      });

      // Verify content is rendered
      expect(result).toContain('<div>Test Section 1</div>');
      expect(result).toContain('<div>Test Section 2</div>');
      expect(result).toContain('</mj-wrapper>');
    });
  });

  describe('Text Component', () => {
    it('converts Text props to MJML attributes', () => {
      const textProps = {
        align: 'left' as const,
        class: 'custom-text',
        color: '#333333',
        containerBackgroundColor: '#f6f6f6',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px' as const,
        fontStyle: 'normal' as const,
        fontWeight: 'normal' as const,
        height: '16px' as const,
        letterSpacing: '2px' as const,
        lineHeight: '24px' as const,
        padding: '10px 25px',
        paddingBottom: '20px' as const,
        paddingLeft: '20px' as const,
        paddingRight: '20px' as const,
        paddingTop: '20px' as const,
        textDecoration: 'none' as const,
        textTransform: 'capitalize' as const
      };

      const markup = renderSvelteComponent(Text, textProps);
      const result = extractMJMLMarkup(markup);

      // Verify Text component renders correctly
      expect(result).toContain('<mj-text');
      Object.entries(textProps).forEach(([key, value]) => {
        // Convert from camelCase to kebab-case with special handling for 'class'
        let attr = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        if (attr === 'class') attr = 'css-class';

        expect(result).toContain(`${attr}="${value}"`);
      });

      // Verify content is rendered
      expect(result).toContain('<h1>Hello World</h1>');
      expect(result).toContain('<p>Paragraph</p>');
      expect(result).toContain('</mj-text>');
    });
  });

  describe('Image Component', () => {
    it('converts Image props to MJML attributes', () => {
      const imageProps = {
        src: 'https://example.com/image.jpg',
        align: 'center' as const,
        alt: 'Alternative text',
        border: '1px solid #333333',
        borderTop: 'none',
        borderBottom: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        borderRadius: '4px',
        class: 'custom-image',
        containerBackgroundColor: '#f6f6f6',
        fluidOnMobile: 'true' as const,
        height: 'auto' as const,
        href: 'https://example.com',
        padding: '10px 25px',
        paddingBottom: '20px' as const,
        paddingLeft: '20px' as const,
        paddingRight: '20px' as const,
        paddingTop: '20px' as const,
        target: '_blank',
        title: 'Image title',
        width: '600px' as const
      };

      const markup = renderSvelteComponent(Image, imageProps);
      const result = extractMJMLMarkup(markup);

      // Verify Image component renders correctly
      expect(result).toContain('<mj-image');
      Object.entries(imageProps).forEach(([key, value]) => {
        // Convert from camelCase to kebab-case with special handling for 'class'
        let attr = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        if (attr === 'class') attr = 'css-class';
        if (attr === 'fluid-on-mobile') value = value.toString();

        expect(result).toContain(`${attr}="${value}"`);
      });
    });

    it('handles local image paths during development', () => {
      const envState = process.env.NODE_ENV;
      const localSrc = 'src/lib/assets/local-image.png';

      // Mock the dev environment
      process.env.NODE_ENV = 'development';
      const markup1 = renderSvelteComponent(Image, {
        src: localSrc,
        width: '600px' as const
      });
      const resultDevelopment = extractMJMLMarkup(markup1);

      // Local path should be converted to absolute URL in development
      expect(resultDevelopment).toContain(`<mj-image src="${base}${localSrc}" width="600px" />`);

      // Mock the production environment
      process.env.NODE_ENV = 'production';
      const markup2 = renderSvelteComponent(Image, {
        src: localSrc,
        width: '600px' as const
      });
      const resultProduction = extractMJMLMarkup(markup2);

      // Local path should not be converted in production
      expect(resultProduction).toContain(`<mj-image src="${localSrc}" width="600px" />`);

      // Restore the original environment
      process.env.NODE_ENV = envState;
    });
  });

  describe('Button Component', () => {
    it('converts Button props to MJML attributes', () => {
      const buttonProps = {
        align: 'left' as const,
        backgroundColor: '#007bff',
        border: '1px solid #007bff',
        borderBottom: 'none',
        borderLeft: 'none',
        borderRadius: '4px',
        borderRight: 'none',
        borderTop: 'none',
        class: 'custom-button',
        color: '#ffffff',
        containerBackgroundColor: '#f6f6f6',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px' as const,
        fontStyle: 'normal' as const,
        fontWeight: 'normal' as const,
        height: '100px' as const,
        href: 'https://example.com',
        innerPadding: '10px 25px',
        letterSpacing: '2px' as const,
        lineHeight: '24px' as const,
        padding: '10px',
        paddingBottom: '10px' as const,
        paddingLeft: '20px' as const,
        paddingRight: '20px' as const,
        paddingTop: '10px' as const,
        target: '_blank' as const,
        textAlign: 'center' as const,
        textDecoration: 'none' as const,
        textTransform: 'uppercase' as const,
        title: 'Button title',
        width: '100px' as const
      };

      const markup = renderSvelteComponent(Button, buttonProps);
      const result = extractMJMLMarkup(markup);

      // Verify Button component renders correctly
      expect(result).toContain('<mj-button');
      Object.entries(buttonProps).forEach(([key, value]) => {
        // Convert from camelCase to kebab-case with special handling for 'class'
        let attr = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        if (attr === 'class') attr = 'css-class';

        expect(result).toContain(`${attr}="${value}"`);
      });

      expect(result).toContain('Button Test');
      expect(result).toContain('</mj-button>');
    });
  });

  describe('Table Component', () => {
    it('converts Table props to MJML attributes', () => {
      const tableProps = {
        align: 'left' as const,
        border: '1px solid #333333',
        cellPadding: '10px 25px',
        cellSpacing: '0px' as const,
        color: '#333333',
        class: 'custom-table',
        containerBackgroundColor: '#f6f6f6',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px' as const,
        lineHeight: '24px' as const,
        padding: '10px 25px',
        paddingBottom: '20px' as const,
        paddingLeft: '20px' as const,
        paddingRight: '20px' as const,
        paddingTop: '20px' as const,
        role: 'presentation' as const,
        width: '100%' as const
      };

      const markup = renderSvelteComponent(Table, tableProps);
      const result = extractMJMLMarkup(markup);

      // Verify Table component renders correctly
      expect(result).toContain('<mj-table');
      Object.entries(tableProps).forEach(([key, value]) => {
        // Convert from camelCase to kebab-case with special handling for 'class'
        let attr = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        if (attr === 'class') attr = 'css-class';
        if (attr === 'cell-padding') attr = 'cellpadding';
        if (attr === 'cell-spacing') attr = 'cellspacing';

        expect(result).toContain(`${attr}="${value}"`);
      });

      // Verify table content is rendered
      const expectedElements = [
        '<tr>',
        '<th>Header 1</th>',
        '<th>Header 2</th>',
        '</tr>',
        '<tr>',
        '<td>Value 1</td>',
        '<td>Value 2</td>',
        '</tr>',
        '</mj-table>'
      ];

      expectedElements.forEach((element) => {
        expect(result).toContain(element);
      });
    });
  });

  describe('Social Component', () => {
    it('converts Social props to MJML attributes', () => {
      const socialProps = {
        align: 'left' as const,
        borderRadius: '4px',
        class: 'custom-social',
        color: '#333333',
        containerBackgroundColor: '#f6f6f6',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px' as const,
        fontStyle: 'normal' as const,
        fontWeight: 'normal' as const,
        iconHeight: '24px' as const,
        iconPadding: '5px',
        iconSize: '20px' as const,
        innerPadding: '10px 25px',
        lineHeight: '24px' as const,
        mode: 'horizontal' as const,
        padding: '10px 25px',
        paddingBottom: '20px' as const,
        paddingLeft: '20px' as const,
        paddingRight: '20px' as const,
        paddingTop: '20px' as const,
        textPadding: '5px'
      };

      const markup = renderSvelteComponent(Social, socialProps);
      const result = extractMJMLMarkup(markup);

      // Verify Social component renders correctly
      expect(result).toContain('<mj-social');
      Object.entries(socialProps).forEach(([key, value]) => {
        // Convert from camelCase to kebab-case with special handling for 'class'
        let attr = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        if (attr === 'class') attr = 'css-class';

        expect(result).toContain(`${attr}="${value}"`);
      });

      // Verify social elements are rendered
      const expectedElements = [
        '<mj-social-element name="facebook" href="https://facebook.com/profile" />',
        '<mj-social-element name="twitter" href="https://twitter.com/profile" />',
        '<mj-social-element name="linkedin" href="https://linkedin.com/profile"> Social Element Test 1 </mj-social-element>',
        '<mj-social-element name="github" href="https://github.com/profile"> Social Element Test 2 </mj-social-element>',
        '</mj-social>'
      ];

      expectedElements.forEach((element) => {
        expect(result).toContain(element);
      });

      // Verify custom social element with all attributes
      expect(result).toContain('<mj-social-element name="instagram"');
      expect(result).toContain('align="left"');
      expect(result).toContain('alt="Instagram"');
      expect(result).toContain('background-color="#333"');
      expect(result).toContain('css-class="custom-social-element"');
    });

    it('handles local icon paths during development', () => {
      const envState = process.env.NODE_ENV;
      const localSrc = 'src/lib/assets/local-icon.png';

      // Mock the dev environment
      process.env.NODE_ENV = 'development';
      const markup1 = renderSvelteComponent(Social, {});
      const resultDevelopment = extractMJMLMarkup(markup1);

      // Local path should be converted to absolute URL in development
      expect(resultDevelopment).toContain(
        `<mj-social-element name="example" alt="Local Icon" href="https://example.com" src="${base}${localSrc}"> Local Icon Test </mj-social-element>`
      );

      // Mock the production environment
      process.env.NODE_ENV = 'production';
      const markup2 = renderSvelteComponent(Social, {});
      const resultProduction = extractMJMLMarkup(markup2);

      // Local path should not be converted in production
      expect(resultProduction).toContain(
        `<mj-social-element name="example" alt="Local Icon" href="https://example.com" src="${localSrc}"> Local Icon Test </mj-social-element>`
      );

      // Restore the original environment
      process.env.NODE_ENV = envState;
    });
  });

  describe('Raw Component', () => {
    it('renders HTML content directly without MJML wrapper', () => {
      const markup = renderSvelteComponent(Raw, {});
      const result = extractMJMLMarkup(markup);

      // Verify raw content is rendered correctly
      const expectedElements = [
        '<mj-raw>',
        '<h1>Hello World</h1>',
        '<span>',
        '<p>Paragraph</p>',
        '</span>',
        '</mj-raw>'
      ];

      expectedElements.forEach((element) => {
        expect(result).toContain(element);
      });
    });
  });
});
