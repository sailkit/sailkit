<script lang="ts">
	/**
	 * @component Column
	 * @description A structural component used to create columns within a Section.
	 * Columns can contain other components and automatically handle responsive behavior.
	 * This component includes nested Divider and Spacer components accessible as Column.Divider
	 * and Column.Spacer.
	 *
	 * @example
	 * ```svelte
	 * <Section>
	 *   <Column width="50%" padding="10px" backgroundColor="#f6f6f6">
	 *     First column content
	 *   </Column>
	 *   <Column width="50%" padding="10px">
	 *     Second column content
	 *   </Column>
	 * </Section>
	 * ```
	 *
	 * With nested components:
	 * ```svelte
	 * <Column>
	 *   Content above
	 *   <Column.Divider borderColor="#f0f0f0" />
	 *   Content below
	 *   <Column.Spacer height="20px" />
	 *   More content
	 * </Column>
	 * ```
	 *
	 * @typedef {Object} Props
	 * @property {Snippet} [children] - The content to be rendered within the column. Can include other SailKit components or regular HTML content.
	 * @property {string} [backgroundColor] - Background color of the column
	 * @property {string} [border="none"] - CSS border shorthand for all sides
	 * @property {string} [borderBottom] - Bottom border style
	 * @property {string} [borderLeft] - Left border style
	 * @property {string} [borderRight] - Right border style
	 * @property {string} [borderTop] - Top border style
	 * @property {string} [class] - CSS class name(s) that correspond to styles defined in the Head component's styles prop. These styles can be defined as either inline or regular CSS classes.
	 * @property {string} [innerBackgroundColor] - Background color of the column's inner content
	 * @property {string} [innerBorder] - Inner border shorthand
	 * @property {string} [innerBorderBottom] - Inner bottom border style
	 * @property {string} [innerBorderLeft] - Inner left border style
	 * @property {string} [innerBorderRight] - Inner right border style
	 * @property {string} [innerBorderTop] - Inner top border style
	 * @property {string} [borderRadius] - Border radius for all corners
	 * @property {string} [innerBorderRadius] - Inner border radius
	 * @property {string} [padding] - Padding shorthand for all sides
	 * @property {string} [paddingBottom] - Bottom padding
	 * @property {string} [paddingLeft] - Left padding
	 * @property {string} [paddingRight] - Right padding
	 * @property {string} [paddingTop] - Top padding
	 * @property {'middle'|'top'|'bottom'} [verticalAlign="top"] - Vertical alignment within the section
	 * @property {string} [width] - Column width (default is auto-calculated based on siblings)
	 *
	 * @remarks
	 * Columns are designed to work within Section components and automatically stack
	 * on mobile devices. The width property defaults to an equal distribution of
	 * available space among non-raw columns in the section. Custom styles can be
	 * applied via the cssClass prop using styles defined in the Head component.
	 */

	import type { Snippet } from 'svelte';
	import type { Properties } from 'csstype';
	import type { DefaultUnits } from '$lib/types.js';

	interface Props {
		children?: Snippet;
		backgroundColor?: Properties['backgroundColor'];
		border?: Properties['border'];
		borderBottom?: Properties['borderBottom'];
		borderLeft?: Properties['borderLeft'];
		borderRadius?: Properties['borderRadius'];
		borderRight?: Properties['borderRight'];
		borderTop?: Properties['borderTop'];
		class?: string;
		innerBackgroundColor?: Properties['backgroundColor'];
		innerBorder?: Properties['border'];
		innerBorderBottom?: Properties['borderBottom'];
		innerBorderLeft?: Properties['borderLeft'];
		innerBorderRadius?: Properties['borderRadius'];
		innerBorderRight?: Properties['borderRight'];
		innerBorderTop?: Properties['borderTop'];
		padding?: Properties['padding'];
		paddingBottom?: DefaultUnits['paddingBottom'];
		paddingLeft?: DefaultUnits['paddingLeft'];
		paddingRight?: DefaultUnits['paddingRight'];
		paddingTop?: DefaultUnits['paddingTop'];
		verticalAlign?: 'middle' | 'top' | 'bottom';
		width?: DefaultUnits['width'] | `${number}%`;
	}

	const {
		children,
		backgroundColor,
		border,
		borderBottom,
		borderLeft,
		borderRadius,
		borderRight,
		borderTop,
		class: cssClass,
		innerBackgroundColor,
		innerBorder,
		innerBorderBottom,
		innerBorderLeft,
		innerBorderRadius,
		innerBorderRight,
		innerBorderTop,
		padding,
		paddingBottom,
		paddingLeft,
		paddingRight,
		paddingTop,
		verticalAlign,
		width
	}: Props = $props();

	const mjmlColumnTag = 'mj-column';

	const attributes = [
		backgroundColor && `background-color="${backgroundColor}"`,
		border && `border="${border}"`,
		borderBottom && `border-bottom="${borderBottom}"`,
		borderLeft && `border-left="${borderLeft}"`,
		borderRadius && `border-radius="${borderRadius}"`,
		borderRight && `border-right="${borderRight}"`,
		borderTop && `border-top="${borderTop}"`,
		cssClass && `css-class="${cssClass}"`,
		innerBackgroundColor && `inner-background-color="${innerBackgroundColor}"`,
		innerBorder && `inner-border="${innerBorder}"`,
		innerBorderBottom && `inner-border-bottom="${innerBorderBottom}"`,
		innerBorderLeft && `inner-border-left="${innerBorderLeft}"`,
		innerBorderRadius && `inner-border-radius="${innerBorderRadius}"`,
		innerBorderRight && `inner-border-right="${innerBorderRight}"`,
		innerBorderTop && `inner-border-top="${innerBorderTop}"`,
		padding && `padding="${padding}"`,
		paddingBottom && `padding-bottom="${paddingBottom}"`,
		paddingLeft && `padding-left="${paddingLeft}"`,
		paddingRight && `padding-right="${paddingRight}"`,
		paddingTop && `padding-top="${paddingTop}"`,
		verticalAlign && `vertical-align="${verticalAlign}"`,
		width && `width="${width}"`
	]
		.filter(Boolean)
		.join(' ');
</script>

{@html `<${mjmlColumnTag} ${attributes}>`}
{@render children?.()}
{@html `</${mjmlColumnTag}>`}
