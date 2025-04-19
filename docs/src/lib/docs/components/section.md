---
title: Section
---

<script lang="ts">
  import Block from '$lib/components/Block.svelte';
</script>

# Section

Structural component that defines a horizontal row of content. Used to create
the main layout structure of the email by organizing content into rows.

```svelte
<Section padding="20px" backgroundColor="#f6f6f6">
  <Column>
    <Text>Content</Text>
  </Column>
</Section>
```

| **Prop**           | **Type**            | **Default** | **Unit**         | **Description**                        |
| ------------------ | ------------------- | ----------- | ---------------- | -------------------------------------- |
| backgroundColor    | string              | -           | CSS color value  | Background color of the section        |
| backgroundUrl      | string              | -           | URL              | URL of a background image              |
| backgroundPosition | string              | top center  | -                | Position of background image           |
| backgroundSize     | string              | auto        | px/% or keyword  | Size of background image               |
| backgroundRepeat   | string              | repeat      | -                | How background image repeats           |
| border             | string              | none        | CSS border value | CSS border shorthand                   |
| borderTop          | string              | -           | CSS border value | Top border style                       |
| borderRight        | string              | -           | CSS border value | Right border style                     |
| borderBottom       | string              | -           | CSS border value | Bottom border style                    |
| borderLeft         | string              | -           | CSS border value | Left border style                      |
| borderRadius       | string              | -           | px               | Border radius for corners              |
| class              | string              | -           | -                | CSS class name(s) for custom styling\* |
| direction          | ltr｜rtl            | ltr         | -                | Content direction                      |
| fullWidth          | true                | -           |                  | Whether section spans full width       |
| padding            | string              | 20px 0      | px               | Padding shorthand for all sides        |
| paddingTop         | string              | -           | px               | Top padding                            |
| paddingRight       | string              | -           | px               | Right padding                          |
| paddingBottom      | string              | -           | px               | Bottom padding                         |
| paddingLeft        | string              | -           | px               | Left padding                           |
| textAlign          | left｜center｜right | -           | -                | Text alignment within section          |

<p class="text-xs">
* CSS class name(s) that correspond to styles defined in the Head component's styles prop.
</p>

## Section.Group

A special component that prevents its child columns from stacking on mobile
devices. Must be used within a Section component.

```svelte
<Section>
  <Section.Group>
    <Column width="50%">Left side</Column>
    <Column width="50%">Right side</Column>
  </Section.Group>
</Section>
```

| **Prop**        | **Type**            | **Default** | **Unit**        | **Description**                        |
| --------------- | ------------------- | ----------- | --------------- | -------------------------------------- |
| backgroundColor | string              | -           | CSS color value | Background color of the group          |
| class           | string              | -           | -               | CSS class name(s) for custom styling\* |
| direction       | ltr｜rtl            | ltr         | -               | Content direction                      |
| verticalAlign   | middle｜top｜bottom | top         | -               | Vertical alignment of columns          |
| width           | string              | -           | px/%            | Width of the group                     |

<p class="text-xs">
* CSS class name(s) that correspond to styles defined in the Head component's styles prop.
</p>

<Block>
  <ul>
    <li>
      Columns within a Section.Group must use percentage-based widths and their total should equal 100%.
    </li >
    <li>
      For optimal compatibility, avoid whitespace between Column components inside a Group.
    </li>
  </ul>
</Block>
