<script lang="ts">
  /**
   * @component Html
   * @description The root component for email templates that provides language and directional text support.
   *
   * @example
   * Basic usage:
   * ```svelte
   * <Html>
   *   <Head subject="Welcome Email" />
   *   <Body>
   *     <- Email content ->
   *   </Body>
   * </Html>
   * ```
   *
   * With language and direction:
   * ```svelte
   * <Html language="ar" dir="rtl">
   *   <Head subject="مرحباً" />
   *   <Body>
   *   	<Section>
   * 			<Column>
   *   			<Text>محتوى البريد الإلكتروني</Text>
   * 			</Column>
   * 		</Section>
   *   </Body>
   * </Html>
   * ```
   *
   * @remarks
   * The Html component should be the outermost component of your email template.
   * It must contain a Head component for email metadata and a Body component for
   * the email content.
   */

  import type { Snippet } from 'svelte';

  interface Props {
    children?: Snippet;
    /** Text direction for the email (default: ltr) */
    dir?: 'auto' | 'ltr' | 'rtl';
    /** Language code for the email content (default: en) */
    language?: string;
    /** Enable Outlook Web App specific optimizations (default: false) */
    owa?: boolean;
  }

  const mjmlTag = 'mjml';

  const { children, dir = 'ltr', language = 'en', owa = false }: Props = $props();
</script>

{@html `<${mjmlTag} lang="${language}" dir="${dir}" owa="${owa && 'desktop'}">`}
{@render children?.()}
{@html `</${mjmlTag}>`}
