---
title: Container
---

<script lang="ts">
  import Block from '$lib/components/Block.svelte';
</script>

# Container

A wrapper component that groups sections together and provides background
styling capabilities. Helps create consistent layouts and background treatments
across email clients.

```svelte
<Container
  backgroundColor="#f6f6f6"
  backgroundUrl="https://example.com/bg.jpg"
  backgroundSize="cover"
  padding="40px 20px"
>
  <Section>
    <Column>
      <Text>Content with background</Text>
    </Column>
  </Section>
</Container>
```

| **Prop**            | **Type**               | **Default** | **Unit**         | **Description**                         |
| ------------------- | ---------------------- | ----------- | ---------------- | --------------------------------------- |
| backgroundColor     | string                 | -           | CSS color value  | Background color of the container       |
| backgroundPosition  | string                 | top center  | -                | Position of background image            |
| backgroundPositionX | string                 | none        | -                | Horizontal position of background image |
| backgroundPositionY | string                 | none        | -                | Vertical position of background image   |
| backgroundRepeat    | string                 | repeat      | -                | How background image should repeat      |
| backgroundSize      | string｜cover｜contain | -           | px/% or keyword  | Size of background image                |
| backgroundUrl       | string                 | -           | URL              | URL of background image                 |
| border              | string                 | none        | CSS border value | Border shorthand for all sides          |
| borderBottom        | string                 | -           | CSS border value | Bottom border style                     |
| borderLeft          | string                 | -           | CSS border value | Left border style                       |
| borderRadius        | string                 | -           | px               | Border radius for corners               |
| borderRight         | string                 | -           | CSS border value | Right border style                      |
| borderTop           | string                 | -           | CSS border value | Top border style                        |
| class               | string                 | -           | -                | CSS class name(s) for custom styling \* |
| fullWidth           | string                 | -           | -                | Whether container spans full width      |
| padding             | string                 | 20px 0      | px               | Padding shorthand for all sides         |
| paddingBottom       | string                 | -           | px               | Bottom padding                          |
| paddingLeft         | string                 | -           | px               | Left padding                            |
| paddingRight        | string                 | -           | px               | Right padding                           |
| paddingTop          | string                 | -           | px               | Top padding                             |
| textAlign           | left｜center｜right    | center      | -                | Text alignment within container         |

<p class="text-xs">
* CSS class name(s) that correspond to styles defined in the Head component's styles prop.
</p>

<Block>
The Container component is ideal for grouping sections together and applying consistent styling across them. It's particularly useful for creating full-width backgrounds that span multiple sections.
</Block>
