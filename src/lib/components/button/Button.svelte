<script lang="ts">
	/**
	 * @component Button
	 * @description A component for creating responsive and stylizable buttons in email templates.
	 * The button component renders as an HTML link styled to look like a button, ensuring
	 * compatibility across email clients.
	 *
	 * @example
	 * Basic usage:
	 * ```svelte
	 * <Button href="https://example.com">
	 *   Click me
	 * </Button>
	 * ```
	 *
	 * Styled button:
	 * ```svelte
	 * <Button
	 *   href="https://example.com"
	 *   backgroundColor="#007bff"
	 *   borderRadius="5px"
	 *   fontSize="16px"
	 *   padding="15px 30px"
	 * >
	 *   Join now
	 * </Button>
	 * ```
	 *
	 * @typedef {Object} Props
	 * @property {Snippet} [children] - The content to be rendered within the button
	 * @property {'left'|'center'|'right'} [align="center"] - Horizontal alignment of the button
	 * @property {string} [backgroundColor="#414141"] - Background color of the button
	 * @property {string} [border="none"] - CSS border shorthand for all sides
	 * @property {string} [borderBottom] - Bottom border style
	 * @property {string} [borderLeft] - Left border style
	 * @property {string} [borderRadius="3px"] - Border radius for all corners
	 * @property {string} [borderRight] - Right border style
	 * @property {string} [borderTop] - Top border style
	 * @property {string} [class] - CSS class names to apply, defined in the Head component's styles
	 * @property {string} [color="#ffffff"] - Text color of the button
	 * @property {string} [containerBackgroundColor] - Background color of the button container
	 * @property {string} [fontFamily="Ubuntu, Helvetica, Arial, sans-serif"] - Font family for button text
	 * @property {string} [fontSize="13px"] - Font size of the button text
	 * @property {'normal'|'italic'|'oblique'} [fontStyle] - Font style of the button text
	 * @property {number|'normal'|'bold'} [fontWeight="normal"] - Font weight of the button text
	 * @property {string} [height] - Fixed height of the button
	 * @property {string} [href] - URL the button links to
	 * @property {string} [innerPadding="10px 25px"] - Inner padding of the button
	 * @property {string} [letterSpacing] - Letter spacing of the button text
	 * @property {string} [lineHeight="120%"] - Line height of the button text
	 * @property {string} [padding="10px 25px"] - Padding around the button
	 * @property {string} [paddingBottom] - Bottom padding
	 * @property {string} [paddingLeft] - Left padding
	 * @property {string} [paddingRight] - Right padding
	 * @property {string} [paddingTop] - Top padding
	 * @property {string} [rel] - Relationship attribute for the link
	 * @property {'_blank'|'_self'|'_parent'|'_top'} [target="_blank"] - Target attribute for the link
	 * @property {'left'|'center'|'right'} [textAlign] - Text alignment within the button
	 * @property {'underline'|'overline'|'none'} [textDecoration="none"] - Text decoration style
	 * @property {'capitalize'|'uppercase'|'lowercase'} [textTransform] - Text transformation
	 * @property {string} [title] - Title attribute for the button
	 * @property {'top'|'middle'|'bottom'} [verticalAlign="middle"] - Vertical alignment of the button
	 * @property {string} [width] - Fixed width of the button
	 *
	 * @remarks
	 * The Button component is designed for optimal email client compatibility.
	 * It renders as an HTML link styled as a button, which ensures clickability
	 * across different email clients. All styles are inlined for maximum
	 * compatibility, but custom styles can also be applied via the cssClass
	 * prop using styles defined in the Head component.
	 */

	import type { Snippet } from 'svelte';
	import type { Properties } from 'csstype';
	import type { DefaultUnits } from '$lib/types.js';

	interface Props {
		children?: Snippet;
		align?: 'left' | 'center' | 'right';
		backgroundColor?: Properties['backgroundColor'];
		border?: Properties['border'];
		borderBottom?: Properties['borderBottom'];
		borderLeft?: Properties['borderLeft'];
		borderRadius?: Properties['borderRadius'];
		borderRight?: Properties['borderRight'];
		borderTop?: Properties['borderTop'];
		class?: string;
		color?: Properties['color'];
		containerBackgroundColor?: Properties['backgroundColor'];
		fontFamily?: Properties['fontFamily'];
		fontSize?: DefaultUnits['fontSize'];
		fontStyle?: 'normal' | 'italic' | 'oblique';
		fontWeight?: number | 'normal' | 'bold';
		height?: DefaultUnits['height'];
		href?: string;
		innerPadding?: Properties['padding'];
		letterSpacing?: DefaultUnits['letterSpacing'];
		lineHeight?: DefaultUnits['lineHeight'];
		padding?: Properties['padding'];
		paddingBottom?: DefaultUnits['paddingBottom'];
		paddingLeft?: DefaultUnits['paddingLeft'];
		paddingRight?: DefaultUnits['paddingRight'];
		paddingTop?: DefaultUnits['paddingTop'];
		rel?: string;
		target?: '_blank' | '_self' | '_parent' | '_top';
		textAlign?: 'left' | 'center' | 'right';
		textDecoration?: 'underline' | 'overline' | 'none';
		textTransform?: 'capitalize' | 'uppercase' | 'lowercase';
		title?: string;
		verticalAlign?: 'top' | 'middle' | 'bottom';
		width?: DefaultUnits['width'];
	}

	const {
		children,
		align,
		backgroundColor,
		border,
		borderBottom,
		borderLeft,
		borderRadius,
		borderRight,
		borderTop,
		class: cssClass,
		color,
		containerBackgroundColor,
		fontFamily,
		fontSize,
		fontStyle,
		fontWeight,
		height,
		href,
		innerPadding,
		letterSpacing,
		lineHeight,
		padding,
		paddingBottom,
		paddingLeft,
		paddingRight,
		paddingTop,
		rel,
		target,
		textAlign,
		textDecoration,
		textTransform,
		title,
		verticalAlign,
		width
	}: Props = $props();

	const mjmlButtonTag = 'mj-button';

	const attributes = [
		align && `align="${align}"`,
		backgroundColor && `background-color="${backgroundColor}"`,
		border && `border="${border}"`,
		borderBottom && `border-bottom="${borderBottom}"`,
		borderLeft && `border-left="${borderLeft}"`,
		borderRadius && `border-radius="${borderRadius}"`,
		borderRight && `border-right="${borderRight}"`,
		borderTop && `border-top="${borderTop}"`,
		color && `color="${color}"`,
		containerBackgroundColor && `container-background-color="${containerBackgroundColor}"`,
		cssClass && `css-class="${cssClass}"`,
		fontFamily && `font-family="${fontFamily}"`,
		fontSize && `font-size="${fontSize}"`,
		fontStyle && `font-style="${fontStyle}"`,
		fontWeight && `font-weight="${fontWeight}"`,
		height && `height="${height}"`,
		href && `href="${href}"`,
		innerPadding && `inner-padding="${innerPadding}"`,
		letterSpacing && `letter-spacing="${letterSpacing}"`,
		lineHeight && `line-height="${lineHeight}"`,
		padding && `padding="${padding}"`,
		paddingBottom && `padding-bottom="${paddingBottom}"`,
		paddingLeft && `padding-left="${paddingLeft}"`,
		paddingRight && `padding-right="${paddingRight}"`,
		paddingTop && `padding-top="${paddingTop}"`,
		rel && `rel="${rel}"`,
		target && `target="${target}"`,
		textAlign && `text-align="${textAlign}"`,
		textDecoration && `text-decoration="${textDecoration}"`,
		textTransform && `text-transform="${textTransform}"`,
		title && `title="${title}"`,
		verticalAlign && `vertical-align="${verticalAlign}"`,
		width && `width="${width}"`
	]
		.filter(Boolean)
		.join(' ');
</script>

{@html `<${mjmlButtonTag} ${attributes}>`}
{@render children?.()}
{@html `</${mjmlButtonTag}>`}
