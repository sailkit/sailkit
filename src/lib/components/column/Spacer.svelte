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
	 * @typedef {Object} Props
	 * @property {string} [class] - CSS class name(s) that correspond to styles defined in the Head component's styles prop. These styles can be defined as either inline or regular CSS classes.
	 * @property {string} [containerBackgroundColor] - Background color of the spacer area
	 * @property {string|number} [height="20px"] - Height of the spacer
	 * @property {string|number} [padding="0px"] - Padding shorthand for all sides
	 * @property {string|number} [paddingTop] - Top padding
	 * @property {string|number} [paddingBottom] - Bottom padding
	 * @property {string|number} [paddingLeft] - Left padding
	 * @property {string|number} [paddingRight] - Right padding
	 *
	 * @remarks
	 * The Spacer component is accessible as a nested component of Column
	 * and provides a clean way to add vertical spacing without using
	 * margin or padding on content elements.
	 */

	import type { Properties } from 'csstype';
	import type { DefaultUnits } from '$lib/types.js';

	interface Props {
		containerBackgroundColor?: Properties['backgroundColor'];
		class?: string;
		height?: DefaultUnits['height'];
		padding?: Properties['padding'];
		paddingBottom?: DefaultUnits['paddingBottom'];
		paddingLeft?: DefaultUnits['paddingLeft'];
		paddingRight?: DefaultUnits['paddingRight'];
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
