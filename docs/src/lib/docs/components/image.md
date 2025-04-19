---
title: Image
---

<script lang="ts">
  import Block from '$lib/components/Block.svelte';
</script>

# Image

A component for displaying responsive images in email templates. Handles image
scaling, alignment, and linking while maintaining compatibility across email
clients.

```svelte
<Image src="https://example.com/image.jpg" alt="Description" width="600px" fluidOnMobile="true" borderRadius="8px" />
```

| **Prop**                 | **Type**            | **Default** | **Unit**         | **Description**                        |
| ------------------------ | ------------------- | ----------- | ---------------- | -------------------------------------- |
| align                    | left｜center｜right | center      | -                | Horizontal alignment of the image      |
| alt                      | string              |             | -                | Alternative text for the image         |
| border                   | string              | none        | CSS border value | Border shorthand for all sides         |
| borderBottom             | string              | none        | CSS border value | Bottom border style                    |
| borderLeft               | string              | none        | CSS border value | Left border style                      |
| borderRadius             | string              | -           | px               | Border radius for corners              |
| borderRight              | string              | none        | CSS border value | Right border style                     |
| borderTop                | string              | none        | CSS border value | Top border style                       |
| class                    | string              | -           | -                | CSS class name(s) for custom styling\* |
| containerBackgroundColor | string              | -           | CSS color value  | Background color of image container    |
| fluidOnMobile            | true                | -           | -                | Whether image is full-width on mobile  |
| height                   | string              | auto        | px/auto          | Image height                           |
| href                     | string              | -           | URL              | URL the image links to                 |
| name                     | string              | -           | -                | Name attribute for the image           |
| padding                  | string              | 10px 25px   | px               | Padding shorthand for all sides        |
| paddingBottom            | string              | -           | px               | Bottom padding                         |
| paddingLeft              | string              | -           | px               | Left padding                           |
| paddingRight             | string              | -           | px               | Right padding                          |
| paddingTop               | string              | -           | px               | Top padding                            |
| rel                      | string              | -           | -                | Relationship attribute for the link    |
| src                      | string              | -           | URL              | Source URL of the image                |
| srcset                   | string              | -           | -                | Srcset attribute for responsive images |
| target                   | string              | \_blank     | -                | Target attribute for the link          |
| title                    | string              | -           | -                | Title attribute for the image          |
| usemap                   | string              | -           | -                | Usemap attribute for image maps        |
| width                    | string              | -           | px/%             | Image width                            |

<p class="text-xs">
* CSS class name(s) that correspond to styles defined in the Head component's styles prop.
</p>

<Block>
  <ul>
    <li>
      For best results, host images on a reliable CDN and provide fixed dimensions.
    </li>
    <li>
      Use `fluidOnMobile="true"` to create better mobile experiences by allowing images to stretch full-width on small screens.
    </li>
  </ul>
</Block>
