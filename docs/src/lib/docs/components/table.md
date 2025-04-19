---
title: Table
---

<script lang="ts">
  import Block from '$lib/components/Block.svelte';
</script>

# Table

A component for creating HTML tables. Provides consistent table rendering across
email clients while supporting standard table attributes and styling options.

```svelte
<Table align="center" cellPadding="10px 25px" cellSpacing="20px" color="#333333" fontSize="14px">
  <table>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
    <tr>
      <td>Value 1</td>
      <td>Value 2</td>
    </tr>
  </table>
</Table>
```

| **Prop**                 | **Type**                      | **Default**                          | **Unit**         | **Description**                        |
| ------------------------ | ----------------------------- | ------------------------------------ | ---------------- | -------------------------------------- |
| align                    | left｜right｜center           | left                                 | -                | Horizontal alignment of the table      |
| border                   | string                        | none                                 | CSS border value | Border style for the table             |
| cellPadding              | string                        | -                                    | px               | Cell padding for all table cells       |
| cellSpacing              | string                        | -                                    | px               | Cell spacing between table cells       |
| class                    | string                        | -                                    | -                | CSS class name(s) for custom styling\* |
| color                    | string                        | #000000                              | CSS color value  | Text color within the table            |
| containerBackgroundColor | string                        | -                                    | CSS color value  | Background color of table container    |
| fontFamily               | string                        | Ubuntu, Helvetica, Arial, sans-serif | -                | Font family for table text             |
| fontSize                 | string                        | 13px                                 | px               | Font size for table text               |
| lineHeight               | string                        | 22px                                 | px/%             | Line height for table text             |
| padding                  | string                        | 10px 25px                            | px               | Padding around the table               |
| paddingBottom            | string                        | -                                    | px               | Bottom padding                         |
| paddingLeft              | string                        | -                                    | px               | Left padding                           |
| paddingRight             | string                        | -                                    | px               | Right padding                          |
| paddingTop               | string                        | -                                    | px               | Top padding                            |
| role                     | none｜presentation            | -                                    | -                | ARIA role for the table                |
| tableLayout              | auto｜fixed｜initial｜inherit | auto                                 | -                | CSS table-layout property              |
| width                    | string                        | 100%                                 | px/%             | Width of the table                     |

<p class="text-xs">
* CSS class name(s) that correspond to styles defined in the Head component's styles prop.
</p>

<Block>
The Table component is a wrapper for HTML table elements. The actual table structure should be created using standard HTML table elements within the component.
</Block>
