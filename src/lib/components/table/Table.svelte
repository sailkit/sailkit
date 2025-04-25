<script lang="ts">
  /**
   * @component Table
   * @description A component for creating HTML tables in email templates.
   * Provides consistent table rendering across email clients while supporting
   * standard table attributes and styling options.
   *
   * @example
   * Basic usage:
   * ```svelte
   * <Table>
   *   <table>
   *     <tr>
   *       <td>Cell 1</td>
   *       <td>Cell 2</td>
   *     </tr>
   *   </table>
   * </Table>
   * ```
   *
   * Styled table:
   * ```svelte
   * <Table
   *   borderRadius="4px"
   *   cellPadding="8px"
   *   cellSpacing="0px"
   *   color="#333333"
   *   fontSize="14px"
   * >
   *   <table>
   *     <tr>
   *       <th>Header 1</th>
   *       <th>Header 2</th>
   *     </tr>
   *     <tr>
   *       <td>Value 1</td>
   *       <td>Value 2</td>
   *     </tr>
   *   </table>
   * </Table>
   * ```
   *
   * @remarks
   * The Table component is a wrapper for HTML table elements that ensures
   * consistent rendering across email clients. While it provides styling
   * and layout options, the actual table structure should be created using
   * standard HTML table elements within the component.
   */

  import type { Snippet } from 'svelte';
  import type { Properties } from 'csstype';
  import type { CustomProperties } from '$lib/types.js';

  export interface TableProps {
    children?: Snippet;
    /** Horizontal alignment of the table (default: left) */
    align?: 'left' | 'right' | 'center';
    /** Border shorthand for all sides (default: none) */
    border?: Properties['border'];
    /** Cell padding for all table cells */
    cellPadding?: Properties['padding'];
    /** Cell spacing between table cells */
    cellSpacing?: CustomProperties['cellSpacing'];
    /** Text color within the table (default: #000000) */
    color?: Properties['color'];
    /** CSS class name(s) that correspond to styles defined in the Head component's styles prop. */
    class?: string;
    /** Background color of the table container */
    containerBackgroundColor?: Properties['backgroundColor'];
    /** Font family for table text (default: Ubuntu, Helvetica, Arial, sans-serif) */
    fontFamily?: Properties['fontFamily'];
    /** Font size for table text (default: 13px) */
    fontSize?: CustomProperties['fontSize'];
    /** Line height for table text (default: 22px) */
    lineHeight?: CustomProperties['lineHeight'];
    /** Padding around the table (default: 10px 25px) */
    padding?: Properties['padding'];
    /** Bottom padding */
    paddingBottom?: CustomProperties['paddingBottom'];
    /** Left padding */
    paddingLeft?: CustomProperties['paddingLeft'];
    /** Right padding */
    paddingRight?: CustomProperties['paddingRight'];
    /** Top padding */
    paddingTop?: CustomProperties['paddingTop'];
    /** ARIA role for the table */
    role?: 'none' | 'presentation';
    /** CSS table-layout property (default: auto) */
    tableLayout?: 'auto' | 'fixed' | 'initial' | 'inherit';
    /** Width of the table (default: 100%) */
    width?: CustomProperties['width'] | `${number}%`;
  }

  const {
    children,
    align,
    border,
    cellPadding,
    cellSpacing,
    color,
    containerBackgroundColor,
    class: cssClass,
    fontFamily,
    fontSize,
    lineHeight,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    role,
    tableLayout,
    width
  }: TableProps = $props();

  const mjmlTableTag = 'mj-table';

  const attributes = [
    align && `align="${align}"`,
    border && `border="${border}"`,
    cellPadding && `cellpadding="${cellPadding}"`,
    cellSpacing && `cellspacing="${cellSpacing}"`,
    color && `color="${color}"`,
    containerBackgroundColor && `container-background-color="${containerBackgroundColor}"`,
    cssClass && `css-class="${cssClass}"`,
    fontFamily && `font-family="${fontFamily}"`,
    fontSize && `font-size="${fontSize}"`,
    lineHeight && `line-height="${lineHeight}"`,
    padding && `padding="${padding}"`,
    paddingBottom && `padding-bottom="${paddingBottom}"`,
    paddingLeft && `padding-left="${paddingLeft}"`,
    paddingRight && `padding-right="${paddingRight}"`,
    paddingTop && `padding-top="${paddingTop}"`,
    role && `role="${role}"`,
    tableLayout && `table-layout="${tableLayout}"`,
    width && `width="${width}"`
  ]
    .filter(Boolean)
    .join(' ');
</script>

{@html `<${mjmlTableTag} ${attributes}>`}
{@render children?.()}
{@html `</${mjmlTableTag}>`}
