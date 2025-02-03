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
	import type { Snippet } from 'svelte';

	type Styles = {
		/** Type of style (global, component, or class) */
		type: 'global' | 'component' | 'class';
		/** Component to which the style applies */
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
			| 'container';
		/** Value of the style */
		value: string;
		/** Whether the style is inline (default: false) */
		inline?: boolean;
	}[];

	interface Props {
		children?: Snippet;
		subject: string;
		preview?: string;
		fonts?: {
			name: string;
			href: string;
		}[];
		breakpoint?: DefaultUnits['breakpoint'];
		styles?: Styles;
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
	{#each styles as { type, component, value }}
		{#if type === 'global'}
			{@html `<${mjmlAllTag} ${value} />`}
		{/if}
		{#if type === 'component'}
			{#if component === 'container'}
				{@html `<mj-wrapper ${value} />`}
			{:else}
				{@html `<mj-${component} ${value} />`}
			{/if}
		{/if}
	{/each}
	{@html `</${mjmlAttributesTag}>`}
	{#each styles as { type, value, inline }}
		{#if type === 'class'}
			{@html `<${mjmlStyleTag} ${inline ? `inline="inline"` : ''}>${value}</${mjmlStyleTag}>`}
		{/if}
	{/each}
{/if}
{@html `</${mjmlHeadTag}>`}
