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
   * @remarks
   * The Text component handles proper text rendering in email clients and
   * supports a wide range of typographic controls. All size-related properties
   * (fontSize, lineHeight, padding, etc.) should be specified in pixels or em
   * units for best email client compatibility.
   */

  import type { Snippet } from 'svelte';
  import type { Properties } from 'csstype';
  import type { CustomProperties } from '$lib/types.js';

  interface Props {
    children?: Snippet;
    /** Horizontal alignment (default: left) */
    align?: 'left' | 'right' | 'center' | 'justify';
    /** CSS class name(s) that correspond to styles defined in the Head component's styles prop. */
    class?: string;
    /** Text color (default: #000000) */
    color?: Properties['color'];
    /** Background color of the text container */
    containerBackgroundColor?: Properties['backgroundColor'];
    /** Font family for the text (default: Ubuntu, Helvetica, Arial, sans-serif) */
    fontFamily?: Properties['fontFamily'];
    /** Font size for the text (default: 13px) */
    fontSize?: CustomProperties['fontSize'];
    /** Font style for the text (default: normal) */
    fontStyle?: 'normal' | 'italic' | 'oblique';
    /** Font weight for the text (default: normal) */
    fontWeight?: number | 'normal' | 'bold';
    /** Fixed height in pixels */
    height?: CustomProperties['height'];
    /** Letter spacing for the text */
    letterSpacing?: CustomProperties['letterSpacing'];
    /** Line height in pixels */
    lineHeight?: CustomProperties['lineHeight'];
    /** Padding around the text (default: 10px 25px) */
    padding?: Properties['padding'];
    /** Bottom padding */
    paddingBottom?: CustomProperties['paddingBottom'];
    /** Left padding */
    paddingLeft?: CustomProperties['paddingLeft'];
    /** Right padding */
    paddingRight?: CustomProperties['paddingRight'];
    /** Top padding */
    paddingTop?: CustomProperties['paddingTop'];
    /** Text decoration style */
    textDecoration?: 'underline' | 'overline' | 'line-through' | 'none';
    /** Text transformation */
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
  }

  const {
    children,
    align,
    class: cssClass,
    color,
    containerBackgroundColor,
    fontFamily,
    fontSize,
    fontStyle,
    fontWeight,
    height,
    letterSpacing,
    lineHeight,
    padding,
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
