<script lang="ts">
  import type { CustomProperties } from '$lib/types.js';
  import type { ThemeOptions } from '$lib/theme.js';
  import { Html, Head, Body, Raw } from '$lib/index.js';
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

  interface Props {
    subject: string;
    preview?: string;
    fonts?: {
      name: string;
      href: string;
    }[];
    breakpoint?: CustomProperties['breakpoint'];
    styles?: StyleProps;
    theme?: ThemeOptions;
  }

  const { subject, preview, fonts, breakpoint, styles, theme }: Props = $props();
</script>

<Html>
  <Head {subject} {preview} {fonts} {breakpoint} {styles} {theme}>
    <Raw>
      <meta name="x-apple-disable-message-reformatting" />
      <meta name="color-scheme" content="light dark" />
      <meta name="supported-color-schemes" content="light dark" />
    </Raw>
  </Head>
  <Body></Body>
</Html>
