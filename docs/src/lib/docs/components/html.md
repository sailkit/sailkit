---
title: Html
---

<script lang="ts">
  import Block from '$lib/components/Block.svelte';
</script>

# Html

The root component that establishes the email template structure. Sets up
language support and directional behavior. Must be used as the outermost wrapper
for your email template.

```svelte
<script lang="ts">
  import { Html, Head, Body } from 'sailkit';
</script>

<Html language="en" dir="ltr">
  <Head subject="Welcome!" />
  <Body>
    <!-- Email content -->
  </Body>
</Html>
```

| **Prop** | **Type**             | **Default** | **Description**                               |
| -------- | -------------------- | ----------- | --------------------------------------------- |
| dir      | 'auto'｜'ltr'｜'rtl' | 'ltr'       | Text direction for the email                  |
| language | string               | 'en'        | Language code for the email content           |
| owa      | boolean              | false       | Enable Outlook Web App specific optimizations |

<Block>
  <ul>
    <li>
  The Html component must contain a Head component for metadata and a Body component for content.
    </li>
    <li>
    It provides the foundation for language and text direction support across email clients.
    </li>
  </ul>
</Block>

### Advanced usage with RTL support:

```svelte
<Html language="ar" dir="rtl">
  <Head subject="مرحباً" />

  <Body>
    <!-- RTL content -->
  </Body>
</Html>
```
