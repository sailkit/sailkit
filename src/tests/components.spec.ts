import { describe, it, expect } from 'vitest';
import { extractMJMLMarkup, renderSvelteComponent } from '$lib/render.js';

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

describe('Html Component', () => {
	it('should convert HTML props to MJML', async () => {
		const result = renderSvelteComponent(Html, {
			language: 'ar',
			dir: 'rtl',
			owa: true
		});

		expect(result).toContain('<mjml lang="ar" dir="rtl" owa="desktop">');
	});
});

describe('Head Component', () => {
	it('should convert Head props to MJML', async () => {
		const markup = renderSvelteComponent(Head, {
			subject: 'Test Email',
			preview: 'Test Preview',
			fonts: [
				{
					name: 'Open Sans',
					href: 'https://fonts.googleapis.com/css?family=Open+Sans'
				}
			],
			breakpoint: '480px',
			styles: {
				global: 'font-family="Open Sans"',
				components: {
					text: 'color="#333333"'
				},
				custom: [
					// Regular CSS (not inlined)
					`.title {
							font-size: 32px;
							font-weight: 600;
							color: #1F2937;
						}`,
					{
						inline: true,
						css: '.header { font-size: 24px; }'
					},
					`@media (max-width: 480px) { .title { font-size: 24px; } .mobile-hidden { display: none; } }`
				]
			}
		});

		const result = extractMJMLMarkup(markup);

		expect(result).toContain('<mj-head>');
		expect(result).toContain('<mj-raw>');
		expect(result).toContain('<meta name="x-apple-disable-message-reformatting">');
		expect(result).toContain('<meta name="color-scheme" content="light dark">');
		expect(result).toContain('<meta name="supported-color-schemes" content="light dark">');
		expect(result).toContain('</mj-raw>');
		expect(result).toContain('<mj-title>Test Email</mj-title>');
		expect(result).toContain('<mj-preview>Test Preview</mj-preview>');
		expect(result).toContain(
			'<mj-font name="Open Sans" href="https://fonts.googleapis.com/css?family=Open+Sans" />'
		);
		expect(result).toContain('<mj-breakpoint width="480px" />');
		expect(result).toContain('<mj-all font-family="Open Sans" />');
		expect(result).toContain('<mj-text color="#333333" />');
		expect(result).toContain(
			'<mj-style>.title { font-size: 32px; font-weight: 600; color: #1F2937; }</mj-style>'
		);
		expect(result).toContain('<mj-style inline="inline">.header { font-size: 24px; }</mj-style>');
		expect(result).toContain(
			'<mj-style>@media (max-width: 480px) { .title { font-size: 24px; } .mobile-hidden { display: none; } }</mj-style>'
		);
		expect(result).toContain('</mj-head>');
	});
});

describe('Body Component', () => {
	it('should convert Body props to MJML', async () => {
		const markup = renderSvelteComponent(Body, {
			backgroundColor: '#f6f6f6',
			width: '650px',
			class: 'custom-body'
		});

		const result = extractMJMLMarkup(markup);

		expect(result).toContain(
			'<mj-body background-color="#f6f6f6" width="650px" css-class="custom-body">'
		);
		expect(result).toContain('</mj-body>');
	});
});

describe('Section Component', () => {
	it('should convert Section props to MJML', async () => {
		const markup = renderSvelteComponent(Section, {
			backgroundColor: '#f6f6f6',
			backgroundPosition: 'top center',
			backgroundPositionX: 'none',
			backgroundPositionY: 'none',
			backgroundRepeat: 'repeat',
			backgroundSize: 'auto',
			backgroundUrl: 'https://example.com/bg.jpg',
			border: 'none',
			borderBottom: '1px solid #333333',
			borderLeft: '1px solid #333333',
			borderRadius: '4px',
			borderRight: '1px solid #333333',
			borderTop: '1px solid #333333',
			class: 'custom-section',
			direction: 'ltr',
			fullWidth: 'true',
			padding: '10px 25px',
			paddingBottom: '20px',
			paddingLeft: '20px',
			paddingRight: '20px',
			paddingTop: '20px',
			textAlign: 'left'
		});

		const result = extractMJMLMarkup(markup);

		expect(result).toContain(
			'<mj-section background-color="#f6f6f6" background-position="top center" background-position-x="none" background-position-y="none" background-repeat="repeat" background-size="auto" background-url="https://example.com/bg.jpg" border="none" border-bottom="1px solid #333333" border-left="1px solid #333333" border-radius="4px" border-right="1px solid #333333" border-top="1px solid #333333" css-class="custom-section" direction="ltr" full-width="true" padding="10px 25px" padding-bottom="20px" padding-left="20px" padding-right="20px" padding-top="20px" text-align="left">'
		);
		expect(result).toContain('<div>Test Section</div>');
		expect(result).toContain('</mj-section>');
		expect(result).toContain(
			'<mj-group background-color="#f6f6f6" css-class="custom-group" direction="ltr" vertical-align="middle" width="75%">'
		);
		expect(result).toContain('<div>Test Group</div>');
		expect(result).toContain('</mj-group>');
	});
});

describe('Column Component', () => {
	it('should convert Column props to MJML', async () => {
		const markup = renderSvelteComponent(Column, {
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
			paddingBottom: '20px',
			paddingLeft: '20px',
			paddingRight: '20px',
			paddingTop: '20px',
			verticalAlign: 'middle',
			width: '50%'
		});

		const result = extractMJMLMarkup(markup);

		expect(result).toContain(
			'<mj-column background-color="#f6f6f6" border="none" border-bottom="1px solid #333333" border-left="1px solid #333333" border-radius="4px" border-right="1px solid #333333" border-top="1px solid #333333" css-class="custom-column" inner-background-color="#f6f6f6" inner-border="none" inner-border-bottom="1px solid #333333" inner-border-left="1px solid #333333" inner-border-radius="4px" inner-border-right="1px solid #333333" inner-border-top="1px solid #333333" padding="10px 25px" padding-bottom="20px" padding-left="20px" padding-right="20px" padding-top="20px" vertical-align="middle" width="50%">'
		);
		expect(result).toContain('<div>Test Column</div>');
		expect(result).toContain(
			'<mj-divider border-color="#e0e0e0" border-style="dashed" border-width="1px" padding="15px 0" />'
		);
		expect(result).toContain('<mj-spacer height="20px" />');
		expect(result).toContain('</mj-column>');
	});
});

describe('Container Component', () => {
	it('should convert Container props to MJML', async () => {
		const markup = renderSvelteComponent(Container, {
			backgroundColor: '#f6f6f6',
			backgroundPosition: 'top center',
			backgroundPositionX: 'none',
			backgroundPositionY: 'none',
			backgroundRepeat: 'repeat',
			backgroundSize: 'auto',
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
			paddingBottom: '20px',
			paddingLeft: '20px',
			paddingRight: '20px',
			paddingTop: '20px',
			textAlign: 'center'
		});

		const result = extractMJMLMarkup(markup);

		expect(result).toContain(
			'<mj-wrapper background-color="#f6f6f6" background-position="top center" background-position-x="none" background-position-y="none" background-repeat="repeat" background-size="auto" background-url="https://example.com/bg.jpg" border="none" border-bottom="1px solid #333333" border-left="1px solid #333333" border-radius="4px" border-right="1px solid #333333" border-top="1px solid #333333" css-class="custom-container" full-width="true" padding="10px 25px" padding-bottom="20px" padding-left="20px" padding-right="20px" padding-top="20px" text-align="center">'
		);
		expect(result).toContain('<div>Test Section 1</div>');
		expect(result).toContain('<div>Test Section 2</div>');
		expect(result).toContain('</mj-wrapper>');
	});
});

describe('Text Component', () => {
	it('should convert Text props to MJML', async () => {
		const markup = renderSvelteComponent(Text, {
			align: 'left',
			class: 'custom-text',
			color: '#333333',
			containerBackgroundColor: '#f6f6f6',
			fontFamily: 'Open Sans',
			fontSize: '13px',
			fontStyle: 'italic',
			fontWeight: 'bold',
			height: '30px',
			letterSpacing: '0.5em',
			lineHeight: '50px',
			padding: '10px 25px',
			paddingBottom: '20px',
			paddingLeft: '20px',
			paddingRight: '20px',
			paddingTop: '20px',
			textDecoration: 'underline',
			textTransform: 'uppercase'
		});

		const result = extractMJMLMarkup(markup);

		expect(result).toContain(
			'<mj-text align="left" color="#333333" container-background-color="#f6f6f6" css-class="custom-text" font-family="Open Sans" font-size="13px" font-style="italic" font-weight="bold" height="30px" letter-spacing="0.5em" line-height="50px" padding="10px 25px" padding-bottom="20px" padding-left="20px" padding-right="20px" padding-top="20px" text-decoration="underline" text-transform="uppercase">'
		);
		expect(result).toContain('<h1>Hello World</h1>');
		expect(result).toContain('<p>Paragraph</p>');
		expect(result).toContain('</mj-text>');
	});
});

describe('Image Component', () => {
	it('should convert Image props to MJML', async () => {
		const markup = renderSvelteComponent(Image, {
			src: 'https://example.com/image.jpg',
			align: 'center',
			alt: 'Alternative text',
			border: '1px solid #333333',
			borderTop: '1px solid #333333',
			borderBottom: '1px solid #333333',
			borderLeft: '1px solid #333333',
			borderRight: '1px solid #333333',
			borderRadius: '4px',
			class: 'custom-image',
			containerBackgroundColor: '#f6f6f6',
			fluidOnMobile: 'true',
			height: 'auto',
			href: 'https://example.com',
			name: 'image-1',
			padding: '10px 25px',
			paddingTop: '20px',
			paddingBottom: '20px',
			paddingLeft: '20px',
			paddingRight: '20px',
			rel: 'nofollow',
			srcset: 'image-2x.jpg 2x, image-3x.jpg 3x',
			target: '_blank',
			title: 'Image Title',
			usemap: '#image-map',
			width: '600px'
		});

		const result = extractMJMLMarkup(markup);

		expect(result).toContain(
			'<mj-image src="https://example.com/image.jpg" align="center" alt="Alternative text" border="1px solid #333333" border-top="1px solid #333333" border-bottom="1px solid #333333" border-left="1px solid #333333" border-right="1px solid #333333" border-radius="4px" css-class="custom-image" container-background-color="#f6f6f6" fluid-on-mobile="true" height="auto" href="https://example.com" name="image-1" padding="10px 25px" padding-top="20px" padding-bottom="20px" padding-left="20px" padding-right="20px" rel="nofollow" srcset="image-2x.jpg 2x, image-3x.jpg 3x" target="_blank" title="Image Title" usemap="#image-map" width="600px" />'
		);
	});
});

describe('Button Component', () => {
	it('should convert Button props to MJML', async () => {
		const markup = renderSvelteComponent(Button, {
			align: 'left',
			backgroundColor: '#007bff',
			border: '1px solid #007bff',
			borderBottom: '1px solid #007bff',
			borderLeft: '1px solid #007bff',
			borderRadius: '4px',
			borderRight: '1px solid #007bff',
			borderTop: '1px solid #007bff',
			class: 'custom-button',
			color: '#ffffff',
			containerBackgroundColor: '#007bff',
			fontFamily: 'Open Sans',
			fontSize: '13px',
			fontStyle: 'normal',
			fontWeight: 'bold',
			height: '30px',
			href: 'https://example.com',
			innerPadding: '10px 25px',
			letterSpacing: '0.5em',
			lineHeight: '50px',
			padding: '10px 25px',
			paddingBottom: '20px',
			paddingLeft: '20px',
			paddingRight: '20px',
			paddingTop: '20px',
			rel: 'nofollow',
			target: '_blank',
			textAlign: 'left',
			textDecoration: 'underline',
			textTransform: 'capitalize',
			title: 'Button Title',
			verticalAlign: 'middle',
			width: '100px'
		});

		const result = extractMJMLMarkup(markup);

		expect(result).toContain(
			'<mj-button align="left" background-color="#007bff" border="1px solid #007bff" border-bottom="1px solid #007bff" border-left="1px solid #007bff" border-radius="4px" border-right="1px solid #007bff" border-top="1px solid #007bff" color="#ffffff" container-background-color="#007bff" css-class="custom-button" font-family="Open Sans" font-size="13px" font-style="normal" font-weight="bold" height="30px" href="https://example.com" inner-padding="10px 25px" letter-spacing="0.5em" line-height="50px" padding="10px 25px" padding-bottom="20px" padding-left="20px" padding-right="20px" padding-top="20px" rel="nofollow" target="_blank" text-align="left" text-decoration="underline" text-transform="capitalize" title="Button Title" vertical-align="middle" width="100px">'
		);
		expect(result).toContain('Button Test');
		expect(result).toContain('</mj-button>');
	});
});

describe('Table Component', () => {
	it('should convert Table props to MJML', async () => {
		const markup = renderSvelteComponent(Table, {
			align: 'left',
			border: '1px solid #333333',
			cellPadding: '10px 25px',
			cellSpacing: '20px',
			color: '#333333',
			class: 'custom-table',
			containerBackgroundColor: '#f6f6f6',
			fontFamily: 'Open Sans',
			fontSize: '13px',
			lineHeight: '50px',
			padding: '10px 25px',
			paddingBottom: '20px',
			paddingLeft: '20px',
			paddingRight: '20px',
			paddingTop: '20px',
			role: 'presentation',
			tableLayout: 'fixed',
			width: '100%'
		});

		const result = extractMJMLMarkup(markup);

		expect(result).toContain(
			'<mj-table align="left" border="1px solid #333333" cellpadding="10px 25px" cellspacing="20px" color="#333333" container-background-color="#f6f6f6" css-class="custom-table" font-family="Open Sans" font-size="13px" line-height="50px" padding="10px 25px" padding-bottom="20px" padding-left="20px" padding-right="20px" padding-top="20px" role="presentation" table-layout="fixed" width="100%">'
		);
		expect(result).toContain('<tr>');
		expect(result).toContain('<th>Header 1</th>');
		expect(result).toContain('<th>Header 2</th>');
		expect(result).toContain('</tr>');
		expect(result).toContain('<tr>');
		expect(result).toContain('<td>Value 1</td>');
		expect(result).toContain('<td>Value 2</td>');
		expect(result).toContain('</tr>');
		expect(result).toContain('</mj-table>');
	});
});

describe('Social Component', () => {
	it('should convert Social props to MJML', async () => {
		const markup = renderSvelteComponent(Social, {
			align: 'left',
			borderRadius: '4px',
			class: 'custom-social',
			color: '#333333',
			containerBackgroundColor: '#f6f6f6',
			fontFamily: 'Open Sans',
			fontSize: '13px',
			fontStyle: 'normal',
			fontWeight: 'bold',
			iconHeight: '30px',
			iconPadding: '0px',
			iconSize: '20px',
			innerPadding: '10px 25px',
			lineHeight: '50px',
			mode: 'horizontal',
			padding: '10px 25px',
			paddingBottom: '20px',
			paddingLeft: '20px',
			paddingRight: '20px',
			paddingTop: '20px',
			textDecoration: 'underline',
			textPadding: '10px 25px'
		});

		const result = extractMJMLMarkup(markup);

		expect(result).toContain(
			'<mj-social align="left" border-radius="4px" color="#333333" container-background-color="#f6f6f6" css-class="custom-social" font-family="Open Sans" font-size="13px" font-style="normal" font-weight="bold" icon-height="30px" icon-padding="0px" icon-size="20px" inner-padding="10px 25px" line-height="50px" mode="horizontal" padding="10px 25px" padding-bottom="20px" padding-left="20px" padding-right="20px" padding-top="20px" text-decoration="underline" text-padding="10px 25px">'
		);
		expect(result).toContain(
			'<mj-social-element name="facebook" href="https://facebook.com/profile" />'
		);
		expect(result).toContain(
			'<mj-social-element name="twitter" href="https://twitter.com/profile" />'
		);
		expect(result).toContain(
			'<mj-social-element name="linkedin" href="https://linkedin.com/profile"> Social Element Test 1 </mj-social-element>'
		);
		expect(result).toContain(
			'<mj-social-element name="github" href="https://github.com/profile"> Social Element Test 2 </mj-social-element>'
		);
		expect(result).toContain(
			'<mj-social-element name="instagram" align="left" alt="Instagram" background-color="#333" border-radius="8px" color="#fff" css-class="custom-social-element" font-family="Ubuntu, Helvetica, Arial, sans-serif" font-size="13px" font-style="normal" font-weight="normal" href="https://instagram.com/profile" icon-height="20px" icon-position="right" icon-size="25px" line-height="22px" padding="0px" padding-bottom="0px" padding-left="0px" padding-right="0px" padding-top="0px" rel="nofollow" src="https://example.com/image.jpg" srcset="image-2x.jpg 2x, image-3x.jpg 3x" target="_blank" text-decoration="underline" title="Instagram" vertical-align="middle" />'
		);

		expect(result).toContain('</mj-social>');
	});
});

describe('Raw Component', () => {
	it('should convert Raw props to MJML', async () => {
		const markup = renderSvelteComponent(Raw, {});

		const result = extractMJMLMarkup(markup);

		expect(result).toContain('<h1>Hello World</h1>');
		expect(result).toContain('<span>');
		expect(result).toContain('<p>Paragraph</p>');
		expect(result).toContain('</span>');
		expect(result).toContain('</mj-raw>');
	});
});
