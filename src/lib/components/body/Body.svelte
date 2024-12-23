<script lang="ts">
	/**
	 * @component Body
	 * @description A wrapper component that represents the main content area of an email.
	 * This component establishes the primary container for all email content and controls the overall width and background of the email body.
	 *
	 * @example
	 * ```svelte
	 * <Body backgroundColor="#f6f6f6" width="650px" class="custom-body">
	 *   // Your email content here
	 * </Body>
	 * ```
	 *
	 * With corresponding styles in Head component:
	 * ```svelte
	 * <Head
	 *   subject="My Email"
	 *   styles={[
	 *     {
	 *       type: 'class',
	 *       value: '.custom-body { background-color: #f6f6f6; }'
	 *     }
	 *   ]}
	 * />
	 * ```
	 *
	 * @typedef {Object} Props
	 * @property {Snippet} [children] - The content to be rendered within the body component.
	 *                                 Can include other SailKit components or regular HTML content.
	 * @property {string} [backgroundColor="#ffffff"] - The background color of the email body.
	 *                                                 Accepts any valid CSS color value.
	 * @property {string} [width="600px"] - The maximum width of the email content.
	 *                                     Defaults to 600px which is a standard email width.
	 * @property {string} [class] - CSS class name(s) that correspond to styles defined in the Head
	 *                             component's styles prop. These styles can be defined as either
	 *                             inline or regular CSS classes.
	 *
	 * @remarks
	 * The Body component is a fundamental building block for email templates.
	 * It's recommended to keep the width between 600px and 800px for optimal
	 * email client compatibility. The default width of 600px is considered
	 * a safe choice for most email clients.
	 *
	 * Custom styles can be applied via the class prop, but these styles must be
	 * declared in the Head component using the styles prop. This ensures proper
	 * email client compatibility and style processing.
	 */

	import type { Snippet } from 'svelte';
	import type { Properties } from 'csstype';
	import type { DefaultUnits } from '$lib/types.js';

	interface Props {
		children?: Snippet;
		backgroundColor?: Properties['backgroundColor'];
		width?: DefaultUnits['width'];
		class?: string;
	}

	const { children, backgroundColor, width, class: cssClass }: Props = $props();

	const mjmlBodyTag = 'mj-body';

	const attributes = [
		backgroundColor && `background-color="${backgroundColor}"`,
		width && `width="${width}"`,
		cssClass && `css-class="${cssClass}"`
	]
		.filter(Boolean)
		.join(' ');
</script>

{@html `<${mjmlBodyTag} ${attributes}>`}
{@render children?.()}
{@html `</${mjmlBodyTag}>`}
