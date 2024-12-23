<script lang="ts">
	/**
	 * @component Social
	 * @description A container component for social network links and icons.
	 * This component manages the layout and styling of social media elements,
	 * which are added using the Social.Element nested component.
	 *
	 * @example
	 * Basic usage:
	 * ```svelte
	 * <Social>
	 *   <Social.Element name="facebook" href="https://facebook.com/profile" />
	 *   <Social.Element name="twitter" href="https://twitter.com/profile" />
	 * </Social>
	 * ```
	 *
	 * Customized layout:
	 * ```svelte
	 * <Social
	 *   mode="vertical"
	 *   align="left"
	 *   iconSize="30px"
	 *   color="#666666"
	 * >
	 *   <Social.Element name="linkedin" href="https://linkedin.com/in/profile">
	 *     Connect on LinkedIn
	 *   </Social.Element>
	 *   <Social.Element name="github" href="https://github.com/profile">
	 *     Follow on GitHub
	 *   </Social.Element>
	 * </Social>
	 * ```
	 *
	 * @typedef {Object} Props
	 * @property {Snippet} [children] - Social.Element components to be rendered
	 * @property {'left'|'right'|'center'} [align="center"] - Horizontal alignment of social elements
	 * @property {string} [borderRadius="3px"] - Border radius for social elements
	 * @property {string} [class] - CSS class names to apply, defined in the Head component's styles
	 * @property {string} [color="#333333"] - Text color for social elements
	 * @property {string} [containerBackgroundColor] - Background color of the container
	 * @property {string} [fontFamily="Ubuntu, Helvetica, Arial, sans-serif"] - Font family for text
	 * @property {string} [fontSize="13px"] - Font size for text
	 * @property {string} [fontStyle="normal"] - Font style for text
	 * @property {string} [fontWeight="normal"] - Font weight for text
	 * @property {string} [iconHeight] - Fixed height for social icons
	 * @property {string} [iconPadding="0px"] - Padding around icons
	 * @property {string} [iconSize="20px"] - Size of social icons
	 * @property {string} [innerPadding="4px"] - Inner padding for social elements
	 * @property {string} [lineHeight="22px"] - Line height for text
	 * @property {'horizontal'|'vertical'} [mode="horizontal"] - Layout direction
	 * @property {string} [padding="10px 25px"] - Padding around the container
	 * @property {string} [paddingBottom] - Bottom padding
	 * @property {string} [paddingLeft] - Left padding
	 * @property {string} [paddingRight] - Right padding
	 * @property {string} [paddingTop] - Top padding
	 * @property {'underline'|'overline'|'none'} [textDecoration="none"] - Text decoration style
	 * @property {string} [textPadding="4px 4px 4px 0"] - Padding around text
	 *
	 * @remarks
	 * The Social component must contain one or more Social.Element components.
	 * It handles the overall layout and styling while individual
	 * elements are configured through the Social.Element component.
	 */

	import type { Snippet } from 'svelte';
	import type { Properties } from 'csstype';
	import type { DefaultUnits } from '$lib/types.js';

	interface Props {
		children?: Snippet;
		align?: 'left' | 'right' | 'center';
		borderRadius?: Properties['borderRadius'];
		class?: string;
		color?: Properties['color'];
		containerBackgroundColor?: Properties['backgroundColor'];
		fontFamily?: Properties['fontFamily'];
		fontSize?: DefaultUnits['fontSize'];
		fontStyle?: 'normal' | 'italic' | 'oblique';
		fontWeight?: number | 'normal' | 'bold';
		iconHeight?: DefaultUnits['iconHeight'];
		iconPadding?: string | number;
		iconSize?: DefaultUnits['iconSize'];
		innerPadding?: DefaultUnits['innerPadding'];
		lineHeight?: DefaultUnits['lineHeight'];
		mode?: 'horizontal' | 'vertical';
		padding?: Properties['padding'];
		paddingBottom?: DefaultUnits['paddingBottom'];
		paddingLeft?: DefaultUnits['paddingLeft'];
		paddingRight?: DefaultUnits['paddingRight'];
		paddingTop?: DefaultUnits['paddingTop'];
		textDecoration?: 'underline' | 'overline' | 'none';
		textPadding?: Properties['padding'];
	}

	const {
		children,
		align,
		borderRadius,
		class: cssClass,
		color,
		containerBackgroundColor,
		fontFamily,
		fontSize,
		fontStyle,
		fontWeight,
		iconHeight,
		iconPadding,
		iconSize,
		innerPadding,
		lineHeight,
		mode,
		padding,
		paddingBottom,
		paddingLeft,
		paddingRight,
		paddingTop,
		textDecoration,
		textPadding
	}: Props = $props();

	const mjmlSocialTag = 'mj-social';

	const attributes = [
		align && `align="${align}"`,
		borderRadius && `border-radius="${borderRadius}"`,
		color && `color="${color}"`,
		cssClass && `css-class="${cssClass}"`,
		containerBackgroundColor && `container-background-color="${containerBackgroundColor}"`,
		fontFamily && `font-family="${fontFamily}"`,
		fontSize && `font-size="${fontSize}"`,
		fontStyle && `font-style="${fontStyle}"`,
		fontWeight && `font-weight="${fontWeight}"`,
		iconHeight && `icon-height="${iconHeight}"`,
		iconSize && `icon-size="${iconSize}"`,
		iconPadding && `icon-padding="${iconPadding}"`,
		innerPadding && `inner-padding="${innerPadding}"`,
		lineHeight && `line-height="${lineHeight}"`,
		mode && `mode="${mode}"`,
		padding && `padding="${padding}"`,
		paddingBottom && `padding-bottom="${paddingBottom}"`,
		paddingLeft && `padding-left="${paddingLeft}"`,
		paddingRight && `padding-right="${paddingRight}"`,
		paddingTop && `padding-top="${paddingTop}"`,
		textDecoration && `text-decoration="${textDecoration}"`,
		textPadding && `text-padding="${textPadding}"`
	]
		.filter(Boolean)
		.join(' ');
</script>

{@html `<${mjmlSocialTag} ${attributes}>`}
{@render children?.()}
{@html `</${mjmlSocialTag}>`}
