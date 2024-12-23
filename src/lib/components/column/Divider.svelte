<script lang="ts">
	/**
	 * @component Column.Divider
	 * @description A horizontal line divider component designed to work within Columns.
	 * Used to create visual separation between content sections.
	 *
	 * @example
	 * ```svelte
	 * <Column>
	 *   Content above
	 *   <Column.Divider
	 *     borderColor="#e0e0e0"
	 *     borderStyle="dashed"
	 *     borderWidth="1px"
	 *   />
	 *   Content below
	 * </Column>
	 * ```
	 *
	 * @typedef {Object} Props
	 * @property {'left'|'right'|'center'} [align="center"] - Horizontal alignment of the divider
	 * @property {string} [borderColor="#000000"] - Color of the divider line
	 * @property {'dashed'|'dotted'|'solid'} [borderStyle="solid"] - Style of the divider line
	 * @property {string} [borderWidth="4px"] - Thickness of the divider line
	 * @property {string} [containerBackgroundColor] - Background color behind the divider
	 * @property {string} [class] - CSS class name(s) that correspond to styles defined in the Head component's styles prop. These styles can be defined as either inline or regular CSS classes.
	 * @property {string} [padding="10px 25px"] - Padding shorthand for all sides
	 * @property {string} [paddingBottom] - Bottom padding
	 * @property {string} [paddingLeft] - Left padding
	 * @property {string} [paddingRight] - Right padding
	 * @property {string} [paddingTop] - Top padding
	 * @property {string} [width="100%"] - Width of the divider
	 *
	 * @remarks
	 * The Divider component is accessible as a nested component of Column
	 * and is typically used to create visual breaks between content sections
	 * within a column.
	 */

	import type { Properties } from 'csstype';
	import type { DefaultUnits } from '$lib/types.js';

	interface Props {
		align?: 'left' | 'right' | 'center';
		borderColor?: Properties['borderColor'];
		borderStyle?: 'dashed' | 'dotted' | 'solid';
		borderWidth?: DefaultUnits['borderWidth'];
		class?: string;
		containerBackgroundColor?: Properties['backgroundColor'];
		padding?: Properties['padding'];
		paddingBottom?: DefaultUnits['paddingBottom'];
		paddingLeft?: DefaultUnits['paddingLeft'];
		paddingRight?: DefaultUnits['paddingRight'];
		paddingTop?: DefaultUnits['paddingTop'];
		width?: DefaultUnits['width'] | `${number}%`;
	}

	const {
		align,
		borderColor,
		borderStyle,
		borderWidth,
		class: cssClass,
		containerBackgroundColor,
		padding,
		paddingBottom,
		paddingLeft,
		paddingRight,
		paddingTop,
		width
	}: Props = $props();

	const mjmlDividerTag = 'mj-divider';

	const attributes = [
		align && `align="${align}"`,
		borderColor && `border-color="${borderColor}"`,
		borderStyle && `border-style="${borderStyle}"`,
		borderWidth && `border-width="${borderWidth}"`,
		containerBackgroundColor && `container-background-color="${containerBackgroundColor}"`,
		cssClass && `css-class="${cssClass}"`,
		padding && `padding="${padding}"`,
		paddingBottom && `padding-bottom="${paddingBottom}"`,
		paddingLeft && `padding-left="${paddingLeft}"`,
		paddingRight && `padding-right="${paddingRight}"`,
		paddingTop && `padding-top="${paddingTop}"`,
		width && `width="${width}"`
	]
		.filter(Boolean)
		.join(' ');
</script>

{@html `<${mjmlDividerTag} ${attributes} />`}
