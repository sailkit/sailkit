# ⛵ SailKit

> [!CAUTION]
> **SailKit is no longer maintained.** See below for details and alternatives.

## Sunset Notice

I've decided to sunset SailKit.

When I started this project, I wanted to make email templating in SvelteKit feel natural — write Svelte components, get responsive emails out. The idea was to wrap MJML's battle-tested rendering engine behind a clean Svelte 5 API, and I think we got pretty close to that.

But honestly, I couldn't build enough momentum around it. The Svelte email space is small, and there are other projects doing good work here. Rather than letting SailKit sit and collect dust, I'd rather be upfront about it: this project is done. Instead, I'll focus on contributing to other projects that move the Svelte ecosystem forward.

If you're using SailKit, everything still works — I'm not pulling the package or breaking anything. But there won't be new releases, bug fixes, or updates going forward.

### Alternatives

If you're looking for something actively maintained:

- **[better-svelte-email](https://github.com/Konixy/better-svelte-email)** — A solid option with Tailwind v4 support and active development. Inspired by React Email.
- **[svelte-email](https://github.com/carstenlebek/svelte-email)** — The original Svelte email library.
- **[MJML](https://mjml.io) directly** — If you liked SailKit's approach, you can use MJML on its own with Svelte's server-side rendering. That's essentially what SailKit did under the hood.

Thanks to everyone who tried it out, spread the word or contributed.

— Noam (n00ki)

---

<details>
<summary>Original README (for reference)</summary>

Create responsive email templates in your SvelteKit applications with ease.

## Overview

SailKit is an open-source toolkit for composing responsive email templates in SvelteKit applications.
It provides a set of Svelte 5 primitives and utilities to help you create optimized and responsive production-ready emails.

Visit the [SailKit documentation](https://sailkit.xyz) for more information.

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

Visit the [SailKit documentation](https://sailkit.xyz) for more information.

### Core Functionality

SailKit exposes two primary functions: `renderEmail` and `previewEmail`.

#### renderEmail

`renderEmail` converts a Svelte 5 component into email-optimized HTML. It also generates a plain-text version and metadata by default.

#### previewEmail

`previewEmail` renders your Svelte 5 component and launches the resulting HTML in a browser or logs it to the console.

### Components

SailKit provides Svelte primitives for building email templates. Use these logically within layout components to ensure responsiveness and compatibility.

#### General Email Components

- `Html`
- `Head`
- `Body`

#### Layout Components

- `Section`
  - `Section.Group`
- `Column`
  - `Column.Spacer`
  - `Column.Divider`

#### Content Components

- `Text`
- `Button`
- `Image`
- `Table`
- `Social`
  - `Social.Element`

#### Special Components

- `Container`
- `Raw`

## Contributing

We welcome contributions! Whether it's bug reports, feature requests, or code contributions, feel free to engage with the project on GitHub.

## License

SailKit is open-source and available under the MIT License. Use it freely in your projects!

</details>
