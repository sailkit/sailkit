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
	 *   styles={[
	 *     {
	 *       type: "class",
	 *       value: ".header { color: #333333; }",
	 *       inline: true
	 *     },
	 *     {
	 *       type: "component",
	 *       component: "text",
	 *       value: "color: #666666; font-family: Roboto, sans-serif;"
	 *     }
	 *   ]}
	 * />
	 * ```
	 *
	 * @typedef {Object} Props
	 * @property {string} subject - The email subject line. This will appear in email clients'
	 *                             subject field.
	 * @property {string} [preview] - Optional preview text that appears in email clients'
	 *                               preview/snippet area. If not provided, email clients may
	 *                               use the first text content from the email body.
	 * @property {{name: string, href: string}[]} [fonts] - Array of custom fonts to be included
	 *                                                      in the email. Each font requires a name
	 *                                                      and a URL to its source.
	 * @property {string} [breakpoint] - The width (in pixels) at which the email switches from
	 *                                  desktop to mobile layout.
	 * @property {Styles[]} [styles] - Array of style definitions for the email template.
	 *
	 * @remarks
	 * The Head component should be used once per email template and placed before any content
	 * components. It's crucial for:
	 * - Defining email metadata (subject, preview)
	 * - Setting up responsive design (breakpoint)
	 * - Managing typography (fonts)
	 * - Establishing styling (global styles, component styles, and CSS classes)
	 *
	 * Style definitions follow a hierarchy:
	 * 1. Global styles (type: 'global') affect all components
	 * 2. Component styles (type: 'component') affect specific SailKit components
	 * 3. CSS classes (type: 'class') can be applied to components via their class prop
	 */

	import type { DefaultUnits } from '$lib/types.js';

	type Styles = {
		type: 'global' | 'component' | 'class';
		component?:
			| 'body'
			| 'button'
			| 'column'
			| 'divider'
			| 'hero'
			| 'image'
			| 'image'
			| 'section'
			| 'social-element'
			| 'social'
			| 'table'
			| 'text'
			| 'wrapper';
		value: string;
		inline?: boolean;
	}[];

	interface Props {
		subject: string;
		preview?: string;
		fonts?: {
			name: string;
			href: string;
		}[];
		breakpoint?: DefaultUnits['breakpoint'];
		styles?: Styles;
	}

	const { subject, preview, fonts, breakpoint, styles }: Props = $props();

	const mjmlHeadTag = 'mj-head';
	const mjmlTitleTag = 'mj-title';
	const mjmlPreviewTag = 'mj-preview';
	const mjmlAttributesTag = 'mj-attributes';
	const mjmlFontTag = 'mj-font';
	const mjmlBreakpointTag = 'mj-breakpoint';
	const mjmlStyleTag = 'mj-style';
	const mjmlAllTag = 'mj-all';
</script>

{@html `<${mjmlHeadTag}>`}
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
	{#each styles as { type, component, value }}
		{#if type === 'global'}
			{@html `<${mjmlAllTag} ${value} />`}
		{/if}
		{#if type === 'component'}
			{@html `<mj-${component} ${value} />`}
		{/if}
	{/each}
	{@html `</${mjmlAttributesTag}>`}
	{#each styles as { type, value, inline }}
		{#if type === 'class'}
			{@html `<${mjmlStyleTag} ${inline ? `inline="inline"` : ''}>
			${value}
			</${mjmlStyleTag}>`}
		{/if}
	{/each}
{/if}
{@html `</${mjmlHeadTag}>`}
