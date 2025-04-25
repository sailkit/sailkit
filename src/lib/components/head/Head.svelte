<script lang="ts">
  /**
   * @component Head
   * @description Defines the email metadata and styling configuration for the email template.
   * This component manages crucial email properties like subject line, preview text, fonts,
   * responsive breakpoints, and styles.
   *
   * @example
   * Basic usage:
   * ```svelte
   * <Head
   *   subject="Welcome to Our Newsletter"
   *   preview="Check out our latest updates and news"
   * />
   * ```
   *
   * Advanced usage with custom fonts and styles:
   * ```svelte
   * <Head
   *   subject="Welcome to Our Newsletter"
   *   preview="Check out our latest updates"
   *   fonts={[
   *     {
   *       name: "Roboto",
   *       href: "https://fonts.googleapis.com/css2?family=Roboto"
   *     }
   *   ]}
   *   breakpoint='480px'
   *   styles={{
   *     global: {
   *       backgroundColor: "#f8f9fa",
   *       fontFamily: "Roboto, sans-serif",
   *       textAlign: "center"
   *     },
   *     components: {
   *       button: {
   *         backgroundColor: "#007bff",
   *         color: "#ffffff",
   *         borderRadius: "4px"
   *       },
   *       text: {
   *         color: "#333333",
   *         fontSize: "16px",
   *         lineHeight: "1.5"
   *       }
   *     },
   *     custom: [
   *       // Regular CSS (not inlined)
   *       `.title {
   *         font-size: 32px;
   *         font-weight: 600;
   *         color: #1F2937;
   *       }`,
   *
   *       // Inlined CSS
   *       {
   *         inline: true,
   *         css: '.header { font-size: 24px; }'
   *       },
   *
   *       // Media queries
   *       `@media (max-width: 480px) {
   *         .title { font-size: 24px; }
   *         .mobile-hidden { display: none; }
   *       }`
   *     ]
   *   }}
   * />
   * ```
   *
   * Using themes for consistent styling:
   * ```ts
   * // theme.ts
   * import { createTheme } from 'sailkit';
   *
   * export const myTheme = createTheme({
   *   fonts: [
   *     {
   *       name: 'Roboto',
   *       href: 'https://fonts.googleapis.com/css2?family=Roboto'
   *     }
   *   ],
   *   breakpoint: '480px',
   *   styles: {
   *     global: {
   *       fontFamily: "Roboto, sans-serif"
   *     },
   *     components: {
   *       text: {
   *         color: "#333333"
   *       },
   *       button: {
   *         backgroundColor: "#007bff"
   *       }
   *     },
   *     custom: [
   *       '.header { font-size: 24px; }',
   *       {
   *         inline: true,
   *         css: '.footer { padding: 20px; }'
   *       }
   *     ]
   *   }
   * });
   *
   * // MyEmail.svelte
   * <Head
   *   subject="Welcome Email"
   *   preview="Check out our latest updates"
   *   theme={myTheme}
   *   // Optional: Override specific theme properties
   *   styles={{
   *     components: {
   *       button: {
   *         backgroundColor: "#ff0000" // This will override the theme's button color
   *       }
   *     }
   *   }}
   * />
   * ```
   *
   * @remarks
   * The Head component should be used once per email template and placed before any content
   * components. It's crucial for:
   * - Defining email metadata (subject, preview)
   * - Setting up responsive design (breakpoint)
   * - Managing typography (fonts)
   * - Establishing styling (global styles, component styles, and custom CSS)
   *
   * Style definitions follow a hierarchy:
   * 1. Global styles affect all components
   * 2. Component styles target specific SailKit components
   * 3. Custom styles allow for regular CSS rules injection
   *
   * When using themes:
   * - Themes provide a reusable configuration for consistent styling across templates
   * - Individual props can override theme properties when needed
   * - Component styles are merged (individual props override theme styles)
   * - Custom styles from both theme and props are concatenated
   * - Use createTheme utility to define type-safe themes
   */

  import type { BodyProps } from '$lib/components/body/Body.svelte';
  import type { ButtonProps } from '$lib/components/button/Button.svelte';
  import type { ColumnProps } from '$lib/components/column/Column.svelte';
  import type { ContainerProps } from '$lib/components/container/Container.svelte';
  import type { DividerProps } from '$lib/components/column/Divider.svelte';
  import type { GroupProps } from '$lib/components/section/Group.svelte';
  import type { ImageProps } from '$lib/components/image/Image.svelte';
  import type { SectionProps } from '$lib/components/section/Section.svelte';
  import type { SocialProps } from '$lib/components/social/Social.svelte';
  import type { SocialElementProps } from '$lib/components/social/SocialElement.svelte';
  import type { TableProps } from '$lib/components/table/Table.svelte';
  import type { TextProps } from '$lib/components/text/Text.svelte';

  import type { CustomProperties } from '$lib/types.js';
  import type { Snippet } from 'svelte';
  import type { ThemeOptions } from '$lib/theme.js';

  type ComponentProps =
    | BodyProps
    | ButtonProps
    | ColumnProps
    | ContainerProps
    | DividerProps
    | GroupProps
    | ImageProps
    | SectionProps
    | SocialProps
    | SocialElementProps
    | TableProps
    | TextProps;

  interface StyleProps {
    /** Global styles that affect all components */
    global?: Partial<ComponentProps>;
    /** Component-specific styles */
    components?: {
      body?: Partial<BodyProps>;
      button?: Partial<ButtonProps>;
      column?: Partial<ColumnProps>;
      container?: Partial<ContainerProps>;
      divider?: Partial<DividerProps>;
      group?: Partial<GroupProps>;
      image?: Partial<ImageProps>;
      section?: Partial<SectionProps>;
      social?: Partial<SocialProps>;
      socialElement?: Partial<SocialElementProps>;
      table?: Partial<TableProps>;
      text?: Partial<TextProps>;
    };
    /** Custom CSS rules */
    custom?: Array<
      | string
      | {
          inline: true;
          css: string;
        }
    >;
  }

  export interface HeadProps {
    children?: Snippet;
    subject: string;
    preview?: string;
    /** Individual style configurations - will be merged with theme if both are provided */
    fonts?: {
      name: string;
      href: string;
    }[];
    breakpoint?: CustomProperties['breakpoint'];
    styles?: StyleProps;
    /** Theme configuration - can be created using createTheme utility */
    theme?: ThemeOptions;
  }

  const {
    children,
    subject,
    preview,
    fonts: propFonts,
    breakpoint: propBreakpoint,
    styles: propStyles,
    theme
  }: HeadProps = $props();

  // Merge theme and individual props
  const fonts = propFonts || theme?.fonts;
  const breakpoint = propBreakpoint || theme?.breakpoint;

  // Helper function to merge styles safely
  function mergeStyles(): StyleProps | undefined {
    if (!theme?.styles && !propStyles) return undefined;

    if (!theme?.styles) return propStyles;
    if (!propStyles) return theme.styles as StyleProps;

    // Start with fresh empty objects
    const components: StyleProps['components'] = {};

    // Merge global styles
    const global = propStyles.global
      ? { ...(theme.styles.global as Partial<ComponentProps>), ...propStyles.global }
      : (theme.styles.global as Partial<ComponentProps>);

    // Get all component keys and merge component styles
    if (theme.styles.components || propStyles.components) {
      // Get the keys from both objects
      const allComponentKeys = new Set([
        ...(theme.styles.components ? Object.keys(theme.styles.components) : []),
        ...(propStyles.components ? Object.keys(propStyles.components) : [])
      ]);

      // For each component, merge the properties
      allComponentKeys.forEach((key) => {
        const componentKey = key as keyof StyleProps['components'];
        const themeComponent =
          theme.styles?.components?.[componentKey as keyof typeof theme.styles.components];
        const propsComponent = propStyles.components?.[componentKey];

        // Safely create the merged component
        if (componentKey) {
          // Cast to the correct component type for this key
          components[componentKey] = {
            ...(themeComponent || {}),
            ...(propsComponent || {})
          } as StyleProps['components'][typeof componentKey];
        }
      });
    }

    // Merge custom styles
    const custom = [
      ...((theme.styles.custom || []) as Array<string | { inline: true; css: string }>),
      ...(propStyles.custom || [])
    ];

    return { global, components, custom };
  }

  const styles = mergeStyles();

  /** Convert props object to MJML-compatible attribute string */
  function convertToAttributeString(styleObj: Record<string, any> | undefined): string {
    if (!styleObj || typeof styleObj !== 'object') return '';

    const attributePairs: string[] = [];

    for (const [key, value] of Object.entries(styleObj)) {
      if (value === undefined) continue;
      if (key === 'class') continue; // Skip 'class' prop in styling objects

      let attrName = key;
      let attrValue = value;

      // Convert camelCase to kebab-case for most attributes
      attrName = key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

      // Special attribute name transformations
      if (attrName === 'cell-padding') {
        attrName = 'cellpadding';
      } else if (attrName === 'cell-spacing') {
        attrName = 'cellspacing';
      }

      // Convert boolean values to strings
      if (attrName === 'full-width' || attrName === 'fluid-on-mobile') {
        attrValue = String(attrValue);
      }

      attributePairs.push(`${attrName}="${attrValue}"`);
    }

    return attributePairs.join(' ');
  }

  const mjmlHeadTag = 'mj-head';
  const mjmlTitleTag = 'mj-title';
  const mjmlPreviewTag = 'mj-preview';
  const mjmlAttributesTag = 'mj-attributes';
  const mjmlFontTag = 'mj-font';
  const mjmlBreakpointTag = 'mj-breakpoint';
  const mjmlStyleTag = 'mj-style';
  const mjmlAllTag = 'mj-all';

  function normalizeCSSRule(css: string): string {
    const rules = {
      // Remove newlines and tabs
      removeLineBreaks: /[\n\t]/g,
      // Normalize spaces
      normalizeSpaces: /\s+/g,
      // Format brackets
      openingBracket: /{\s*/g,
      closingBracket: /\s*}/g,
      // Format properties
      semicolon: /;\s*/g,
      // Format media queries
      mediaQuery: /(@media[^{]+){\s*/g
    };

    const replacements = {
      openingBracket: '{ ',
      closingBracket: ' }',
      semicolon: '; ',
      mediaQuery: '$1{ '
    };

    return css
      .replace(rules.removeLineBreaks, '')
      .replace(rules.normalizeSpaces, ' ')
      .replace(rules.openingBracket, replacements.openingBracket)
      .replace(rules.closingBracket, replacements.closingBracket)
      .replace(rules.semicolon, replacements.semicolon)
      .replace(rules.mediaQuery, replacements.mediaQuery)
      .trim();
  }
</script>

{@html `<${mjmlHeadTag}>`}
{@render children?.()}
{@html `<${mjmlTitleTag}>${subject}</${mjmlTitleTag}>`}
{#if preview}
  {@html `<${mjmlPreviewTag}>${preview}</${mjmlPreviewTag}>`}
{/if}
{#if fonts}
  {#each fonts as font}
    {@html `<${mjmlFontTag} name="${font.name}" href="${font.href}" />`}
  {/each}
{/if}
{#if breakpoint}
  {@html `<${mjmlBreakpointTag} width="${breakpoint}" />`}
{/if}
{#if styles}
  {@html `<${mjmlAttributesTag}>`}
  {#if styles.global && typeof styles.global === 'object'}
    {@html `<${mjmlAllTag} ${convertToAttributeString(styles.global)} />`}
  {/if}
  {#if styles.components}
    {#each Object.entries(styles.components) as [component, value]}
      {#if value && typeof value === 'object'}
        {#if component === 'container'}
          {@html `<mj-wrapper ${convertToAttributeString(value)} />`}
        {:else if component === 'socialElement'}
          {@html `<mj-social-element ${convertToAttributeString(value)} />`}
        {:else}
          {@html `<mj-${component} ${convertToAttributeString(value)} />`}
        {/if}
      {/if}
    {/each}
  {/if}
  {@html `</${mjmlAttributesTag}>`}
  {#if styles?.custom}
    {#each styles.custom as rule}
      {#if typeof rule === 'string'}
        {@html `<${mjmlStyleTag}>${normalizeCSSRule(rule)}</${mjmlStyleTag}>`}
      {:else}
        {@html `<${mjmlStyleTag} inline="inline">${normalizeCSSRule(rule.css)}</${mjmlStyleTag}>`}
      {/if}
    {/each}
  {/if}
{/if}
{@html `</${mjmlHeadTag}>`}
