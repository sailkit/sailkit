---
title: Column
---

<script lang="ts">
  import Block from '$lib/components/Block.svelte';
</script>

# Column

A structural component used to create columns within a Section. Automatically
handles responsive behavior and includes nested components for spacing and
dividers.

```svelte
<Section>
  <Column width="50%" backgroundColor="#f6f6f6">First column content</Column>
  <Column width="50%" verticalAlign="middle">Second column content</Column>
</Section>
```

| **Prop**             | **Type**            | **Default** | **Unit**         | **Description**                        |
| -------------------- | ------------------- | ----------- | ---------------- | -------------------------------------- |
| backgroundColor      | string              | -           | CSS color value  | Background color of the column         |
| border               | string              | none        | CSS border value | CSS border shorthand for all sides     |
| borderBottom         | string              | -           | CSS border value | Bottom border style                    |
| borderLeft           | string              | -           | CSS border value | Left border style                      |
| borderRadius         | string              | -           | px               | Border radius for corners              |
| borderRight          | string              | -           | CSS border value | Right border style                     |
| borderTop            | string              | -           | CSS border value | Top border style                       |
| class                | string              | -           | -                | CSS class name(s) for custom styling\* |
| innerBackgroundColor | string              | -           | CSS color value  | Background color of inner content      |
| innerBorder          | string              | -           | CSS border value | Inner border shorthand                 |
| innerBorderBottom    | string              | -           | CSS border value | Inner bottom border style              |
| innerBorderLeft      | string              | -           | CSS border value | Inner left border style                |
| innerBorderRadius    | string              | -           | px               | Inner border radius                    |
| innerBorderRight     | string              | -           | CSS border value | Inner right border style               |
| innerBorderTop       | string              | -           | CSS border value | Inner top border style                 |
| padding              | string              | -           | px               | Padding shorthand for all sides        |
| paddingBottom        | string              | -           | px               | Bottom padding                         |
| paddingLeft          | string              | -           | px               | Left padding                           |
| paddingRight         | string              | -           | px               | Right padding                          |
| paddingTop           | string              | -           | px               | Top padding                            |
| verticalAlign        | middle｜top｜bottom | top         | -                | Vertical alignment within section      |
| width                | string              | -           | px/%             | Width of the column                    |

<p class="text-xs">
* CSS class name(s) that correspond to styles defined in the Head component's styles prop.
</p>

## Column.Divider

Creates a horizontal line to visually separate content within a Column.

```svelte
<Column>
  <Text>Above divider</Text>
  <Column.Divider borderColor="#e0e0e0" borderStyle="dashed" borderWidth="1px" padding="15px 0" />
  <Text>Below divider</Text>
</Column>
```

| **Prop**                 | **Type**              | **Default** | **Unit**        | **Description**                        |
| ------------------------ | --------------------- | ----------- | --------------- | -------------------------------------- |
| align                    | left｜right｜center   | center      | -               | Horizontal alignment of the divider    |
| borderColor              | string                | #000000     | CSS color value | Color of the divider line              |
| borderStyle              | dashed｜dotted｜solid | solid       | -               | Style of the divider line              |
| borderWidth              | string                | 4px         | px              | Thickness of the divider line          |
| class                    | string                | -           | -               | CSS class name(s) for custom styling\* |
| containerBackgroundColor | string                | -           | CSS color value | Background color behind the divider    |
| padding                  | string                | 10px 25px   | px              | Padding shorthand for all sides        |
| paddingBottom            | string                | -           | px              | Bottom padding                         |
| paddingLeft              | string                | -           | px              | Left padding                           |
| paddingRight             | string                | -           | px              | Right padding                          |
| paddingTop               | string                | -           | px              | Top padding                            |
| width                    | string                | 100%        | px/%            | Width of the divider                   |

<p class="text-xs">
* CSS class name(s) that correspond to styles defined in the Head component's styles prop.
</p>

### Column.Spacer

Creates vertical spacing between content elements within a Column.

```svelte
<Column>
  <Text>First block</Text>
  <Column.Spacer height="30px" />
  <Text>Second block</Text>
</Column>
```

| **Prop**                 | **Type** | **Default** | **Unit**        | **Description**                        |
| ------------------------ | -------- | ----------- | --------------- | -------------------------------------- |
| class                    | string   | -           | -               | CSS class name(s) for custom styling\* |
| containerBackgroundColor | string   | -           | CSS color value | Background color of the spacer area    |
| height                   | string   | 20px        | px              | Height of the spacer                   |
| padding                  | string   | 0px         | px              | Padding shorthand for all sides        |
| paddingBottom            | string   | -           | px              | Bottom padding                         |
| paddingLeft              | string   | -           | px              | Left padding                           |
| paddingRight             | string   | -           | px              | Right padding                          |
| paddingTop               | string   | -           | px              | Top padding                            |

<p class="text-xs">
* CSS class name(s) that correspond to styles defined in the Head component's styles prop.
</p>

<Block>
  <ul>
    <li>
      Columns automatically stack on mobile devices.
    </li>
    <li>
      When used inside Section.Group, columns maintain their layout on mobile.
    </li>
    <li>
      Width values can be specified in pixels or percentages, but percentages are recommended for better responsiveness.
    </li>
  </ul>
</Block>
