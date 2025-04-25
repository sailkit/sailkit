---
title: Getting Started
---

<script lang="ts">
  import PMBlock from '$lib/components/PMBlock.svelte';
</script>

# Installation

Start by installing SailKit and MJML in your SvelteKit application using your
preferred package manager:

<PMBlock />

Import the necessary components from SailKit and declare props:

```svelte
<script lang="ts">
  import { Html, Body, Section, Column, Text } from "sailkit";

  interface Props {
    text: string;
  }

  let { text = "Hello from SailKit! 👋" }: Props = $props();
</script>
```

Then, create your Svelte email template:

```svelte
<Html>
  <Body>
    <Section>
      <Column>
        <Text>{text}</Text>
      </Column>
    </Section>
  </Body>
</Html>
```

Finally, render or preview your email from anywhere in your application:

```ts
import MyEmail from "./MyEmail.svelte";
import { renderEmail, previewEmail } from "sailkit";

const { html, plainText } = await renderEmail(MyEmail, {
  text: "Hello World!"
});

// Or, if you want to preview the email in your browser
await previewEmail(MyEmail, { text: "Hello World!" });
```
