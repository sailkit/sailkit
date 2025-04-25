<script lang="ts">
  /**
   * @component Column
   * @description A structural component used to create columns within a Section.
   * Columns can contain other components and automatically handle responsive behavior.
   * This component includes nested Divider and Spacer components accessible as Column.Divider
   * and Column.Spacer.
   *
   * @example
   * ```svelte
   * <Section>
   *   <Column width="50%" padding="10px" backgroundColor="#f6f6f6">
   *     First column content
   *   </Column>
   *   <Column width="50%" padding="10px">
   *     Second column content
   *   </Column>
   * </Section>
   * ```
   *
   * With nested components:
   * ```svelte
   * <Column>
   *   Content above
   *   <Column.Divider borderColor="#f0f0f0" />
   *   Content below
   *   <Column.Spacer height="20px" />
   *   More content
   * </Column>
   * ```
   *
   * @remarks
   * Columns are designed to work within Section components and automatically stack
   * on mobile devices. The width property defaults to an equal distribution of
   * available space among non-raw columns in the section.
   */

  import type { Snippet } from 'svelte';
  import type { Properties } from 'csstype';
  import type { CustomProperties } from '$lib/types.js';

  export interface ColumnProps {
    children?: Snippet;
    /** Background color of the column */
    backgroundColor?: Properties['backgroundColor'];
    /** Border shorthand for all sides (default: none) */
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
    /** Background color of inner content */
    innerBackgroundColor?: Properties['backgroundColor'];
    /** Inner border shorthand */
    innerBorder?: Properties['border'];
    /** Bottom border style */
    innerBorderBottom?: Properties['borderBottom'];
    /** Left border style */
    innerBorderLeft?: Properties['borderLeft'];
    /** Border radius for corners */
    innerBorderRadius?: Properties['borderRadius'];
    /** Right border style */
    innerBorderRight?: Properties['borderRight'];
    /** Top border style */
    innerBorderTop?: Properties['borderTop'];
    /** Padding around the column */
    padding?: Properties['padding'];
    /** Bottom padding */
    paddingBottom?: CustomProperties['paddingBottom'];
    /** Left padding */
    paddingLeft?: CustomProperties['paddingLeft'];
    /** Right padding */
    paddingRight?: CustomProperties['paddingRight'];
    /** Top padding */
    paddingTop?: CustomProperties['paddingTop'];
    /** Vertical alignment within section (default: top). note: middle works only when adjacent column is also set to middle */
    verticalAlign?: 'middle' | 'top' | 'bottom';
    /** Column width (default: auto-calculated based on siblings) */
    width?: CustomProperties['width'] | `${number}%`;
  }

  const {
    children,
    backgroundColor,
    border,
    borderBottom,
    borderLeft,
    borderRadius,
    borderRight,
    borderTop,
    class: cssClass,
    innerBackgroundColor,
    innerBorder,
    innerBorderBottom,
    innerBorderLeft,
    innerBorderRadius,
    innerBorderRight,
    innerBorderTop,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    verticalAlign,
    width
  }: ColumnProps = $props();

  const mjmlColumnTag = 'mj-column';

  const attributes = [
    backgroundColor && `background-color="${backgroundColor}"`,
    border && `border="${border}"`,
    borderBottom && `border-bottom="${borderBottom}"`,
    borderLeft && `border-left="${borderLeft}"`,
    borderRadius && `border-radius="${borderRadius}"`,
    borderRight && `border-right="${borderRight}"`,
    borderTop && `border-top="${borderTop}"`,
    cssClass && `css-class="${cssClass}"`,
    innerBackgroundColor && `inner-background-color="${innerBackgroundColor}"`,
    innerBorder && `inner-border="${innerBorder}"`,
    innerBorderBottom && `inner-border-bottom="${innerBorderBottom}"`,
    innerBorderLeft && `inner-border-left="${innerBorderLeft}"`,
    innerBorderRadius && `inner-border-radius="${innerBorderRadius}"`,
    innerBorderRight && `inner-border-right="${innerBorderRight}"`,
    innerBorderTop && `inner-border-top="${innerBorderTop}"`,
    padding && `padding="${padding}"`,
    paddingBottom && `padding-bottom="${paddingBottom}"`,
    paddingLeft && `padding-left="${paddingLeft}"`,
    paddingRight && `padding-right="${paddingRight}"`,
    paddingTop && `padding-top="${paddingTop}"`,
    verticalAlign && `vertical-align="${verticalAlign}"`,
    width && `width="${width}"`
  ]
    .filter(Boolean)
    .join(' ');
</script>

{@html `<${mjmlColumnTag} ${attributes}>`}
{@render children?.()}
{@html `</${mjmlColumnTag}>`}
