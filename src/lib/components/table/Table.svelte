<script lang="ts">
	/**
	 * @component Table
	 * @description A component for creating HTML tables in email templates.
	 * Provides consistent table rendering across email clients while supporting
	 * standard table attributes and styling options.
	 *
	 * @example
	 * Basic usage:
	 * ```svelte
	 * <Table>
	 *   <table>
	 *     <tr>
	 *       <td>Cell 1</td>
	 *       <td>Cell 2</td>
	 *     </tr>
	 *   </table>
	 * </Table>
	 * ```
	 *
	 * Styled table:
	 * ```svelte
	 * <Table
	 *   borderRadius="4px"
	 *   cellpadding="8"
	 *   cellspacing="0"
	 *   color="#333333"
	 *   fontSize="14px"
	 * >
	 *   <table>
	 *     <tr>
	 *       <th>Header 1</th>
	 *       <th>Header 2</th>
	 *     </tr>
	 *     <tr>
	 *       <td>Value 1</td>
	 *       <td>Value 2</td>
	 *     </tr>
	 *   </table>
	 * </Table>
	 * ```
	 *
	 * @typedef {Object} Props
	 * @property {Snippet} [children] - The table content to be rendered
	 * @property {'left'|'right'|'center'} [align="left"] - Horizontal alignment of the table
	 * @property {string} [border="none"] - CSS border property for the table
	 * @property {string} [cellpadding] - Cell padding for all table cells
	 * @property {string} [cellspacing] - Cell spacing between table cells
	 * @property {string} [color="#000000"] - Text color within the table
	 * @property {string} [class] - CSS class names to apply, defined in the Head component's styles
	 * @property {string} [containerBackgroundColor] - Background color of the table container
	 * @property {string} [fontFamily="Ubuntu, Helvetica, Arial, sans-serif"] - Font family for table text
	 * @property {string} [fontSize="13px"] - Font size for table text
	 * @property {string} [lineHeight="22px"] - Line height for table text
	 * @property {string} [padding="10px 25px"] - Padding around the table
	 * @property {string} [paddingBottom] - Bottom padding
	 * @property {string} [paddingLeft] - Left padding
	 * @property {string} [paddingRight] - Right padding
	 * @property {string} [paddingTop] - Top padding
	 * @property {'none'|'presentation'} [role] - ARIA role for the table
	 * @property {'auto'|'fixed'|'initial'|'inherit'} [tableLayout="auto"] - CSS table-layout property
	 * @property {string} [width="100%"] - Width of the table
	 *
	 * @remarks
	 * The Table component is a wrapper for HTML table elements that ensures
	 * consistent rendering across email clients. While it provides styling
	 * and layout options, the actual table structure should be created using
	 * standard HTML table elements within the component.
	 */

	import type { Snippet } from 'svelte';
	import type { Properties } from 'csstype';
	import type { DefaultUnits } from '$lib/types.js';

	interface Props {
		children?: Snippet;
		align?: 'left' | 'right' | 'center';
		border?: Properties['border'];
		cellPadding?: Properties['padding'];
		cellSpacing?: DefaultUnits['cellSpacing'];
		color?: Properties['color'];
		class?: string;
		containerBackgroundColor?: Properties['backgroundColor'];
		fontFamily?: Properties['fontFamily'];
		fontSize?: DefaultUnits['fontSize'];
		lineHeight?: DefaultUnits['lineHeight'];
		padding?: Properties['padding'];
		paddingBottom?: DefaultUnits['paddingBottom'];
		paddingLeft?: DefaultUnits['paddingLeft'];
		paddingRight?: DefaultUnits['paddingRight'];
		paddingTop?: DefaultUnits['paddingTop'];
		role?: 'none' | 'presentation';
		tableLayout?: 'auto' | 'fixed' | 'initial' | 'inherit';
		width?: DefaultUnits['width'] | `${number}%`;
	}

	const {
		children,
		align,
		border,
		cellPadding,
		cellSpacing,
		color,
		containerBackgroundColor,
		class: cssClass,
		fontFamily,
		fontSize,
		lineHeight,
		padding,
		paddingBottom,
		paddingLeft,
		paddingRight,
		paddingTop,
		role,
		tableLayout,
		width
	}: Props = $props();

	const mjmlTableTag = 'mj-table';

	const attributes = [
		align && `align="${align}"`,
		border && `border="${border}"`,
		cellPadding && `cellpadding="${cellPadding}"`,
		cellSpacing && `cellspacing="${cellSpacing}"`,
		color && `color="${color}"`,
		containerBackgroundColor && `container-background-color="${containerBackgroundColor}"`,
		cssClass && `css-class="${cssClass}"`,
		fontFamily && `font-family="${fontFamily}"`,
		fontSize && `font-size="${fontSize}"`,
		lineHeight && `line-height="${lineHeight}"`,
		padding && `padding="${padding}"`,
		paddingBottom && `padding-bottom="${paddingBottom}"`,
		paddingLeft && `padding-left="${paddingLeft}"`,
		paddingRight && `padding-right="${paddingRight}"`,
		paddingTop && `padding-top="${paddingTop}"`,
		role && `role="${role}"`,
		tableLayout && `table-layout="${tableLayout}"`,
		width && `width="${width}"`
	]
		.filter(Boolean)
		.join(' ');
</script>

{@html `<${mjmlTableTag} ${attributes}>`}
{@render children?.()}
{@html `</${mjmlTableTag}>`}
