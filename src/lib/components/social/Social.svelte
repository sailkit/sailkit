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
   * @remarks
   * The Social component must contain one or more Social.Element components.
   * It handles the overall layout and styling while individual
   * elements are configured through the Social.Element component.
   */

  import type { Snippet } from 'svelte';
  import type { Properties } from 'csstype';
  import type { CustomProperties } from '$lib/types.js';

  interface Props {
    children?: Snippet;
    /** Horizontal alignment of social elements (default: center) */
    align?: 'left' | 'right' | 'center';
    /** Border radius for social elements (default: 3px) */
    borderRadius?: Properties['borderRadius'];
    /** CSS class name(s) that correspond to styles defined in the Head component's styles prop. */
    class?: string;
    /** Text color for social elements (default: #333333) */
    color?: Properties['color'];
    /** Background color of the container */
    containerBackgroundColor?: Properties['backgroundColor'];
    /** Font family for text (default: Ubuntu, Helvetica, Arial, sans-serif) */
    fontFamily?: Properties['fontFamily'];
    /** Font size for text (default: 13px) */
    fontSize?: CustomProperties['fontSize'];
    /** Font style for text (default: normal) */
    fontStyle?: 'normal' | 'italic' | 'oblique';
    /** Font weight for text (default: normal) */
    fontWeight?: number | 'normal' | 'bold';
    /** Fixed height for social icons (default: 20px) */
    iconHeight?: CustomProperties['iconHeight'];
    /** Padding around icons (default: 0px) */
    iconPadding?: string | number;
    /** Size of social icons (default: 20px) */
    iconSize?: CustomProperties['iconSize'];
    /** Inner padding for social elements (default: 4px) */
    innerPadding?: Properties['padding'];
    /** Line height for text (default: 22px) */
    lineHeight?: CustomProperties['lineHeight'];
    /** Layout direction (default: horizontal) */
    mode?: 'horizontal' | 'vertical';
    /** Padding around the container (default: 10px 25px) */
    padding?: Properties['padding'];
    /** Bottom padding */
    paddingBottom?: CustomProperties['paddingBottom'];
    /** Left padding */
    paddingLeft?: CustomProperties['paddingLeft'];
    /** Right padding */
    paddingRight?: CustomProperties['paddingRight'];
    /** Top padding */
    paddingTop?: CustomProperties['paddingTop'];
    /** Text decoration style (default: none) */
    textDecoration?: 'underline' | 'overline' | 'none';
    /** Padding around text (default: 4px 4px 4px 0) */
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
    containerBackgroundColor && `container-background-color="${containerBackgroundColor}"`,
    cssClass && `css-class="${cssClass}"`,
    fontFamily && `font-family="${fontFamily}"`,
    fontSize && `font-size="${fontSize}"`,
    fontStyle && `font-style="${fontStyle}"`,
    fontWeight && `font-weight="${fontWeight}"`,
    iconHeight && `icon-height="${iconHeight}"`,
    iconPadding && `icon-padding="${iconPadding}"`,
    iconSize && `icon-size="${iconSize}"`,
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
