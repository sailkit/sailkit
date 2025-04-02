<script lang="ts">
  import type { DefaultUnits, StyleString } from '$lib/types.js';
  import type { ThemeOptions } from '$lib/theme.js';
  import { Html, Head, Body, Raw } from '$lib/index.js';

  type ComponentName =
    | 'body'
    | 'button'
    | 'column'
    | 'divider'
    | 'hero'
    | 'image'
    | 'section'
    | 'social-element'
    | 'social'
    | 'table'
    | 'text'
    | 'container';

  interface StyleProps {
    global?: StyleString;
    components?: Partial<Record<ComponentName, StyleString>>;
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
    breakpoint?: DefaultUnits['breakpoint'];
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
