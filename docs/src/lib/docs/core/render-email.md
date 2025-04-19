---
title: Render Email
---

# renderEmail

<strong>renderEmail()</strong> converts a Svelte 5 component into
email-optimized HTML. It also generates a plain-text version and a metadata
object by default.

| **Option** | **Type**         | **Default** | **Description**                        |
| ---------- | ---------------- | ----------- | -------------------------------------- |
| component  | Svelte Component | -           | The Svelte component to render.        |
| props      | Props            | -           | The component's input properties.      |
| options    | RenderOptions    | -           | See [Render Options](#render-options). |

<a href="#render-options" id="render-options">Render Options</a>

Configure the rendering process with these options:

| **Option** | **Type** | **Default** | **Description**                                        |
| ---------- | -------- | ----------- | ------------------------------------------------------ |
| plainText  | boolean  | true        | Whether to generate a plain-text version of the email. |
| beautify   | boolean  | true        | Whether to beautify the HTML output.                   |
| minify     | boolean  | true        | Whether to minify the HTML output.                     |

### Example

```ts
import MyEmail from './MyEmail.svelte';
import { renderEmail } from 'sailkit';

const { html, plainText, metadata } = await renderEmail(
  MyEmail, // Svelte component
  { text: 'Hello World!' }, // Component props
  {
    plainText: true, // Generate a plain-text version of the email.
    beautify: true, // Beautify the HTML output.
    minify: true // Minify the HTML output.
  }
);
```
