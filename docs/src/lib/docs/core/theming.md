---
title: Theming
---

# Theming

SailKit provides a theming system that allows you to create consistent styling
across your email templates and declutter your markup. The theming API lets you
define reusable configurations for fonts, breakpoints, and styles that can be
shared across your templates and overridden as needed.

## Creating a Theme

Use the `createTheme` utility to define a type-safe theme:

```ts
import { createTheme } from "sailkit";

export const myTheme = createTheme({
  // Custom fonts configuration
  fonts: [
    {
      name: "Roboto",
      href: "https://fonts.googleapis.com/css2?family=Roboto"
    }
  ],

  // Responsive breakpoint
  breakpoint: "480px",

  // Style configurations
  styles: {
    // Global styles applied to all components
    global: {
      fontFamily: "Roboto, sans-serif",
      color: "#333333",
      backgroundColor: "#ffffff"
    },

    // Component-specific styles
    components: {
      text: {
        lineHeight: "1.5",
        fontSize: "16px"
      },
      button: {
        backgroundColor: "#007bff",
        color: "#ffffff",
        borderRadius: "4px"
      },
      section: {
        padding: "20px"
      }
    },

    // Custom CSS rules
    custom: [
      // Regular CSS rule
      ".brand-header { font-size: 24px; }",
      // Inlined CSS rule
      {
        inline: true,
        css: ".brand-footer { padding: 20px; }"
      }
    ]
  }
});
```

## Theme Options

A theme can include the following configurations:

### Fonts

Array of custom fonts to be included in the email:

```ts
fonts: [
  {
    name: "Roboto",
    href: "https://fonts.googleapis.com/css2?family=Roboto"
  },
  {
    name: "Open Sans",
    href: "https://fonts.googleapis.com/css2?family=Open+Sans"
  }
];
```

### Breakpoint

The width at which mobile layout triggers (in pixels):

```ts
breakpoint: "480px";
```

### Styles

The styles configuration consists of three parts:

1. **Global Styles**: Applied to all components

```ts
styles: {
  global: {
    fontFamily: "Arial, sans-serif",
    color: "#333333",
    backgroundColor: "#ffffff"
  }
}
```

2. **Component Styles**: Applied to specific SailKit components

```ts
styles: {
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
    },
    section: {
      padding: "20px"
    },
    container: {
      backgroundColor: "#f5f5f5"
    }
  }
}
```

3. **Custom Styles**: Array of custom CSS rules

```ts
styles: {
  custom: [
    // Regular CSS (not inlined)
    ".custom-class { color: #333333; }",

    // Inlined CSS
    {
      inline: true,
      css: ".header { padding: 20px; }"
    }
  ];
}
```

## Using Themes

Apply a theme to your email template using the `theme` prop on the `Head`
component:

```svelte
<script>
  import { myTheme } from "$lib/mail/myTheme";
</script>

<Head subject="Welcome Email" preview="Check out our latest updates" theme={myTheme} />
```

### Overriding Theme Properties

You can override specific theme properties by providing individual props to the
`Head` component:

```svelte
<Head
  subject="Welcome Email"
  theme={myTheme}
  // Override theme fonts
  fonts={[
    {
      name: 'Lato',
      href: 'https://fonts.googleapis.com/css2?family=Lato'
    }
  ]}
  // Override and extend theme styles
  styles={{
    global: {
      fontFamily: "Lato, sans-serif", // Override global font
      lineHeight: "1.5" // Add new global property
    },
    components: {
      button: {
        backgroundColor: "#ff0000" // Override button color
      },
      container: {
        padding: "40px" // Add new component style
      }
    },
    custom: [
      // Add additional custom CSS rules
      '.special-section { background-color: #f0f0f0; }'
    ]
  }}
/>
```

## Theme Merging Behavior

When using a theme with individual props, SailKit follows these merging rules:

1. **Fonts**: Individual fonts completely override theme fonts (not merged)
2. **Breakpoint**: Individual breakpoint overrides theme breakpoint
3. **Global Styles**: Individual global styles are merged with theme global styles, with individual properties taking precedence for matching keys
4. **Component Styles**: Component styles are merged property by property, with individual component properties overriding matching theme properties
5. **Custom Styles**: Custom styles from both theme and individual props are concatenated
