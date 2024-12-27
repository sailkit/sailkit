<script lang="ts">
	/**
	 * @component Container
	 * @description A wrapper component that groups sections together and provides background styling capabilities.
	 * This component helps create consistent layouts and background treatments
	 * across email clients.
	 *
	 * @example
	 * Basic usage:
	 * ```svelte
	 * <Container padding="20px">
	 *   <Section>
	 *     Content goes here
	 *   </Section>
	 * </Container>
	 * ```
	 *
	 * With background styling:
	 * ```svelte
	 * <Container
	 *   backgroundColor="#f6f6f6"
	 *   backgroundUrl="https://example.com/bg.jpg"
	 *   backgroundSize="cover"
	 *   padding="40px 20px"
	 * >
	 *   <Section>
	 *     Content with background
	 *   </Section>
	 * </Container>
	 * ```
	 *
	 * @remarks
	 * The Container component is ideal for grouping sections together and applying
	 * consistent styling across them. It's particularly useful for creating full-width
	 * backgrounds that span multiple sections.
	 */

	import type { Snippet } from 'svelte';
	import type { Properties } from 'csstype';
	import type { DefaultUnits } from '$lib/types.js';

	interface Props {
		children?: Snippet;
		/** Background color of the container */
		backgroundColor?: Properties['backgroundColor'];
		/** Position of background image (default: top center) */
		backgroundPosition?: Properties['backgroundPosition'];
		/** Horizontal position of background image (default: none) */
		backgroundPositionX?: Properties['backgroundPositionX'];
		/** Vertical position of background image (default: none) */
		backgroundPositionY?: Properties['backgroundPositionY'];
		/** How background image should repeat (default: repeat) */
		backgroundRepeat?: Properties['backgroundRepeat'];
		/** Size of background image (default: auto) */
		backgroundSize?: DefaultUnits['backgroundSize'];
		/** URL of background image */
		backgroundUrl?: string;
		/** Border shorthand for all sides (default: none) */
		border?: Properties['border'];
		/** Bottom border style */
		borderBottom?: Properties['borderBottom'];
		/** Left border style */
		borderLeft?: Properties['borderLeft'];
		/** Border radius for corners */
		borderRadius?: Properties['borderRadius'];
		/** Right border style */
		borderRight?: Properties['borderRight'];
		/** Top border style */
		borderTop?: Properties['borderTop'];
		/** CSS class name(s) that correspond to styles defined in the Head component's styles prop. */
		class?: string;
		/** Whether container spans full width */
		fullWidth?: string;
		/** Padding around the container (default: 20px 0) */
		padding?: Properties['padding'];
		/** Bottom padding */
		paddingBottom?: DefaultUnits['paddingBottom'];
		/** Left padding */
		paddingLeft?: DefaultUnits['paddingLeft'];
		/** Right padding */
		paddingRight?: DefaultUnits['paddingRight'];
		/** Top padding */
		paddingTop?: DefaultUnits['paddingTop'];
		/** Text alignment within container (default: center) */
		textAlign?: 'left' | 'center' | 'right';
	}

	const {
		backgroundColor,
		backgroundPosition,
		backgroundPositionX,
		backgroundPositionY,
		backgroundRepeat,
		backgroundSize,
		backgroundUrl,
		border,
		borderBottom,
		borderLeft,
		borderRadius,
		borderRight,
		borderTop,
		children,
		class: cssClass,
		fullWidth,
		padding,
		paddingBottom,
		paddingLeft,
		paddingRight,
		paddingTop,
		textAlign
	}: Props = $props();

	const mjmlWrapperTag = 'mj-wrapper';

	const attributes = [
		backgroundColor && `background-color="${backgroundColor}"`,
		backgroundPosition && `background-position="${backgroundPosition}"`,
		backgroundPositionX && `background-position-x="${backgroundPositionX}"`,
		backgroundPositionY && `background-position-y="${backgroundPositionY}"`,
		backgroundRepeat && `background-repeat="${backgroundRepeat}"`,
		backgroundSize && `background-size="${backgroundSize}"`,
		backgroundUrl && `background-url="${backgroundUrl}"`,
		border && `border="${border}"`,
		borderBottom && `border-bottom="${borderBottom}"`,
		borderLeft && `border-left="${borderLeft}"`,
		borderRadius && `border-radius="${borderRadius}"`,
		borderRight && `border-right="${borderRight}"`,
		borderTop && `border-top="${borderTop}"`,
		cssClass && `css-class="${cssClass}"`,
		fullWidth && `full-width="${fullWidth}"`,
		padding && `padding="${padding}"`,
		paddingBottom && `padding-bottom="${paddingBottom}"`,
		paddingLeft && `padding-left="${paddingLeft}"`,
		paddingRight && `padding-right="${paddingRight}"`,
		paddingTop && `padding-top="${paddingTop}"`,
		textAlign && `text-align="${textAlign}"`
	]
		.filter(Boolean)
		.join(' ');
</script>

{@html `<${mjmlWrapperTag} ${attributes}>`}
{@render children?.()}
{@html `</${mjmlWrapperTag}>`}
