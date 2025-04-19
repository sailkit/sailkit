---
title: Button
---

<script lang="ts">
  import Block from '$lib/components/Block.svelte';
</script>

# Button

A component for creating responsive and stylizable buttons.

```svelte
<Button href="https://example.com" backgroundColor="#007bff" borderRadius="5px" fontSize="16px" padding="15px 30px">
  Join now
</Button>
```

| **Prop**                 | **Type**                         | **Default**                          | **Unit**         | **Description**                        |
| ------------------------ | -------------------------------- | ------------------------------------ | ---------------- | -------------------------------------- |
| align                    | left｜center｜right              | center                               | -                | Horizontal alignment of the button     |
| backgroundColor          | string                           | #414141                              | CSS color value  | Background color of the button         |
| border                   | string                           | none                                 | CSS border value | Border shorthand for all sides         |
| borderBottom             | string                           | -                                    | CSS border value | Bottom border style                    |
| borderLeft               | string                           | -                                    | CSS border value | Left border style                      |
| borderRadius             | string                           | 3px                                  | px               | Border radius for corners              |
| borderRight              | string                           | -                                    | CSS border value | Right border style                     |
| borderTop                | string                           | -                                    | CSS border value | Top border style                       |
| class                    | string                           | -                                    | -                | CSS class name(s) for custom styling\* |
| color                    | string                           | #ffffff                              | CSS color value  | Text color of the button               |
| containerBackgroundColor | string                           | -                                    | CSS color value  | Background color of button container   |
| fontFamily               | string                           | Ubuntu, Helvetica, Arial, sans-serif | -                | Font family for button text            |
| fontSize                 | string                           | 13px                                 | px/em            | Font size of the button text           |
| fontStyle                | normal｜italic｜oblique          | -                                    | -                | Font style of the button text          |
| fontWeight               | number｜normal｜bold             | normal                               | -                | Font weight of the button text         |
| height                   | string                           | -                                    | px               | Fixed height of the button             |
| href                     | string                           | -                                    | URL              | URL the button links to                |
| innerPadding             | string                           | 10px 25px                            | px               | Inner padding of the button            |
| letterSpacing            | string                           | -                                    | px/em            | Letter spacing of the button text      |
| lineHeight               | string                           | 120%                                 | px/%             | Line height of the button text         |
| padding                  | string                           | 10px 25px                            | px               | Padding around the button              |
| paddingBottom            | string                           | -                                    | px               | Bottom padding                         |
| paddingLeft              | string                           | -                                    | px               | Left padding                           |
| paddingRight             | string                           | -                                    | px               | Right padding                          |
| paddingTop               | string                           | -                                    | px               | Top padding                            |
| rel                      | string                           | -                                    | -                | Relationship attribute for the link    |
| target                   | \_blank｜\_self｜\_parent｜\_top | \_blank                              | -                | Target attribute for the link          |
| textAlign                | left｜center｜right              | -                                    | -                | Text alignment within the button       |
| textDecoration           | underline｜overline｜none        | none                                 | -                | Text decoration style                  |
| textTransform            | capitalize｜uppercase｜lowercase | -                                    | -                | Text transformation                    |
| title                    | string                           | -                                    | -                | Title attribute for the button         |
| verticalAlign            | top｜middle｜bottom              | middle                               | -                | Vertical alignment of the button       |
| width                    | string                           | -                                    | px               | Fixed width of the button              |

<p class="text-xs">
* CSS class name(s) that correspond to styles defined in the Head component's styles prop.
</p>

<Block>
  <ul>
    <li>
      The Button component renders as an HTML link styled as a button, ensuring clickability across different email clients.
    </li>
    <li>
      All styles are inlined for maximum compatibility.
    </li>
  </ul>
</Block>
