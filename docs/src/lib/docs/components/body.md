---
title: Body
---

<script lang="ts">
  import Block from '$lib/components/Block.svelte';
</script>

# Body

Container component that establishes the main content area of your email.
Controls the overall width and background styling of the email content.

```svelte
<Body width="650px" backgroundColor="#f6f6f6">
  <Section>
    <!-- Email content -->
  </Section>
</Body>
```

| **Prop**        | **Type** | **Default** | **Unit**        | **Description**                        |
| --------------- | -------- | ----------- | --------------- | -------------------------------------- |
| backgroundColor | string   | #ffffff     | CSS color value | Background color for email body        |
| width           | string   | 600px       | px              | Maximum width of email content         |
| class           | string   | -           | -               | CSS class name(s) for custom styling\* |

<p class="text-xs">
* CSS class name(s) that correspond to styles defined in the Head component's styles prop.
</p>

<Block>
It's recommended to keep the width between 600px and 800px for optimal email client compatibility. The default 600px is considered a safe choice for most email clients.
</Block>
