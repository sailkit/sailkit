---
title: Raw
---

<script lang="ts">
  import Block from '$lib/components/Block.svelte';
</script>

# Raw

A component that allows the inclusion of raw HTML content that will be left
untouched by the email rendering process. Useful for including custom HTML
markup (e.g. custom meta tags) or legacy email code that should bypass
processing.

```svelte
<Raw>
  <meta name="color-scheme" content="light dark" />
  <meta name="supported-color-schemes" content="light dark" />
</Raw>
```

| **Prop** | **Type** | **Default** | **Unit** | **Description**                                    |
| -------- | -------- | ----------- | -------- | -------------------------------------------------- |
| children | Snippet  | -           | -        | Raw HTML content to be rendered without processing |

<Block>
Use this component sparingly and only when other sailor components cannot achieve the desired layout or functionality. It's particularly useful for email client-specific conditional comments, legacy email code, or custom HTML that needs to remain unchanged during processing.
</Block>
