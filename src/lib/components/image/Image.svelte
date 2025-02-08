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
   * @remarks
   * The Image component automatically handles responsive behavior and email client
   * compatibility. For best results, host images on a reliable CDN and provide
   * fixed dimensions. The fluidOnMobile property helps create better mobile
   * experiences by allowing images to stretch full-width on small screens.
   */

  import type { Properties } from 'csstype';
  import type { DefaultUnits } from '$lib/types.js';

  interface Props {
    /** Horizontal alignment of the image (default: center) */
    align?: 'left' | 'center' | 'right';
    /** Alternative text for the image (default: "") */
    alt?: string;
    /** Border shorthand for all sides (default: none) */
    border?: Properties['border'];
    /** Bottom border style (default: none) */
    borderBottom?: Properties['borderBottom'];
    /** Left border style (default: none) */
    borderLeft?: Properties['borderLeft'];
    /** Border radius for corners */
    borderRadius?: Properties['borderRadius'];
    /** Right border style (default: none) */
    borderRight?: Properties['borderRight'];
    /** Top border style (default: none) */
    borderTop?: Properties['borderTop'];
    /** CSS class name(s) that correspond to styles defined in the Head component's styles prop. */
    class?: string;
    /** Background color of image container */
    containerBackgroundColor?: Properties['backgroundColor'];
    /** Whether image is full-width on mobile devices. if "true", will be full width on mobile even if width is set. */
    fluidOnMobile?: 'true';
    /** Image height (default: auto) */
    height?: DefaultUnits['height'] | 'auto';
    /** URL the image links to */
    href?: string;
    /** Name attribute for the image */
    name?: string;
    /** Padding around the image (default: 10px 25px) */
    padding?: Properties['padding'];
    /** Bottom padding */
    paddingBottom?: DefaultUnits['paddingBottom'];
    /** Left padding */
    paddingLeft?: DefaultUnits['paddingLeft'];
    /** Right padding */
    paddingRight?: DefaultUnits['paddingRight'];
    /** Top padding */
    paddingTop?: DefaultUnits['paddingTop'];
    /** Relationship attribute for the link */
    rel?: string;
    /** Source URL of the image */
    src?: string;
    /** Srcset attribute for responsive images */
    srcset?: string;
    /** Target attribute for the link (default: _blank) */
    target?: string;
    /** Title attribute for the image */
    title?: string;
    /** Usemap attribute for image maps */
    usemap?: string;
    /** Image width (default: parent width) */
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
