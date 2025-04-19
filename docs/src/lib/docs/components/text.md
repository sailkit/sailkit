---
title: Text
---

<script lang="ts">
  import Block from '$lib/components/Block.svelte';
</script>

# Text

A component for displaying and styling text content in email templates. Provides
comprehensive typography controls and ensures consistent text rendering across
email clients.

```svelte
<Text color="#333333" fontSize="16px" fontWeight="bold" align="center">Important message</Text>
```

| **Prop**                 | **Type**                                | **Default**                          | **Unit**        | **Description**                        |
| ------------------------ | --------------------------------------- | ------------------------------------ | --------------- | -------------------------------------- |
| align                    | left｜right｜center｜justify            | left                                 | -               | Text alignment                         |
| class                    | string                                  | -                                    | -               | CSS class name(s) for custom styling\* |
| color                    | string                                  | #000000                              | CSS color value | Text color                             |
| containerBackgroundColor | string                                  | -                                    | CSS color value | Background color of the text container |
| fontFamily               | string                                  | Ubuntu, Helvetica, Arial, sans-serif | -               | Font family for the text               |
| fontSize                 | string                                  | 13px                                 | px              | Font size                              |
| fontStyle                | normal｜italic｜oblique                 | -                                    | -               | Font style                             |
| fontWeight               | number｜normal｜bold                    | -                                    | -               | Font weight                            |
| height                   | string                                  | -                                    | px              | Fixed height                           |
| letterSpacing            | string                                  | -                                    | px/em           | Letter spacing                         |
| lineHeight               | string                                  | 1                                    | px/none         | Line height                            |
| padding                  | string                                  | 10px 25px                            | px              | Padding shorthand for all sides        |
| paddingBottom            | string                                  | -                                    | px              | Bottom padding                         |
| paddingLeft              | string                                  | -                                    | px              | Left padding                           |
| paddingRight             | string                                  | -                                    | px              | Right padding                          |
| paddingTop               | string                                  | -                                    | px              | Top padding                            |
| textDecoration           | underline｜overline｜line-through｜none | -                                    | -               | Text decoration style                  |
| textTransform            | uppercase｜lowercase｜capitalize        | -                                    | -               | Text transformation                    |

<p class="text-xs">
* CSS class name(s) that correspond to styles defined in the Head component's styles prop.
</p>
