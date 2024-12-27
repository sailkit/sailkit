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
	 * 	<div>
	 *   	<span>
	 * 			<h1>Hello World</h1>
	 * 			<p>Paragraph</p>
	 * 		</span>
	 * 	</div>
	 * </Raw>
	 * ```
	 *
	 * @remarks
	 * The Raw component is particularly useful when you need to:
	 * - Include custom HTML that should not be processed
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
