---
title: Head
---

<script lang="ts">
  import Block from '$lib/components/Block.svelte';
</script>

# Head

Defines email metadata and styling configuration. Should be used once per email
template to set up the subject line, preview text, fonts, breakpoints, and
styles.

```svelte
<Head
  subject="Welcome to Our Service"
  preview="Start your journey with us"
  breakpoint={480}
  fonts={[
    {
      name: "Open Sans",
      href: "https://fonts.googleapis.com/css2?family=Open+Sans"
    }
  ]}
/>
```

| **Prop**   | **Type**                         | **Default** | **Unit** | **Description**                            |
| ---------- | -------------------------------- | ----------- | -------- | ------------------------------------------ |
| subject    | string                           | -           | -        | Email subject line (required)              |
| preview    | string                           | -           | -        | Preview text shown in email clients        |
| breakpoint | string                           | -           | px       | Width at which mobile layout triggers      |
| fonts      | `{name: string, href: string}[]` | -           | -        | Custom fonts to include in the email       |
| styles     | StyleProps                       | -           | -        | Style definitions (see below)              |
| theme      | ThemeOptions                     | -           | -        | Theme configuration for consistent styling |

### Style Properties

The `styles` prop accepts an object with three optional properties:

- <strong>global</strong>: Applied to all components in the email
- <strong>components</strong>: Applied to specific SailKit components (like
  'text', 'button', etc.)
- <strong>custom</strong>: Array of custom CSS rules, with support for regular
  and inline styles (can be referenced by components via their class prop)

### Example with styles:

```svelte
<Head
  subject="Welcome"
  styles={{
    global: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#ffffff",
      textAlign: "center"
    },
    components: {
      text: {
        color: "#333333",
        lineHeight: "1.5",
        fontSize: "16px"
      },
      button: {
        backgroundColor: "#007bff",
        color: "#ffffff",
        borderRadius: "4px"
      }
    },
    custom: [
      // Regular CSS (not inlined)
      `.title {
        font-size: 32px;
        font-weight: 600;
        color: #1F2937;
      }`,

      // Inlined CSS
      {
        inline: true,
        css: ".header { font-size: 24px; }"
      },

      // Media queries
      `@media (max-width: 480px) {
        .title { font-size: 24px; }
        .mobile-hidden { display: none; }
      }`
    ]
  }}
/>
```

### Example with theme:

The theme API allows you to create reusable style configurations that can be
shared across multiple email templates. Themes can be created using the
`createTheme` utility and can include fonts, breakpoints, and all style
properties.

```ts
// theme.ts
import { createTheme } from "sailkit";

export const brandTheme = createTheme({
  fonts: [
    {
      name: "Roboto",
      href: "https://fonts.googleapis.com/css2?family=Roboto"
    }
  ],
  breakpoint: "480px",
  styles: {
    global: {
      fontFamily: "Roboto, sans-serif",
      backgroundColor: "#f8f9fa"
    },
    components: {
      text: {
        color: "#333333",
        fontSize: "16px"
      },
      button: {
        backgroundColor: "#007bff",
        color: "#ffffff"
      }
    },
    custom: [
      ".header { font-size: 24px; }",
      {
        inline: true,
        css: ".footer { padding: 20px; }"
      }
    ]
  }
});
```

You can use the theme in your email templates and optionally override specific
properties:

```svelte
<Head
  subject="Welcome Email"
  preview="Check out our latest updates"
  theme={brandTheme}
  // Optional: Override specific theme properties
  styles={{
    components: {
      button: {
        backgroundColor: "#ff0000" // This will override the theme's button color
      },
      text: {
        fontSize: "18px" // This will override the theme's text font size
      }
    }
  }}
/>
```

When using themes:

- Individual props can override theme properties when needed
- Component styles are merged with theme styles, where individual props override matching theme properties
- Custom styles from both theme and props are concatenated
- The `createTheme` utility ensures type safety for your theme configuration

<Block>
The Head component must be a direct child of the Html component and should appear before the Body component.
</Block>
