<script lang="ts">
	/**
	 * @component Column.Spacer
	 * @description A component that creates vertical spacing within Columns.
	 * Used to add consistent vertical gaps between content elements.
	 *
	 * @example
	 * ```svelte
	 * <Column>
	 *   First content block
	 *   <Column.Spacer height="30px" />
	 *   Second content block
	 * </Column>
	 * ```
	 *
	 * @remarks
	 * The Spacer component is accessible as a nested component of Column
	 * and provides a clean way to add vertical spacing without using
	 * margin or padding on content elements.
	 */

	import type { Properties } from 'csstype';
	import type { DefaultUnits } from '$lib/types.js';

	interface Props {
		/** Background color of the spacer area */
		containerBackgroundColor?: Properties['backgroundColor'];
		/** CSS class name(s) that correspond to styles defined in the Head component's styles prop. */
		class?: string;
		/** Height of the spacer (default: 20px) */
		height?: DefaultUnits['height'];
		/** Padding around the spacer (default: none) */
		padding?: Properties['padding'];
		/** Bottom padding */
		paddingBottom?: DefaultUnits['paddingBottom'];
		/** Left padding */
		paddingLeft?: DefaultUnits['paddingLeft'];
		/** Right padding */
		paddingRight?: DefaultUnits['paddingRight'];
		/** Top padding */
		paddingTop?: DefaultUnits['paddingTop'];
	}

	const {
		class: cssClass,
		containerBackgroundColor,
		height,
		padding,
		paddingBottom,
		paddingLeft,
		paddingRight,
		paddingTop
	}: Props = $props();

	const mjmlSpacerTag = 'mj-spacer';

	const attributes = [
		containerBackgroundColor && `container-background-color="${containerBackgroundColor}"`,
		cssClass && `css-class="${cssClass}"`,
		height && `height="${height}"`,
		padding && `padding="${padding}"`,
		paddingBottom && `padding-bottom="${paddingBottom}"`,
		paddingLeft && `padding-left="${paddingLeft}"`,
		paddingRight && `padding-right="${paddingRight}"`,
		paddingTop && `padding-top="${paddingTop}"`
	]
		.filter(Boolean)
		.join(' ');
</script>

{@html `<${mjmlSpacerTag} ${attributes} />`}
