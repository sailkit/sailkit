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
	 * @typedef {Object} Props
	 * @property {string} [backgroundColor] - Background color of the container
	 * @property {string} [backgroundPosition="top center"] - Position of the background image
	 * @property {string} [backgroundPositionX="none"] - Horizontal position of the background image
	 * @property {string} [backgroundPositionY="none"] - Vertical position of the background image
	 * @property {string} [backgroundRepeat="repeat"] - How the background image should repeat
	 * @property {string|'cover'|'contain'} [backgroundSize] - Size of the background image
	 * @property {string} [backgroundUrl] - URL of the background image
	 * @property {string} [border="none"] - CSS border shorthand for all sides
	 * @property {string} [borderBottom] - Bottom border style
	 * @property {string} [borderLeft] - Left border style
	 * @property {string} [borderRadius] - Border radius for all corners
	 * @property {string} [borderRight] - Right border style
	 * @property {string} [borderTop] - Top border style
	 * @property {Snippet} [children] - The content to be rendered within the container
	 * @property {string} [class] - CSS class names to apply, defined in the Head component's styles
	 * @property {string} [fullWidth] - Whether the container should be full-width
	 * @property {string} [padding="20px 0"] - Padding shorthand for all sides
	 * @property {string} [paddingBottom] - Bottom padding
	 * @property {string} [paddingLeft] - Left padding
	 * @property {string} [paddingRight] - Right padding
	 * @property {string} [paddingTop] - Top padding
	 * @property {'left'|'center'|'right'} [textAlign="center"] - Text alignment within the container
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
		backgroundColor?: Properties['backgroundColor'];
		backgroundPosition?: Properties['backgroundPosition'];
		backgroundPositionX?: Properties['backgroundPositionX'];
		backgroundPositionY?: Properties['backgroundPositionY'];
		backgroundRepeat?: Properties['backgroundRepeat'];
		backgroundSize?: DefaultUnits['backgroundSize'];
		backgroundUrl?: string;
		border?: Properties['border'];
		borderBottom?: Properties['borderBottom'];
		borderLeft?: Properties['borderLeft'];
		borderRadius?: Properties['borderRadius'];
		borderRight?: Properties['borderRight'];
		borderTop?: Properties['borderTop'];
		class?: string;
		fullWidth?: string;
		padding?: Properties['padding'];
		paddingBottom?: DefaultUnits['paddingBottom'];
		paddingLeft?: DefaultUnits['paddingLeft'];
		paddingRight?: DefaultUnits['paddingRight'];
		paddingTop?: DefaultUnits['paddingTop'];
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
