---
title: Preview Email
---

# previewEmail

<strong>previewEmail()</strong> renders your Svelte 5 component and launches the
resulting HTML in a browser or logs it to the console.

| **Option** | **Type**           | **Default** | **Description**                        |
| ---------- | ------------------ | ----------- | -------------------------------------- |
| component  | Svelte Component   | -           | The Svelte component to render.        |
| props      | Props              | -           | The component's input properties.      |
| mode       | browser \| console | browser     | Determines where the preview is shown. |
| options    | RenderOptions      | -           | See [Render Options](#render-options). |

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
import { previewEmail } from 'sailkit';

await previewEmail(
  MyEmail, // Svelte component
  { text: 'Hello World!' }, // Component props
  'browser' // Render in a new browser window
);
```
