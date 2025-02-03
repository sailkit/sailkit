<script lang="ts">
	/**
	 * @component Raw
	 * @description A component that allows the inclusion of raw HTML content that will be left untouched
	 * by the email rendering process. Useful for including custom HTML markup or legacy email code
	 * that should bypass processing.
	 *
	 * @example
	 * Basic usage:
	 * ```svelte
	 * <Raw>
	 * 	<meta name="color-scheme" content="light dark" />
	 * 	<meta name="supported-color-schemes" content="light dark" />
	 * </Raw>
	 * ```
	 *
	 * @remarks
	 * The Raw component is particularly useful when you need to:
	 * - Include custom HTML that should not be processed (e.g. meta tags)
	 * - Insert legacy email code that needs to remain unchanged
	 * - Implement custom table structures
	 * Use this component sparingly and only when other SailKit components
	 * cannot achieve the desired layout or functionality.
	 */

	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
	}

	const { children }: Props = $props();

	const mjmlRawTag = 'mj-raw';
</script>

{@html `<${mjmlRawTag}>`}
{@render children?.()}
{@html `</${mjmlRawTag}>`}
