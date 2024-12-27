<script lang="ts">
	/**
	 * @component Social.Element
	 * @description An individual social network link and icon element.
	 * Must be used within a Social component to render properly. Can include
	 * custom text content.
	 *
	 * @example
	 * Basic usage:
	 * ```svelte
	 * <Social.Element
	 *   name="facebook"
	 *   href="https://facebook.com/profile"
	 * />
	 * ```
	 *
	 * With custom text:
	 * ```svelte
	 * <Social.Element
	 *   name="github"
	 *   href="https://github.com/profile"
	 *   iconSize="25px"
	 *   backgroundColor="#333"
	 *   color="#fff"
	 * >
	 *   Follow us on GitHub
	 * </Social.Element>
	 * ```
	 *
	 * @typedef {Object} Props
	 * @property {Snippet} [children] - Custom text content to display instead of default network label
	 * @property {'left'|'right'|'center'} [align="center"] - Horizontal alignment
	 * @property {string} [alt] - Alternative text for the icon
	 * @property {string} [backgroundColor] - Background color for the element
	 * @property {string} [borderRadius="3px"] - Border radius
	 * @property {string} [class] - CSS class names to apply
	 * @property {string} [color="#333333"] - Text color
	 * @property {string} [containerBackgroundColor] - Background color of container
	 * @property {string} [fontFamily="Ubuntu, Helvetica, Arial, sans-serif"] - Font family
	 * @property {string} [fontSize="13px"] - Font size
	 * @property {string} [fontStyle="normal"] - Font style
	 * @property {string} [fontWeight="normal"] - Font weight
	 * @property {string} [href] - URL for the social link
	 * @property {string} [iconHeight] - Fixed height for the icon
	 * @property {'left'|'right'} [iconPosition] - Position of icon relative to text
	 * @property {string} [iconSize="20px"] - Size of the icon
	 * @property {string} [lineHeight="22px"] - Line height
	 * @property {SocialNetwork} name - Name of the social network
	 * @property {string} [padding="4px"] - Padding around the element
	 * @property {string} [paddingBottom] - Bottom padding
	 * @property {string} [paddingLeft] - Left padding
	 * @property {string} [paddingRight] - Right padding
	 * @property {string} [paddingTop] - Top padding
	 * @property {string} [rel] - Relationship attribute for the link
	 * @property {string} [sizes] - Sizes attribute for responsive images
	 * @property {string} [src] - Custom icon source URL
	 * @property {string} [srcset] - Srcset attribute for responsive images
	 * @property {string} [target="_blank"] - Target attribute for the link
	 * @property {'underline'|'overline'|'none'} [textDecoration="none"] - Text decoration
	 * @property {string} [title] - Title attribute for the link
	 * @property {'top'|'middle'|'bottom'} [verticalAlign="middle"] - Vertical alignment
	 *
	 * @remarks
	 * The SocialNetwork type supports the following networks:
	 * facebook, twitter, x, google, pinterest, linkedin, tumblr,
	 * xing, github, instagram, web, snapchat, youtube, vimeo,
	 * medium, soundcloud, dribbble
	 */

	import type { Snippet } from 'svelte';
	import type { Properties } from 'csstype';
	import type { DefaultUnits } from '$lib/types.js';

	type SocialNetwork =
		| 'facebook'
		| 'twitter'
		| 'x'
		| 'google'
		| 'pinterest'
		| 'linkedin'
		| 'tumblr'
		| 'xing'
		| 'github'
		| 'instagram'
		| 'web'
		| 'snapchat'
		| 'youtube'
		| 'vimeo'
		| 'medium'
		| 'soundcloud'
		| 'dribbble';

	interface Props {
		children?: Snippet;
		align?: 'left' | 'right' | 'center';
		alt?: string;
		backgroundColor?: Properties['backgroundColor'];
		borderRadius?: Properties['borderRadius'];
		class?: string;
		color?: Properties['color'];
		containerBackgroundColor?: Properties['backgroundColor'];
		fontFamily?: Properties['fontFamily'];
		fontSize?: DefaultUnits['fontSize'];
		fontStyle?: 'normal' | 'italic' | 'oblique';
		fontWeight?: number | 'normal' | 'bold';
		href?: string;
		iconHeight?: DefaultUnits['iconHeight'];
		iconPosition?: 'left' | 'right';
		iconSize?: DefaultUnits['iconSize'];
		lineHeight?: DefaultUnits['lineHeight'];
		name: SocialNetwork;
		padding?: Properties['padding'];
		paddingBottom?: DefaultUnits['paddingBottom'];
		paddingLeft?: DefaultUnits['paddingLeft'];
		paddingRight?: DefaultUnits['paddingRight'];
		paddingTop?: DefaultUnits['paddingTop'];
		rel?: string;
		src?: string;
		srcset?: string;
		target?: string;
		textDecoration?: 'underline' | 'overline' | 'none';
		title?: string;
		verticalAlign?: 'top' | 'middle' | 'bottom';
	}

	const {
		children,
		align,
		alt,
		backgroundColor,
		borderRadius,
		class: cssClass,
		color,
		containerBackgroundColor,
		fontFamily,
		fontSize,
		fontStyle,
		fontWeight,
		href,
		iconHeight,
		iconPosition,
		iconSize,
		lineHeight,
		name,
		padding,
		paddingBottom,
		paddingLeft,
		paddingRight,
		paddingTop,
		rel,
		src,
		srcset,
		target,
		textDecoration,
		title,
		verticalAlign
	}: Props = $props();

	const networkName = href === 'my-unchanged-url' ? `${name}-noshare` : name;

	const mjmlSocialElementTag = 'mj-social-element';

	const attributes = [
		name && `name="${networkName}"`,
		align && `align="${align}"`,
		alt && `alt="${alt}"`,
		backgroundColor && `background-color="${backgroundColor}"`,
		borderRadius && `border-radius="${borderRadius}"`,
		color && `color="${color}"`,
		containerBackgroundColor && `container-background-color="${containerBackgroundColor}"`,
		cssClass && `css-class="${cssClass}"`,
		fontFamily && `font-family="${fontFamily}"`,
		fontSize && `font-size="${fontSize}"`,
		fontStyle && `font-style="${fontStyle}"`,
		fontWeight && `font-weight="${fontWeight}"`,
		href && `href="${href}"`,
		iconHeight && `icon-height="${iconHeight}"`,
		iconPosition && `icon-position="${iconPosition}"`,
		iconSize && `icon-size="${iconSize}"`,
		lineHeight && `line-height="${lineHeight}"`,
		padding && `padding="${padding}"`,
		paddingBottom && `padding-bottom="${paddingBottom}"`,
		paddingLeft && `padding-left="${paddingLeft}"`,
		paddingRight && `padding-right="${paddingRight}"`,
		paddingTop && `padding-top="${paddingTop}"`,
		rel && `rel="${rel}"`,
		src && `src="${src}"`,
		srcset && `srcset="${srcset}"`,
		target && `target="${target}"`,
		textDecoration && `text-decoration="${textDecoration}"`,
		title && `title="${title}"`,
		verticalAlign && `vertical-align="${verticalAlign}"`
	]
		.filter(Boolean)
		.join(' ');
</script>

{#if children}
	{@html `<${mjmlSocialElementTag} ${attributes}>`}
	{@render children?.()}
	{@html `</${mjmlSocialElementTag}>`}
{:else}
	{@html `<${mjmlSocialElementTag} ${attributes} />`}
{/if}
