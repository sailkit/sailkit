<script lang="ts">
	/**
	 * @component Text
	 * @description A component for displaying and styling text content in email templates.
	 * Provides comprehensive typography controls and ensures consistent text rendering
	 * across email clients.
	 *
	 * @example
	 * Basic usage:
	 * ```svelte
	 * <Text>
	 *   Simple paragraph of text
	 * </Text>
	 * ```
	 *
	 * Styled text:
	 * ```svelte
	 * <Text
	 *   color="#333333"
	 *   fontSize="16px"
	 *   fontWeight="bold"
	 *   textTransform="uppercase"
	 *   align="center"
	 *   padding="20px"
	 * >
	 *   Important message
	 * </Text>
	 * ```
	 *
	 * @typedef {Object} Props
	 * @property {Snippet} [children] - The text content to be rendered
	 * @property {'left'|'right'|'center'|'justify'} [align="left"] - Text alignment
	 * @property {string} [class] - CSS class names to apply, defined in the Head component's styles
	 * @property {string} [color="#000000"] - Text color
	 * @property {string} [containerBackgroundColor] - Background color of the text container
	 * @property {string} [fontFamily="Ubuntu, Helvetica, Arial, sans-serif"] - Font family for the text
	 * @property {string} [fontSize="13px"] - Font size in pixels
	 * @property {'normal'|'italic'|'oblique'} [fontStyle] - Font style
	 * @property {number|'normal'|'bold'} [fontWeight] - Font weight
	 * @property {string} [height] - Fixed height in pixels
	 * @property {string} [letterSpacing] - Letter spacing in pixels or em
	 * @property {string} [lineHeight="1px"] - Line height in pixels
	 * @property {string} [padding="10px 25px"] - Padding shorthand
	 * @property {string} [paddingBottom] - Bottom padding in pixels
	 * @property {string} [paddingLeft] - Left padding in pixels
	 * @property {string} [paddingRight] - Right padding in pixels
	 * @property {string} [paddingTop] - Top padding in pixels
	 * @property {'underline'|'overline'|'line-through'|'none'} [textDecoration] - Text decoration
	 * @property {'uppercase'|'lowercase'|'capitalize'} [textTransform] - Text transformation
	 *
	 * @remarks
	 * The Text component handles proper text rendering in email clients and
	 * supports a wide range of typographic controls. All size-related properties
	 * (fontSize, lineHeight, padding, etc.) should be specified in pixels or em
	 * units for best email client compatibility.
	 */

	import type { Snippet } from 'svelte';
	import type { Properties } from 'csstype';
	import type { DefaultUnits } from '$lib/types.js';

	interface Props {
		children?: Snippet;
		align?: 'left' | 'right' | 'center' | 'justify';
		class?: string;
		color?: Properties['color'];
		containerBackgroundColor?: Properties['backgroundColor'];
		fontFamily?: Properties['fontFamily'];
		fontSize?: DefaultUnits['fontSize'];
		fontStyle?: 'normal' | 'italic' | 'oblique';
		fontWeight?: number | 'normal' | 'bold';
		height?: DefaultUnits['height'];
		letterSpacing?: DefaultUnits['letterSpacing'];
		lineHeight?: DefaultUnits['lineHeight'];
		padding?: Properties['padding'];
		paddingBottom?: DefaultUnits['paddingBottom'];
		paddingLeft?: DefaultUnits['paddingLeft'];
		paddingRight?: DefaultUnits['paddingRight'];
		paddingTop?: DefaultUnits['paddingTop'];
		textDecoration?: 'underline' | 'overline' | 'line-through' | 'none';
		textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
	}

	const {
		children,
		align = 'left',
		class: cssClass,
		color = '#000000',
		containerBackgroundColor,
		fontFamily,
		fontSize = '13px',
		fontStyle,
		fontWeight,
		height,
		letterSpacing,
		lineHeight,
		padding = '10px 25px',
		paddingBottom,
		paddingLeft,
		paddingRight,
		paddingTop,
		textDecoration,
		textTransform
	}: Props = $props();

	const mjmlTextTag = 'mj-text';

	const attributes = [
		align && `align="${align}"`,
		color && `color="${color}"`,
		containerBackgroundColor && `container-background-color="${containerBackgroundColor}"`,
		cssClass && `css-class="${cssClass}"`,
		fontFamily && `font-family="${fontFamily}"`,
		fontSize && `font-size="${fontSize}"`,
		fontStyle && `font-style="${fontStyle}"`,
		fontWeight && `font-weight="${fontWeight}"`,
		height && `height="${height}"`,
		letterSpacing && `letter-spacing="${letterSpacing}"`,
		lineHeight && `line-height="${lineHeight}"`,
		padding && `padding="${padding}"`,
		paddingBottom && `padding-bottom="${paddingBottom}"`,
		paddingLeft && `padding-left="${paddingLeft}"`,
		paddingRight && `padding-right="${paddingRight}"`,
		paddingTop && `padding-top="${paddingTop}"`,
		textDecoration && `text-decoration="${textDecoration}"`,
		textTransform && `text-transform="${textTransform}"`
	]
		.filter(Boolean)
		.join(' ');
</script>

{@html `<${mjmlTextTag} ${attributes}>`}
{@render children?.()}
{@html `</${mjmlTextTag}>`}
