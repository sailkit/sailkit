<script lang="ts">
  /**
   * @component Column.Divider
   * @description A horizontal line divider component designed to work within Columns.
   * Used to create visual separation between content sections.
   *
   * @example
   * ```svelte
   * <Column>
   *   <- Content above ->
   *   <Column.Divider
   *     borderColor="#e0e0e0"
   *     borderStyle="dashed"
   *     borderWidth="1px"
   *   />
   *   <- Content below ->
   * </Column>
   * ```
   *
   * @remarks
   * The Divider component is accessible as a nested component of Column
   * and is typically used to create visual breaks between content sections
   * within a column.
   */

  import type { Properties } from 'csstype';
  import type { DefaultUnits } from '$lib/types.js';

  interface Props {
    /** Horizontal alignment of the divider (default: center) */
    align?: 'left' | 'right' | 'center';
    /** Color of the divider line (default: #000000) */
    borderColor?: Properties['borderColor'];
    /** Style of the divider line (default: solid) */
    borderStyle?: 'dashed' | 'dotted' | 'solid';
    /** Thickness of the divider line (default: 4px) */
    borderWidth?: DefaultUnits['borderWidth'];
    /** CSS class name(s) that correspond to styles defined in the Head component's styles prop. */
    class?: string;
    /** Background color behind the divider */
    containerBackgroundColor?: Properties['backgroundColor'];
    /** Padding around the divider (default: 10px 25px) */
    padding?: Properties['padding'];
    /** Bottom padding */
    paddingBottom?: DefaultUnits['paddingBottom'];
    /** Left padding */
    paddingLeft?: DefaultUnits['paddingLeft'];
    /** Right padding */
    paddingRight?: DefaultUnits['paddingRight'];
    /** Top padding */
    paddingTop?: DefaultUnits['paddingTop'];
    /** Width of the divider (default: 100%) */
    width?: DefaultUnits['width'] | `${number}%`;
  }

  const {
    align,
    borderColor,
    borderStyle,
    borderWidth,
    class: cssClass,
    containerBackgroundColor,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    width
  }: Props = $props();

  const mjmlDividerTag = 'mj-divider';

  const attributes = [
    align && `align="${align}"`,
    borderColor && `border-color="${borderColor}"`,
    borderStyle && `border-style="${borderStyle}"`,
    borderWidth && `border-width="${borderWidth}"`,
    containerBackgroundColor && `container-background-color="${containerBackgroundColor}"`,
    cssClass && `css-class="${cssClass}"`,
    padding && `padding="${padding}"`,
    paddingBottom && `padding-bottom="${paddingBottom}"`,
    paddingLeft && `padding-left="${paddingLeft}"`,
    paddingRight && `padding-right="${paddingRight}"`,
    paddingTop && `padding-top="${paddingTop}"`,
    width && `width="${width}"`
  ]
    .filter(Boolean)
    .join(' ');
</script>

{@html `<${mjmlDividerTag} ${attributes} />`}
