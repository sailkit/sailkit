<script lang="ts">
	/**
	 * @component Image
	 * @description A component for displaying responsive images in email templates.
	 * Handles image scaling, alignment, and linking while maintaining compatibility
	 * across email clients.
	 *
	 * @example
	 * Basic usage:
	 * ```svelte
	 * <Image
	 *   src="https://example.com/image.jpg"
	 *   alt="Description"
	 *   width="600px"
	 * />
	 * ```
	 *
	 * Responsive image with link:
	 * ```svelte
	 * <Image
	 *   src="https://example.com/image.jpg"
	 *   srcset="image-2x.jpg 2x, image-3x.jpg 3x"
	 *   href="https://example.com"
	 *   fluidOnMobile="true"
	 *   padding="20px"
	 *   borderRadius="8px"
	 * />
	 * ```
	 *
	 * @typedef {Object} Props
	 * @property {'left'|'center'|'right'} [align="center"] - Horizontal alignment of the image
	 * @property {string} [alt=""] - Alternative text for the image
	 * @property {string} [border="none"] - CSS border shorthand for all sides
	 * @property {string} [borderBottom="none"] - Bottom border style
	 * @property {string} [borderLeft="none"] - Left border style
	 * @property {string} [borderRadius] - Border radius for all corners
	 * @property {string} [borderRight="none"] - Right border style
	 * @property {string} [borderTop="none"] - Top border style
	 * @property {string} [containerBackgroundColor] - Background color of the image container
	 * @property {string} [css] - CSS class names to apply, defined in the Head component's styles
	 * @property {string} [fluidOnMobile] - Whether the image should be full-width on mobile devices
	 * @property {string} [height="auto"] - Image height
	 * @property {string} [href] - URL the image links to
	 * @property {string} [name] - Name attribute for the image
	 * @property {string} [padding="10px 25px"] - Padding shorthand for all sides
	 * @property {string} [paddingBottom] - Bottom padding
	 * @property {string} [paddingLeft] - Left padding
	 * @property {string} [paddingRight] - Right padding
	 * @property {string} [paddingTop] - Top padding
	 * @property {string} [rel] - Relationship attribute for the link
	 * @property {string} [sizes] - Sizes attribute for responsive images
	 * @property {string} [src] - Source URL of the image
	 * @property {string} [srcset] - Srcset attribute for responsive images
	 * @property {string} [target="_blank"] - Target attribute for the link
	 * @property {string} [title] - Title attribute for the image
	 * @property {string} [usemap] - Usemap attribute for image maps
	 * @property {string} [width] - Image width
	 *
	 * @remarks
	 * The Image component automatically handles responsive behavior and email client
	 * compatibility. For best results, host images on a reliable CDN and provide
	 * fixed dimensions. The fluidOnMobile property helps create better mobile
	 * experiences by allowing images to stretch full-width on small screens.
	 */

	import type { Properties } from 'csstype';
	import type { DefaultUnits } from '$lib/types.js';

	interface Props {
		align?: 'left' | 'center' | 'right';
		alt?: string;
		border?: Properties['border'];
		borderBottom?: Properties['borderBottom'];
		borderLeft?: Properties['borderLeft'];
		borderRadius?: Properties['borderRadius'];
		borderRight?: Properties['borderRight'];
		borderTop?: Properties['borderTop'];
		class?: string;
		containerBackgroundColor?: Properties['backgroundColor'];
		fluidOnMobile?: 'true';
		height?: DefaultUnits['height'] | 'auto';
		href?: string;
		name?: string;
		padding?: Properties['padding'];
		paddingBottom?: DefaultUnits['paddingBottom'];
		paddingLeft?: DefaultUnits['paddingLeft'];
		paddingRight?: DefaultUnits['paddingRight'];
		paddingTop?: DefaultUnits['paddingTop'];
		rel?: string;
		src?: string;
		srcset?: string;
		target?: string;
		title?: string;
		usemap?: string;
		width?: DefaultUnits['width'];
	}

	const {
		src,
		align,
		alt,
		border,
		borderTop,
		borderBottom,
		borderLeft,
		borderRight,
		borderRadius,
		class: cssClass,
		containerBackgroundColor,
		fluidOnMobile,
		height,
		href,
		name,
		padding,
		paddingTop,
		paddingBottom,
		paddingLeft,
		paddingRight,
		rel,
		srcset,
		target,
		title,
		usemap,
		width
	}: Props = $props();

	const mjmlImageTag = 'mj-image';

	const attributes = [
		src && `src="${src}"`,
		align && `align="${align}"`,
		alt && `alt="${alt}"`,
		border && `border="${border}"`,
		borderTop && `border-top="${borderTop}"`,
		borderBottom && `border-bottom="${borderBottom}"`,
		borderLeft && `border-left="${borderLeft}"`,
		borderRight && `border-right="${borderRight}"`,
		borderRadius && `border-radius="${borderRadius}"`,
		cssClass && `css-class="${cssClass}"`,
		containerBackgroundColor && `container-background-color="${containerBackgroundColor}"`,
		fluidOnMobile && `fluid-on-mobile="${fluidOnMobile}"`,
		height && `height="${height}"`,
		href && `href="${href}"`,
		name && `name="${name}"`,
		padding && `padding="${padding}"`,
		paddingTop && `padding-top="${paddingTop}"`,
		paddingBottom && `padding-bottom="${paddingBottom}"`,
		paddingLeft && `padding-left="${paddingLeft}"`,
		paddingRight && `padding-right="${paddingRight}"`,
		rel && `rel="${rel}"`,
		srcset && `srcset="${srcset}"`,
		target && `target="${target}"`,
		title && `title="${title}"`,
		usemap && `usemap="${usemap}"`,
		width && `width="${width}"`
	]
		.filter(Boolean)
		.join(' ');
</script>

{@html `<${mjmlImageTag} ${attributes} />`}
