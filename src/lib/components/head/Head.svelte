<script lang="ts">
	/**
	 * @component Head
	 * @description Defines the email metadata and styling configuration for the email template.
	 * This component manages crucial email properties like subject line, preview text, fonts,
	 * responsive breakpoints, and styles.
	 *
	 * @example
	 * Basic usage:
	 * ```svelte
	 * <Head
	 *   subject="Welcome to Our Newsletter"
	 *   preview="Check out our latest updates and news"
	 * />
	 * ```
	 *
	 * Advanced usage with custom fonts and styles:
	 * ```svelte
	 * <Head
	 *   subject="Welcome to Our Newsletter"
	 *   preview="Check out our latest updates"
	 *   fonts={[
	 *     {
	 *       name: "Roboto",
	 *       href: "https://fonts.googleapis.com/css2?family=Roboto"
	 *     }
	 *   ]}
	 *   breakpoint={480}
	 *   styles={{
	 *     global: 'font-family="Roboto, sans-serif"',
	 *     components: {
	 *       text: 'color="#333333" line-height="1.5"',
	 *       button: 'background-color="#007bff" color="#ffffff"'
	 *     },
	 *     customStyles: [
	 *       // Regular CSS (not inlined)
	 *       `.title {
	 *         font-size: 32px;
	 *         font-weight: 600;
	 *         color: #1F2937;
	 *       }`,
	 *
	 *       // Inlined CSS
	 *       {
	 *         inline: true,
	 *         css: '.header { font-size: 24px; }'
	 *       },
	 *
	 *       // Media queries
	 *       `@media (max-width: 480px) {
	 *         .title { font-size: 24px; }
	 *         .mobile-hidden { display: none; }
	 *       }`
	 *     ]
	 *   }}
	 * />
	 * ```
	 *
	 * @remarks
	 * The Head component should be used once per email template and placed before any content
	 * components. It's crucial for:
	 * - Defining email metadata (subject, preview)
	 * - Setting up responsive design (breakpoint)
	 * - Managing typography (fonts)
	 * - Establishing styling (global styles, component styles, and custom CSS)
	 *
	 * Style definitions follow a hierarchy:
	 * 1. Global styles affect all component
	 * 2. Component styles target specific SailKit components
	 * 3. Custom styles allow for regular CSS rules injection
	 */

	import type { DefaultUnits } from '$lib/types.js';
	import type { Snippet } from 'svelte';

	type ComponentName =
		| 'body'
		| 'button'
		| 'column'
		| 'divider'
		| 'hero'
		| 'image'
		| 'section'
		| 'social-element'
		| 'social'
		| 'table'
		| 'text'
		| 'container';

	interface StyleProps {
		/** Global styles that affect all components */
		global?: string;
		/** Component-specific styles */
		components?: Partial<Record<ComponentName, string>>;
		/** Custom CSS rules */
		custom?: Array<
			| string
			| {
					inline: true;
					css: string;
			  }
		>;
	}

	interface Props {
		children?: Snippet;
		subject: string;
		preview?: string;
		fonts?: {
			name: string;
			href: string;
		}[];
		breakpoint?: DefaultUnits['breakpoint'];
		styles?: StyleProps;
	}

	const { children, subject, preview, fonts, breakpoint, styles }: Props = $props();

	const mjmlHeadTag = 'mj-head';
	const mjmlTitleTag = 'mj-title';
	const mjmlPreviewTag = 'mj-preview';
	const mjmlAttributesTag = 'mj-attributes';
	const mjmlFontTag = 'mj-font';
	const mjmlBreakpointTag = 'mj-breakpoint';
	const mjmlStyleTag = 'mj-style';
	const mjmlAllTag = 'mj-all';

	function normalizeCSSRule(css: string): string {
		const rules = {
			// Remove newlines and tabs
			removeLineBreaks: /[\n\t]/g,
			// Normalize spaces
			normalizeSpaces: /\s+/g,
			// Format brackets
			openingBracket: /{\s*/g,
			closingBracket: /\s*}/g,
			// Format properties
			semicolon: /;\s*/g,
			// Format media queries
			mediaQuery: /(@media[^{]+){\s*/g
		};

		const replacements = {
			openingBracket: '{ ',
			closingBracket: ' }',
			semicolon: '; ',
			mediaQuery: '$1{ '
		};

		return css
			.replace(rules.removeLineBreaks, '')
			.replace(rules.normalizeSpaces, ' ')
			.replace(rules.openingBracket, replacements.openingBracket)
			.replace(rules.closingBracket, replacements.closingBracket)
			.replace(rules.semicolon, replacements.semicolon)
			.replace(rules.mediaQuery, replacements.mediaQuery)
			.trim();
	}
</script>

{@html `<${mjmlHeadTag}>`}
{@render children?.()}
{@html `<${mjmlTitleTag}>${subject}</${mjmlTitleTag}>`}
{#if preview}
	{@html `<${mjmlPreviewTag}>${preview}</${mjmlPreviewTag}>`}
{/if}
{#if fonts}
	{#each fonts as font}
		{@html `<${mjmlFontTag} name="${font.name}" href="${font.href}" />`}
	{/each}
{/if}
{#if breakpoint}
	{@html `<${mjmlBreakpointTag} width="${breakpoint}" />`}
{/if}
{#if styles}
	{@html `<${mjmlAttributesTag}>`}
	{#if styles.global}
		{@html `<${mjmlAllTag} ${styles.global} />`}
	{/if}
	{#if styles.components}
		{#each Object.entries(styles.components) as [component, value]}
			{#if component === 'container'}
				{@html `<mj-wrapper ${value} />`}
			{:else}
				{@html `<mj-${component} ${value} />`}
			{/if}
		{/each}
	{/if}
	{@html `</${mjmlAttributesTag}>`}
	{#if styles?.custom}
		{#each styles.custom as rule}
			{#if typeof rule === 'string'}
				{@html `<${mjmlStyleTag}>${normalizeCSSRule(rule)}</${mjmlStyleTag}>`}
			{:else}
				{@html `<${mjmlStyleTag} inline="inline">${normalizeCSSRule(rule.css)}</${mjmlStyleTag}>`}
			{/if}
		{/each}
	{/if}
{/if}
{@html `</${mjmlHeadTag}>`}
