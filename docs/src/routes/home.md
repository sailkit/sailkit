---
title: Welcome
---

<script lang="ts">
  import Block from '$lib/components/Block.svelte';
  import { ExclamationTriangle } from 'svelte-radix';
</script>

# ⛵ SailKit

Create responsive email templates in your SvelteKit applications with ease.

<Block>
<span class="flex items-center gap-2">
<ExclamationTriangle class="h-4 w-4" />
SailKit is still in its early stages. Expect breaking changes, bugs, and rough edges.
</span>
</Block>

## Overview

SailKit is an open-source toolkit for composing responsive email templates in
SvelteKit applications. It provides a set of Svelte 5 primitives and utilities
to help you create optimized and responsive production-ready emails.

## Why SailKit?

Email is notoriously challenging. crafting responsive, visually consistent
emails across various email clients and devices is not a trivial task. SailKit
simplifies this process by:

- Offering a clean and intuitive API for composing, rendering, and previewing
  email templates.
- Providing Svelte 5 primitives that feel natural and ergonomic to use.
- Translating your Svelte components into optimized MJML markup under the hood.
- Leveraging MJML's industry-standard email rendering engine to generate
  high-quality, responsive HTML that adheres to best practices.

### Why MJML?

[MJML](https://mjml.io) is an industry standard for composing email templates.
It provides a robust foundation that handles the complexities of email client
compatibility. Rather than reinventing the wheel, SailKit leverages MJML's
proven engine while providing a modern, Svelte-based developer experience.

### Features

- 🎯 **Type-Safe**: Full TypeScript support
- 📱 **Responsive by Default**: Powered by MJML's engine
- ⚡ **Great DX**: Svelte primitives for composing templates
- 🛠️ **Simple API**: Intuitive methods for rendering and previewing
- 📦 **Production-Ready**: Outputs highly optimized responsive HTML

### Contributing

We welcome contributions! Whether it's bug reports, feature requests, or code
contributions, feel free to engage with the project on
[GitHub](https://github.com/n00ki/sailkit).

#### License

SailKit is open-source and available under the MIT License. Use it freely in
your projects!
