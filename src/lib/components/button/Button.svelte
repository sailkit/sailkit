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
    /** Horizontal alignment of the button (default: center) */
    align?: 'left' | 'center' | 'right';
    /** Background color of the button (default: #414141) */
    backgroundColor?: Properties['backgroundColor'];
    /** Border shorthand for all sides */
    border?: Properties['border'];
    /** Bottom border style */
    borderBottom?: Properties['borderBottom'];
    /** Left border style */
    borderLeft?: Properties['borderLeft'];
    /** Border radius for corners (default: 3px) */
    borderRadius?: Properties['borderRadius'];
    /** Right border style */
    borderRight?: Properties['borderRight'];
    /** Top border style */
    borderTop?: Properties['borderTop'];
    /** CSS class name(s) that correspond to styles defined in the Head component's styles prop. */
    class?: string;
    /** Text color (default: #ffffff) */
    color?: Properties['color'];
    /** Background color of the button container (default: #414141) */
    containerBackgroundColor?: Properties['backgroundColor'];
    /** Font family for button text (default: Ubuntu, Helvetica, Arial, sans-serif) */
    fontFamily?: Properties['fontFamily'];
    /** Font size for button text (default: 13px) */
    fontSize?: DefaultUnits['fontSize'];
    /** Font style for button text (default: normal) */
    fontStyle?: 'normal' | 'italic' | 'oblique';
    /** Font weight for button text (default: normal) */
    fontWeight?: number | 'normal' | 'bold';
    /** Fixed height of the button (default: 30px) */
    height?: DefaultUnits['height'];
    /** URL the button links to */
    href?: string;
    /** Inner padding for button (default: 10px 25px) */
    innerPadding?: Properties['padding'];
    /** Letter spacing for button text (default: 0) */
    letterSpacing?: DefaultUnits['letterSpacing'];
    /** Line height for button text (default: 120%) */
    lineHeight?: DefaultUnits['lineHeight'];
    /** Padding around the button (default: 10px 25px) */
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
    /** Target attribute for the link (default: _blank) */
    target?: '_blank' | '_self' | '_parent' | '_top';
    /** Text alignment within the button (default: center) */
    textAlign?: 'left' | 'center' | 'right';
    /** Text decoration style (default: none) */
    textDecoration?: 'underline' | 'overline' | 'none';
    /** Text transformation (default: none) */
    textTransform?: 'capitalize' | 'uppercase' | 'lowercase';
    /** Title attribute for the button */
    title?: string;
    /** Vertical alignment of the button (default: middle) */
    verticalAlign?: 'top' | 'middle' | 'bottom';
    /** Fixed width of the button */
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
