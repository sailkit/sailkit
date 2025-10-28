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
   * @remarks
   * The SocialNetwork type supports the following networks:
   * facebook, twitter, x, google, pinterest, linkedin, tumblr,
   * xing, github, instagram, web, snapchat, youtube, vimeo,
   * medium, soundcloud, dribbble
   */

  import type { Snippet } from 'svelte';
  import type { Properties } from 'csstype';
  import type { CustomProperties } from '$lib/types.js';
  import { dev } from '$app/environment';
  import { resolve } from '$app/paths';

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
    | 'dribbble'
    | string;

  export interface SocialElementProps {
    children?: Snippet;
    /** Horizontal alignment (default: center) */
    align?: 'left' | 'right' | 'center';
    /** Alternative text for the icon (default: "") */
    alt?: string;
    /** Background color of the element (default: each network's default color) */
    backgroundColor?: Properties['backgroundColor'];
    /** Border radius (default: 3px) */
    borderRadius?: Properties['borderRadius'];
    /** CSS class name(s) that correspond to styles defined in the Head component's styles prop. */
    class?: string;
    /** Text color (default: #333333) */
    color?: Properties['color'];
    /** Font family (default: Ubuntu, Helvetica, Arial, sans-serif) */
    fontFamily?: Properties['fontFamily'];
    /** Font size (default: 13px) */
    fontSize?: CustomProperties['fontSize'];
    /** Font style (default: normal) */
    fontStyle?: 'normal' | 'italic' | 'oblique';
    /** Font weight (default: normal) */
    fontWeight?: number | 'normal' | 'bold';
    /** URL the element links to */
    href?: string;
    /** Fixed height (default: icon-size) */
    iconHeight?: CustomProperties['iconHeight'];
    /** Position of icon relative to text (default: right) */
    iconPosition?: 'left' | 'right';
    /** Size of the icon (default: 20px) */
    iconSize?: CustomProperties['iconSize'];
    /** Line height (default: 22px) */
    lineHeight?: CustomProperties['lineHeight'];
    /** Name of the social network (required) */
    name: SocialNetwork;
    /** Padding around the element (default: 4px) */
    padding?: Properties['padding'];
    /** Bottom padding */
    paddingBottom?: CustomProperties['paddingBottom'];
    /** Left padding */
    paddingLeft?: CustomProperties['paddingLeft'];
    /** Right padding */
    paddingRight?: CustomProperties['paddingRight'];
    /** Top padding */
    paddingTop?: CustomProperties['paddingTop'];
    /** Relationship attribute for the link */
    rel?: string;
    /** Source URL of the icon */
    src?: string;
    /** Srcset attribute for responsive images */
    srcset?: string;
    /** Target attribute for the link (default: _blank) */
    target?: string;
    /** Text decoration style (default: none) */
    textDecoration?: 'underline' | 'overline' | 'none';
    /** Title attribute for the link */
    title?: string;
    /** Vertical alignment (default: middle) */
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
  }: SocialElementProps = $props();

  const networkName = href === 'my-unchanged-url' ? `${name}-noshare` : name;

  const mjmlSocialElementTag = 'mj-social-element';

  // Only resolve local paths in development, not external URLs
  const isExternalUrl = src?.startsWith('http://') || src?.startsWith('https://');
  const iconSrc = dev && src && !isExternalUrl ? resolve(src as any) : src;

  const attributes = [
    name && `name="${networkName}"`,
    align && `align="${align}"`,
    alt && `alt="${alt}"`,
    backgroundColor && `background-color="${backgroundColor}"`,
    borderRadius && `border-radius="${borderRadius}"`,
    color && `color="${color}"`,
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
    iconSrc && `src="${iconSrc}"`,
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
