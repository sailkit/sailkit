# ⛵ SailKit

Create responsive email templates in your SvelteKit applications with ease.

> [!WARNING]
> SailKit is still in its early stages. Expect changes, bugs, and rough edges.

## Overview

SailKit is an open-source toolkit for composing responsive email templates in SvelteKit applications.
It provides a set of Svelte 5 primitives and utilities to help you create optimized and responsive production-ready emails.

## Why SailKit?

Email is notoriously challenging. crafting responsive, visually consistent emails across various email clients and devices is not a trivial task. SailKit simplifies this process by:

- Offering a clean and intuitive API for composing, rendering, and previewing email templates.
- Providing Svelte 5 primitives that feel natural and ergonomic to use.
- Translating your Svelte components into optimized MJML markup under the hood.
- Leveraging MJML's industry-standard email rendering engine to generate high-quality, responsive HTML that adheres to best practices.

### Why MJML?

[MJML](https://mjml.io) is an industry standard for composing email templates. It provides a robust foundation that handles the complexities of email client compatibility. Rather than reinventing the wheel, SailKit leverages MJML's proven engine while providing a modern, Svelte-based developer experience.

### Features

- 🎯 **Type-Safe**: Full TypeScript support
- 📱 **Responsive by Default**: Powered by MJML's engine
- ⚡ **Great DX**: Svelte primitives for composing templates
- 🛠️ **Simple API**: Intuitive methods for rendering and previewing
- 📦 **Production-Ready**: Outputs highly optimized responsive HTML

## Getting Started

```bash
npm install sailkit mjml
```

### Basic Example

```svelte
<script lang="ts">
  import { Html, Body, Section, Column, Text } from "sailkit";

  interface Props {
    text: string;
  }

  let { text = "Hello from SailKit! 👋" }: Props = $props();
</script>

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

```ts
import { renderEmail, previewEmail } from "sailkit";

const { html, plainText } = await renderEmail(MyEmail, { text: "Hello World!" });

// Or, if you want to preview the email in your browser
await previewEmail(MyEmail, { text: "Hello World!" });
```

## Documentation

### Core Functionality

SailKit exposes two primary functions: `renderEmail` and `previewEmail`.

#### renderEmail

`renderEmail` converts a Svelte 5 component into email-optimized HTML. It also generates a plain-text version and metadata by default.

| **Option**  | **Type**           | **Default** | **Description**                        |
| ----------- | ------------------ | ----------- | -------------------------------------- |
| `component` | `Svelte Component` | `-`         | The Svelte component to render.        |
| `props`     | `Props`            | `-`         | The component's input properties.      |
| `options`   | `RenderOptions`    | `-`         | See [Render Options](#render-options). |

#### previewEmail

`previewEmail` renders your Svelte 5 component and launches the resulting HTML in a browser or logs it to the console.

| **Option**  | **Type**               | **Default** | **Description**                        |
| ----------- | ---------------------- | ----------- | -------------------------------------- |
| `component` | `Svelte Component`     | `-`         | The Svelte component to render.        |
| `props`     | `Props`                | `-`         | The component's input properties.      |
| `mode`      | `browser` \| `console` | `browser`   | Determines where the preview is shown. |
| `options`   | `RenderOptions`        | `-`         | See [Render Options](#render-options). |

### Render Options

Configure the rendering process with these options:

| **Option**  | **Type** | **Default** | **Description**                                        |
| ----------- | -------- | ----------- | ------------------------------------------------------ |
| `plainText` | boolean  | `true`      | Whether to generate a plain-text version of the email. |
| `beautify`  | boolean  | `true`      | Whether to beautify the HTML output.                   |
| `minify`    | boolean  | `true`      | Whether to minify the HTML output.                     |

### Components

SailKit provides Svelte primitives for building email templates. Use these logically within layout components to ensure responsiveness and compatibility.

#### General Email Components

- [`Html`](#html)
- [`Head`](#head)
- [`Body`](#body)

#### Layout Components

- [`Section`](#section)
  - [`Section.Group`](#sectiongroup)
- [`Column`](#column)
  - [`Column.Spacer`](#columnspacer)
  - [`Column.Divider`](#columndivider)

#### Content Components

- [`Text`](#text)
- [`Button`](#button)
- [`Image`](#image)
- [`Table`](#table)
- [`Social`](#social)
  - [`Social.Element`](#socialelement)

#### Special Components

- [`Container`](#container)
- [`Raw`](#raw)

#### Html

The root component that establishes the email template structure.
Sets up language support and directional behavior.
Must be used as the outermost wrapper for your email template.

```svelte
<script lang="ts">
  import { Html, Head, Body } from "sailkit";
</script>

<Html language="en" dir="ltr">
  <Head subject="Welcome!" />
  <Body>
    <!-- Email content -->
  </Body>
</Html>
```

| **Prop**   | **Type**               | **Default** | **Description**                               |
| ---------- | ---------------------- | ----------- | --------------------------------------------- |
| `dir`      | `'auto'｜'ltr'｜'rtl'` | `'ltr'`     | Text direction for the email                  |
| `language` | string                 | `'en'`      | Language code for the email content           |
| `owa`      | boolean                | `false`     | Enable Outlook Web App specific optimizations |

> Note: The Html component must contain a Head component for metadata and a Body component for content. It provides the foundation for language and text direction support across email clients.

Advanced usage with RTL support:

```svelte
<Html language="ar" dir="rtl">
  <Head subject="مرحباً" />

  <Body>
    <!-- RTL content -->
  </Body>
</Html>
```

#### Head

Defines email metadata and styling configuration.
Should be used once per email template to set up the subject line, preview text, fonts, breakpoints, and styles.

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

| **Prop**     | **Type**                              | **Default** | **Unit** | **Description**                       |
| ------------ | ------------------------------------- | ----------- | -------- | ------------------------------------- |
| `subject`    | string                                | -           | -        | Email subject line (required)         |
| `preview`    | string                                | -           | -        | Preview text shown in email clients   |
| `breakpoint` | string                                | -           | px       | Width at which mobile layout triggers |
| `fonts`      | `Array<{name: string, href: string}>` | -           | -        | Custom fonts to include in the email  |
| `styles`     | `Styles`                              | -           | -        | Style definitions (see types below)   |

Style Types:

- `global`: Applied to all components in the email
- `component`: Applied to specific SailKit components (like 'text', 'button', etc.)
- `class`: Custom CSS classes that can be referenced by components via their class prop

Example with style types:

```svelte
<Head
  subject="Welcome"
  styles={[
    {
      type: "global",
      value: `font-family="Arial, sans-serif"`
    },
    {
      type: "component",
      component: "text",
      value: `color="#333333"`
    },
    {
      type: "class",
      value: ".header { font-size: 24px; }",
      inline: true
    }
  ]}
/>
```

> Note: The Head component must be a direct child of the Html component and should appear before the Body component.

#### Body

Container component that establishes the main content area of your email.
Controls the overall width and background styling of the email content.

```svelte
<Body width="650px" backgroundColor="#f6f6f6">
  <Section>
    <!-- Email content -->
  </Section>
</Body>
```

| **Prop**          | **Type** | **Default** | **Unit**        | **Description**                        |
| ----------------- | -------- | ----------- | --------------- | -------------------------------------- |
| `backgroundColor` | string   | `'#ffffff'` | CSS color value | Background color for email body        |
| `width`           | string   | `'600px'`   | px              | Maximum width of email content         |
| `class`           | string   | -           | -               | CSS class name(s) for custom styling\* |

\* CSS class name(s) that correspond to styles defined in the Head component's styles prop.

> Note: It's recommended to keep the width between 600px and 800px for optimal email client compatibility. The default 600px is considered a safe choice for most email clients.

#### Section

Structural component that defines a horizontal row of content. Used to create the main layout structure of the email by organizing content into rows.

```svelte
<Section padding="20px" backgroundColor="#f6f6f6">
  <Column>
    <Text>Content</Text>
  </Column>
</Section>
```

| **Prop**             | **Type**                    | **Default**    | **Unit**         | **Description**                        |
| -------------------- | --------------------------- | -------------- | ---------------- | -------------------------------------- |
| `backgroundColor`    | string                      | -              | CSS color value  | Background color of the section        |
| `backgroundUrl`      | string                      | -              | URL              | URL of a background image              |
| `backgroundPosition` | string                      | `'top center'` | -                | Position of background image           |
| `backgroundSize`     | string                      | `'auto'`       | px/% or keyword  | Size of background image               |
| `backgroundRepeat`   | string                      | `'repeat'`     | -                | How background image repeats           |
| `border`             | string                      | `'none'`       | CSS border value | CSS border shorthand                   |
| `borderTop`          | string                      | -              | CSS border value | Top border style                       |
| `borderRight`        | string                      | -              | CSS border value | Right border style                     |
| `borderBottom`       | string                      | -              | CSS border value | Bottom border style                    |
| `borderLeft`         | string                      | -              | CSS border value | Left border style                      |
| `borderRadius`       | string                      | -              | px               | Border radius for corners              |
| `class`              | string                      | -              | -                | CSS class name(s) for custom styling\* |
| `direction`          | `'ltr'｜'rtl'`              | `'ltr'`        | -                | Content direction                      |
| `fullWidth`          | `true`                      | -              |                  | Whether section spans full width       |
| `padding`            | string                      | `'20px 0'`     | px               | Padding shorthand for all sides        |
| `paddingTop`         | string                      | -              | px               | Top padding                            |
| `paddingRight`       | string                      | -              | px               | Right padding                          |
| `paddingBottom`      | string                      | -              | px               | Bottom padding                         |
| `paddingLeft`        | string                      | -              | px               | Left padding                           |
| `textAlign`          | `'left'｜'center'｜'right'` | -              | -                | Text alignment within section          |

\* CSS class name(s) that correspond to styles defined in the Head component's styles prop.

#### Section.Group

A special component that prevents its child columns from stacking on mobile devices. Must be used within a Section component.

```svelte
<Section>
  <Section.Group>
    <Column width="50%">Left side</Column>
    <Column width="50%">Right side</Column>
  </Section.Group>
</Section>
```

| **Prop**          | **Type**                    | **Default** | **Unit**        | **Description**                        |
| ----------------- | --------------------------- | ----------- | --------------- | -------------------------------------- |
| `backgroundColor` | string                      | -           | CSS color value | Background color of the group          |
| `class`           | string                      | -           | -               | CSS class name(s) for custom styling\* |
| `direction`       | `'ltr'｜'rtl'`              | `'ltr'`     | -               | Content direction                      |
| `verticalAlign`   | `'middle'｜'top'｜'bottom'` | `'top'`     | -               | Vertical alignment of columns          |
| `width`           | string                      | -           | px/%            | Width of the group                     |

\* CSS class name(s) that correspond to styles defined in the Head component's styles prop.

> Note: Columns within a Section.Group must use percentage-based widths and their total should equal 100%. For optimal compatibility, avoid whitespace between Column components inside a Group.

#### Column

A structural component used to create columns within a Section.
Automatically handles responsive behavior and includes nested components for spacing and dividers.

```svelte
<Section>
  <Column width="50%" backgroundColor="#f6f6f6">First column content</Column>
  <Column width="50%" verticalAlign="middle">Second column content</Column>
</Section>
```

| **Prop**               | **Type**                    | **Default** | **Unit**         | **Description**                        |
| ---------------------- | --------------------------- | ----------- | ---------------- | -------------------------------------- |
| `backgroundColor`      | string                      | -           | CSS color value  | Background color of the column         |
| `border`               | string                      | `'none'`    | CSS border value | CSS border shorthand for all sides     |
| `borderBottom`         | string                      | -           | CSS border value | Bottom border style                    |
| `borderLeft`           | string                      | -           | CSS border value | Left border style                      |
| `borderRadius`         | string                      | -           | px               | Border radius for corners              |
| `borderRight`          | string                      | -           | CSS border value | Right border style                     |
| `borderTop`            | string                      | -           | CSS border value | Top border style                       |
| `class`                | string                      | -           | -                | CSS class name(s) for custom styling\* |
| `innerBackgroundColor` | string                      | -           | CSS color value  | Background color of inner content      |
| `innerBorder`          | string                      | -           | CSS border value | Inner border shorthand                 |
| `innerBorderBottom`    | string                      | -           | CSS border value | Inner bottom border style              |
| `innerBorderLeft`      | string                      | -           | CSS border value | Inner left border style                |
| `innerBorderRadius`    | string                      | -           | px               | Inner border radius                    |
| `innerBorderRight`     | string                      | -           | CSS border value | Inner right border style               |
| `innerBorderTop`       | string                      | -           | CSS border value | Inner top border style                 |
| `padding`              | string                      | -           | px               | Padding shorthand for all sides        |
| `paddingBottom`        | string                      | -           | px               | Bottom padding                         |
| `paddingLeft`          | string                      | -           | px               | Left padding                           |
| `paddingRight`         | string                      | -           | px               | Right padding                          |
| `paddingTop`           | string                      | -           | px               | Top padding                            |
| `verticalAlign`        | `'middle'｜'top'｜'bottom'` | `'top'`     | -                | Vertical alignment within section      |
| `width`                | string                      | -           | px/%             | Width of the column                    |

\* CSS class name(s) that correspond to styles defined in the Head component's styles prop.

#### Column.Divider

Creates a horizontal line to visually separate content within a Column.

```svelte
<Column>
  <Text>Above divider</Text>
  <Column.Divider borderColor="#e0e0e0" borderStyle="dashed" borderWidth="1px" padding="15px 0" />
  <Text>Below divider</Text>
</Column>
```

| **Prop**                   | **Type**                      | **Default**   | **Unit**        | **Description**                        |
| -------------------------- | ----------------------------- | ------------- | --------------- | -------------------------------------- |
| `align`                    | `'left'｜'right'｜'center'`   | `'center'`    | -               | Horizontal alignment of the divider    |
| `borderColor`              | string                        | `'#000000'`   | CSS color value | Color of the divider line              |
| `borderStyle`              | `'dashed'｜'dotted'｜'solid'` | `'solid'`     | -               | Style of the divider line              |
| `borderWidth`              | string                        | `'4px'`       | px              | Thickness of the divider line          |
| `class`                    | string                        | -             | -               | CSS class name(s) for custom styling\* |
| `containerBackgroundColor` | string                        | -             | CSS color value | Background color behind the divider    |
| `padding`                  | string                        | `'10px 25px'` | px              | Padding shorthand for all sides        |
| `paddingBottom`            | string                        | -             | px              | Bottom padding                         |
| `paddingLeft`              | string                        | -             | px              | Left padding                           |
| `paddingRight`             | string                        | -             | px              | Right padding                          |
| `paddingTop`               | string                        | -             | px              | Top padding                            |
| `width`                    | string                        | `'100%'`      | px/%            | Width of the divider                   |

\* CSS class name(s) that correspond to styles defined in the Head component's styles prop.

#### Column.Spacer

Creates vertical spacing between content elements within a Column.

```svelte
<Column>
  <Text>First block</Text>
  <Column.Spacer height="30px" />
  <Text>Second block</Text>
</Column>
```

| **Prop**                   | **Type** | **Default** | **Unit**        | **Description**                        |
| -------------------------- | -------- | ----------- | --------------- | -------------------------------------- |
| `class`                    | string   | -           | -               | CSS class name(s) for custom styling\* |
| `containerBackgroundColor` | string   | -           | CSS color value | Background color of the spacer area    |
| `height`                   | string   | `'20px'`    | px              | Height of the spacer                   |
| `padding`                  | string   | `'0px'`     | px              | Padding shorthand for all sides        |
| `paddingBottom`            | string   | -           | px              | Bottom padding                         |
| `paddingLeft`              | string   | -           | px              | Left padding                           |
| `paddingRight`             | string   | -           | px              | Right padding                          |
| `paddingTop`               | string   | -           | px              | Top padding                            |

\* CSS class name(s) that correspond to styles defined in the Head component's styles prop.

> Note: Columns automatically stack on mobile devices. When used inside Section.Group, columns maintain their layout on mobile. Width values can be specified in pixels or percentages, but percentages are recommended for better responsiveness.

#### Text

A component for displaying and styling text content in email templates.
Provides comprehensive typography controls and ensures consistent text rendering across email clients.

```svelte
<Text color="#333333" fontSize="16px" fontWeight="bold" align="center">Important message</Text>
```

| **Prop**                   | **Type**                                          | **Default**                              | **Unit**        | **Description**                        |
| -------------------------- | ------------------------------------------------- | ---------------------------------------- | --------------- | -------------------------------------- |
| `align`                    | `'left'｜'right'｜'center'｜'justify'`            | `'left'`                                 | -               | Text alignment                         |
| `class`                    | string                                            | -                                        | -               | CSS class name(s) for custom styling\* |
| `color`                    | string                                            | `'#000000'`                              | CSS color value | Text color                             |
| `containerBackgroundColor` | string                                            | -                                        | CSS color value | Background color of the text container |
| `fontFamily`               | string                                            | `'Ubuntu, Helvetica, Arial, sans-serif'` | -               | Font family for the text               |
| `fontSize`                 | string                                            | `'13px'`                                 | px              | Font size                              |
| `fontStyle`                | `'normal'｜'italic'｜'oblique'`                   | -                                        | -               | Font style                             |
| `fontWeight`               | `number｜'normal'｜'bold'`                        | -                                        | -               | Font weight                            |
| `height`                   | string                                            | -                                        | px              | Fixed height                           |
| `letterSpacing`            | string                                            | -                                        | px/em           | Letter spacing                         |
| `lineHeight`               | string                                            | 1                                        | px/`none`       | Line height                            |
| `padding`                  | string                                            | `'10px 25px'`                            | px              | Padding shorthand for all sides        |
| `paddingBottom`            | string                                            | -                                        | px              | Bottom padding                         |
| `paddingLeft`              | string                                            | -                                        | px              | Left padding                           |
| `paddingRight`             | string                                            | -                                        | px              | Right padding                          |
| `paddingTop`               | string                                            | -                                        | px              | Top padding                            |
| `textDecoration`           | `'underline'｜'overline'｜'line-through'｜'none'` | -                                        | -               | Text decoration style                  |
| `textTransform`            | `'uppercase'｜'lowercase'｜'capitalize'`          | -                                        | -               | Text transformation                    |

\* CSS class name(s) that correspond to styles defined in the Head component's styles prop.

#### Button

A component for creating responsive and stylizable buttons.

```svelte
<Button href="https://example.com" backgroundColor="#007bff" borderRadius="5px" fontSize="16px" padding="15px 30px">
  Join now
</Button>
```

| **Prop**                   | **Type**                                 | **Default**                              | **Unit**         | **Description**                        |
| -------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------- | -------------------------------------- |
| `align`                    | `'left'｜'center'｜'right'`              | `'center'`                               | -                | Horizontal alignment of the button     |
| `backgroundColor`          | string                                   | `'#414141'`                              | CSS color value  | Background color of the button         |
| `border`                   | string                                   | `'none'`                                 | CSS border value | Border shorthand for all sides         |
| `borderBottom`             | string                                   | -                                        | CSS border value | Bottom border style                    |
| `borderLeft`               | string                                   | -                                        | CSS border value | Left border style                      |
| `borderRadius`             | string                                   | `'3px'`                                  | px               | Border radius for corners              |
| `borderRight`              | string                                   | -                                        | CSS border value | Right border style                     |
| `borderTop`                | string                                   | -                                        | CSS border value | Top border style                       |
| `class`                    | string                                   | -                                        | -                | CSS class name(s) for custom styling\* |
| `color`                    | string                                   | `'#ffffff'`                              | CSS color value  | Text color of the button               |
| `containerBackgroundColor` | string                                   | -                                        | CSS color value  | Background color of button container   |
| `fontFamily`               | string                                   | `'Ubuntu, Helvetica, Arial, sans-serif'` | -                | Font family for button text            |
| `fontSize`                 | string                                   | `'13px'`                                 | px/em            | Font size of the button text           |
| `fontStyle`                | `'normal'｜'italic'｜'oblique'`          | -                                        | -                | Font style of the button text          |
| `fontWeight`               | `number｜'normal'｜'bold'`               | `'normal'`                               | -                | Font weight of the button text         |
| `height`                   | string                                   | -                                        | px               | Fixed height of the button             |
| `href`                     | string                                   | -                                        | URL              | URL the button links to                |
| `innerPadding`             | string                                   | `'10px 25px'`                            | px               | Inner padding of the button            |
| `letterSpacing`            | string                                   | -                                        | px/em            | Letter spacing of the button text      |
| `lineHeight`               | string                                   | `'120%'`                                 | px/%             | Line height of the button text         |
| `padding`                  | string                                   | `'10px 25px'`                            | px               | Padding around the button              |
| `paddingBottom`            | string                                   | -                                        | px               | Bottom padding                         |
| `paddingLeft`              | string                                   | -                                        | px               | Left padding                           |
| `paddingRight`             | string                                   | -                                        | px               | Right padding                          |
| `paddingTop`               | string                                   | -                                        | px               | Top padding                            |
| `rel`                      | string                                   | -                                        | -                | Relationship attribute for the link    |
| `target`                   | `'_blank'｜'_self'｜'_parent'｜'_top'`   | `'_blank'`                               | -                | Target attribute for the link          |
| `textAlign`                | `'left'｜'center'｜'right'`              | -                                        | -                | Text alignment within the button       |
| `textDecoration`           | `'underline'｜'overline'｜'none'`        | `'none'`                                 | -                | Text decoration style                  |
| `textTransform`            | `'capitalize'｜'uppercase'｜'lowercase'` | -                                        | -                | Text transformation                    |
| `title`                    | string                                   | -                                        | -                | Title attribute for the button         |
| `verticalAlign`            | `'top'｜'middle'｜'bottom'`              | `'middle'`                               | -                | Vertical alignment of the button       |
| `width`                    | string                                   | -                                        | px               | Fixed width of the button              |

\* CSS class name(s) that correspond to styles defined in the Head component's styles prop.

> Note: The Button component renders as an HTML link styled as a button, ensuring clickability across different email clients. All styles are inlined for maximum compatibility.

#### Image

A component for displaying responsive images in email templates.
Handles image scaling, alignment, and linking while maintaining compatibility across email clients.

```svelte
<Image src="https://example.com/image.jpg" alt="Description" width="600px" fluidOnMobile="true" borderRadius="8px" />
```

| **Prop**                   | **Type**                    | **Default**   | **Unit**         | **Description**                        |
| -------------------------- | --------------------------- | ------------- | ---------------- | -------------------------------------- |
| `align`                    | `'left'｜'center'｜'right'` | `'center'`    | -                | Horizontal alignment of the image      |
| `alt`                      | string                      | `''`          | -                | Alternative text for the image         |
| `border`                   | string                      | `'none'`      | CSS border value | Border shorthand for all sides         |
| `borderBottom`             | string                      | `'none'`      | CSS border value | Bottom border style                    |
| `borderLeft`               | string                      | `'none'`      | CSS border value | Left border style                      |
| `borderRadius`             | string                      | -             | px               | Border radius for corners              |
| `borderRight`              | string                      | `'none'`      | CSS border value | Right border style                     |
| `borderTop`                | string                      | `'none'`      | CSS border value | Top border style                       |
| `class`                    | string                      | -             | -                | CSS class name(s) for custom styling\* |
| `containerBackgroundColor` | string                      | -             | CSS color value  | Background color of image container    |
| `fluidOnMobile`            | `'true'`                    | -             | -                | Whether image is full-width on mobile  |
| `height`                   | string                      | `'auto'`      | px/auto          | Image height                           |
| `href`                     | string                      | -             | URL              | URL the image links to                 |
| `name`                     | string                      | -             | -                | Name attribute for the image           |
| `padding`                  | string                      | `'10px 25px'` | px               | Padding shorthand for all sides        |
| `paddingBottom`            | string                      | -             | px               | Bottom padding                         |
| `paddingLeft`              | string                      | -             | px               | Left padding                           |
| `paddingRight`             | string                      | -             | px               | Right padding                          |
| `paddingTop`               | string                      | -             | px               | Top padding                            |
| `rel`                      | string                      | -             | -                | Relationship attribute for the link    |
| `src`                      | string                      | -             | URL              | Source URL of the image                |
| `srcset`                   | string                      | -             | -                | Srcset attribute for responsive images |
| `target`                   | string                      | `'_blank'`    | -                | Target attribute for the link          |
| `title`                    | string                      | -             | -                | Title attribute for the image          |
| `usemap`                   | string                      | -             | -                | Usemap attribute for image maps        |
| `width`                    | string                      | -             | px/%             | Image width                            |

\* CSS class name(s) that correspond to styles defined in the Head component's styles prop.

> Note: For best results, host images on a reliable CDN and provide fixed dimensions. Use `fluidOnMobile="true"` to create better mobile experiences by allowing images to stretch full-width on small screens.

#### Table

A component for creating HTML tables.
Provides consistent table rendering across email clients while supporting standard table attributes and styling options.

```svelte
<Table align="center" cellpadding="10px 25px" cellspacing="20px" color="#333333" fontSize="14px">
  <table>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
    <tr>
      <td>Value 1</td>
      <td>Value 2</td>
    </tr>
  </table>
</Table>
```

| **Prop**                   | **Type**                                | **Default**                              | **Unit**         | **Description**                        |
| -------------------------- | --------------------------------------- | ---------------------------------------- | ---------------- | -------------------------------------- |
| `align`                    | `'left'｜'right'｜'center'`             | `'left'`                                 | -                | Horizontal alignment of the table      |
| `border`                   | string                                  | `'none'`                                 | CSS border value | Border style for the table             |
| `cellPadding`              | string                                  | -                                        | px               | Cell padding for all table cells       |
| `cellSpacing`              | string                                  | -                                        | px               | Cell spacing between table cells       |
| `class`                    | string                                  | -                                        | -                | CSS class name(s) for custom styling\* |
| `color`                    | string                                  | `'#000000'`                              | CSS color value  | Text color within the table            |
| `containerBackgroundColor` | string                                  | -                                        | CSS color value  | Background color of table container    |
| `fontFamily`               | string                                  | `'Ubuntu, Helvetica, Arial, sans-serif'` | -                | Font family for table text             |
| `fontSize`                 | string                                  | `'13px'`                                 | px               | Font size for table text               |
| `lineHeight`               | string                                  | `'22px'`                                 | px/%             | Line height for table text             |
| `padding`                  | string                                  | `'10px 25px'`                            | px               | Padding around the table               |
| `paddingBottom`            | string                                  | -                                        | px               | Bottom padding                         |
| `paddingLeft`              | string                                  | -                                        | px               | Left padding                           |
| `paddingRight`             | string                                  | -                                        | px               | Right padding                          |
| `paddingTop`               | string                                  | -                                        | px               | Top padding                            |
| `role`                     | `'none'｜'presentation'`                | -                                        | -                | ARIA role for the table                |
| `tableLayout`              | `'auto'｜'fixed'｜'initial'｜'inherit'` | `'auto'`                                 | -                | CSS table-layout property              |
| `width`                    | string                                  | `'100%'`                                 | px/%             | Width of the table                     |

\* CSS class name(s) that correspond to styles defined in the Head component's styles prop.

> Note: The Table component is a wrapper for HTML table elements. The actual table structure should be created using standard HTML table elements (`<table>`, `<tr>`, `<td>`, etc.) within the component.

#### Social

A container component for social network links and icons.
Manages the layout and styling of social media elements, which are added using the Social.Element nested component.

```svelte
<Social mode="vertical" align="left" iconSize="30px">
  <Social.Element name="linkedin" href="https://linkedin.com/in/profile">Connect on LinkedIn</Social.Element>
  <Social.Element name="github" href="https://github.com/profile">Follow on GitHub</Social.Element>
</Social>
```

| **Prop**                   | **Type**                          | **Default**                              | **Unit**        | **Description**                         |
| -------------------------- | --------------------------------- | ---------------------------------------- | --------------- | --------------------------------------- |
| `align`                    | `'left'｜'right'｜'center'`       | `'center'`                               | -               | Horizontal alignment of social elements |
| `borderRadius`             | string                            | `'3px'`                                  | px              | Border radius for social elements       |
| `class`                    | string                            | -                                        | -               | CSS class name(s) for custom styling\*  |
| `color`                    | string                            | `'#333333'`                              | CSS color value | Text color for social elements          |
| `containerBackgroundColor` | string                            | -                                        | CSS color value | Background color of the container       |
| `fontFamily`               | string                            | `'Ubuntu, Helvetica, Arial, sans-serif'` | -               | Font family for text                    |
| `fontSize`                 | string                            | `'13px'`                                 | px              | Font size for text                      |
| `fontStyle`                | `'normal'｜'italic'｜'oblique'`   | `'normal'`                               | -               | Font style for text                     |
| `fontWeight`               | `number｜'normal'｜'bold'`        | `'normal'`                               | -               | Font weight for text                    |
| `iconHeight`               | string                            | -                                        | px              | Fixed height for social icons           |
| `iconPadding`              | string                            | `'0px'`                                  | px              | Padding around icons                    |
| `iconSize`                 | string                            | `'20px'`                                 | px              | Size of social icons                    |
| `innerPadding`             | string                            | `'4px'`                                  | px              | Inner padding for social elements       |
| `lineHeight`               | string                            | `'22px'`                                 | px              | Line height for text                    |
| `mode`                     | `'horizontal'｜'vertical'`        | `'horizontal'`                           | -               | Layout direction                        |
| `padding`                  | string                            | `'10px 25px'`                            | px              | Padding around the container            |
| `paddingBottom`            | string                            | -                                        | px              | Bottom padding                          |
| `paddingLeft`              | string                            | -                                        | px              | Left padding                            |
| `paddingRight`             | string                            | -                                        | px              | Right padding                           |
| `paddingTop`               | string                            | -                                        | px              | Top padding                             |
| `textDecoration`           | `'underline'｜'overline'｜'none'` | `'none'`                                 | -               | Text decoration style                   |
| `textPadding`              | string                            | `'4px 4px 4px 0'`                        | px              | Padding around text                     |

\* CSS class name(s) that correspond to styles defined in the Head component's styles prop.

#### Social.Element

An individual social network link and icon element. Must be used within a Social component.

```svelte
<Social.Element name="github" href="https://github.com/profile" iconSize="25px" backgroundColor="#333" color="#fff">
  Follow us
</Social.Element>
```

| **Prop**          | **Type**                          | **Default**                              | **Unit**        | **Description**                        |
| ----------------- | --------------------------------- | ---------------------------------------- | --------------- | -------------------------------------- |
| `align`           | `'left'｜'right'｜'center'`       | `'center'`                               | -               | Horizontal alignment                   |
| `alt`             | string                            | -                                        | -               | Alternative text for the icon          |
| `backgroundColor` | string                            | -                                        | CSS color value | Background color for the element       |
| `borderRadius`    | string                            | `'3px'`                                  | px              | Border radius                          |
| `class`           | string                            | -                                        | -               | CSS class name(s) for custom styling\* |
| `color`           | string                            | `'#333333'`                              | CSS color value | Text color                             |
| `fontFamily`      | string                            | `'Ubuntu, Helvetica, Arial, sans-serif'` | -               | Font family                            |
| `fontSize`        | string                            | `'13px'`                                 | px/em           | Font size                              |
| `fontStyle`       | `'normal'｜'italic'｜'oblique'`   | `'normal'`                               | -               | Font style                             |
| `fontWeight`      | `number｜'normal'｜'bold'`        | `'normal'`                               | -               | Font weight                            |
| `href`            | string                            | -                                        | URL             | URL for the social link                |
| `iconHeight`      | string                            | -                                        | px              | Fixed height for the icon              |
| `iconPosition`    | `'left'｜'right'`                 | -                                        | -               | Position of icon relative to text      |
| `iconSize`        | string                            | `'20px'`                                 | px              | Size of the icon                       |
| `lineHeight`      | string                            | `'22px'`                                 | px              | Line height                            |
| `name`            | `SocialNetwork`                   | -                                        | -               | Name of the social network (required)  |
| `padding`         | string                            | `'4px'`                                  | px              | Padding around the element             |
| `paddingBottom`   | string                            | -                                        | px              | Bottom padding                         |
| `paddingLeft`     | string                            | -                                        | px              | Left padding                           |
| `paddingRight`    | string                            | -                                        | px              | Right padding                          |
| `paddingTop`      | string                            | -                                        | px              | Top padding                            |
| `rel`             | string                            | -                                        | -               | Relationship attribute for the link    |
| `src`             | string                            | -                                        | URL             | Custom icon source URL                 |
| `srcset`          | string                            | -                                        | -               | Srcset attribute for responsive images |
| `target`          | string                            | `'_blank'`                               | -               | Target attribute for the link          |
| `textDecoration`  | `'underline'｜'overline'｜'none'` | `'none'`                                 | -               | Text decoration style                  |
| `title`           | string                            | -                                        | -               | Title attribute for the link           |
| `verticalAlign`   | `'top'｜'middle'｜'bottom'`       | `'middle'`                               | -               | Vertical alignment                     |

\* CSS class name(s) that correspond to styles defined in the Head component's styles prop.

> Note: Supported social networks include: facebook, twitter, x, google, pinterest, linkedin, tumblr, xing, github, instagram, web, snapchat, youtube, vimeo, medium, soundcloud, dribbble

I see the issue - there seem to be some inconsistencies in how the pipe characters and formatting are being rendered in the Container component's markdown table. Let me give you a clean version with proper table formatting:

#### Container

A wrapper component that groups sections together and provides background styling capabilities. Helps create consistent layouts and background treatments across email clients.

```svelte
<Container
  backgroundColor="#f6f6f6"
  backgroundUrl="https://example.com/bg.jpg"
  backgroundSize="cover"
  padding="40px 20px"
>
  <Section>
    <Column>
      <Text>Content with background</Text>
    </Column>
  </Section>
</Container>
```

| **Prop**              | **Type**                       | **Default**    | **Unit**         | **Description**                         |
| --------------------- | ------------------------------ | -------------- | ---------------- | --------------------------------------- |
| `backgroundColor`     | string                         | -              | CSS color value  | Background color of the container       |
| `backgroundPosition`  | string                         | `'top center'` | -                | Position of background image            |
| `backgroundPositionX` | string                         | `'none'`       | -                | Horizontal position of background image |
| `backgroundPositionY` | string                         | `'none'`       | -                | Vertical position of background image   |
| `backgroundRepeat`    | string                         | `'repeat'`     | -                | How background image should repeat      |
| `backgroundSize`      | string｜`'cover'`｜`'contain'` | -              | px/% or keyword  | Size of background image                |
| `backgroundUrl`       | string                         | -              | URL              | URL of background image                 |
| `border`              | string                         | `'none'`       | CSS border value | Border shorthand for all sides          |
| `borderBottom`        | string                         | -              | CSS border value | Bottom border style                     |
| `borderLeft`          | string                         | -              | CSS border value | Left border style                       |
| `borderRadius`        | string                         | -              | px               | Border radius for corners               |
| `borderRight`         | string                         | -              | CSS border value | Right border style                      |
| `borderTop`           | string                         | -              | CSS border value | Top border style                        |
| `class`               | string                         | -              | -                | CSS class name(s) for custom styling \* |
| `fullWidth`           | string                         | -              | -                | Whether container spans full width      |
| `padding`             | string                         | `'20px 0'`     | px               | Padding shorthand for all sides         |
| `paddingBottom`       | string                         | -              | px               | Bottom padding                          |
| `paddingLeft`         | string                         | -              | px               | Left padding                            |
| `paddingRight`        | string                         | -              | px               | Right padding                           |
| `paddingTop`          | string                         | -              | px               | Top padding                             |
| `textAlign`           | `'left'｜'center'｜'right'`    | `'center'`     | -                | Text alignment within container         |

\* CSS class name(s) that correspond to styles defined in the Head component's styles prop.

> Note: The Container component is ideal for grouping sections together and applying consistent styling across them. It's particularly useful for creating full-width backgrounds that span multiple sections.

#### Raw

A component that allows the inclusion of raw HTML content that will be left untouched by the email rendering process. Useful for including custom HTML markup or legacy email code that should bypass processing.

```svelte
<Raw>
  <h1>Hello World</h1>
  <span>
    <p>Paragraph</p>
  </span>
</Raw>
```

| **Prop**   | **Type** | **Default** | **Unit** | **Description**                                    |
| ---------- | -------- | ----------- | -------- | -------------------------------------------------- |
| `children` | Snippet  | -           | -        | Raw HTML content to be rendered without processing |

> Note: Use this component sparingly and only when other sailor components cannot achieve the desired layout or functionality. It's particularly useful for email client-specific conditional comments, legacy email code, or custom HTML that needs to remain unchanged during processing.

## Contributing

We welcome contributions! Whether it's bug reports, feature requests, or code contributions, feel free to engage with the project on GitHub.

## License

SailKit is open-source and available under the MIT License. Use it freely in your projects!
