<script lang="ts">
	/**
	 * @component Html
	 * @description The root component for email templates that provides language and directional text support.
	 * Based on the MJML root element, it sets up the basic HTML structure and document-level attributes.
	 *
	 * @example
	 * Basic usage:
	 * ```svelte
	 * <Html>
	 *   <Head subject="Welcome Email" />
	 *   <Body>
	 *     Email content
	 *   </Body>
	 * </Html>
	 * ```
	 *
	 * With language and direction:
	 * ```svelte
	 * <Html language="ar" dir="rtl">
	 *   <Head subject="مرحباً" />
	 *   <Body>
	 *     محتوى البريد الإلكتروني
	 *   </Body>
	 * </Html>
	 * ```
	 *
	 * @typedef {Object} Props
	 * @property {Snippet} [children] - The content to be rendered within the HTML structure
	 * @property {'auto'|'ltr'|'rtl'} [dir="ltr"] - Text direction for the email
	 * @property {string} [language="en"] - Language code for the email content
	 * @property {boolean} [owa=false] - Enable/disable Outlook Web App specific optimizations
	 *
	 * @remarks
	 * The Html component should be the outermost component of your email template.
	 * It must contain a Head component for email metadata and a Body component for
	 * the email content.
	 */

	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		dir?: 'auto' | 'ltr' | 'rtl';
		language?: string;
		owa?: boolean;
	}

	const mjmlTag = 'mjml';

	const { children, dir = 'ltr', language = 'en', owa = false }: Props = $props();
</script>

{@html `<${mjmlTag} lang="${language}" dir="${dir}" owa="${owa && 'desktop'}">`}
{@render children?.()}
{@html `</${mjmlTag}>`}
