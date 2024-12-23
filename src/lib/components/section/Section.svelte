<script lang="ts">
	/**
	 * @component Section
	 * @description A structural component that defines a horizontal row of content.
	 * Sections are used to create the main layout structure of the email and can
	 * contain Columns or Groups. This component includes a nested Group component
	 * accessible as Section.Group.
	 *
	 * @example
	 * Basic usage:
	 * ```svelte
	 * <Section padding="20px">
	 *   <Column>Content</Column>
	 * </Section>
	 * ```
	 *
	 * With background and groups:
	 * ```svelte
	 * <Section
	 *   backgroundColor="#f6f6f6"
	 *   backgroundUrl="https://example.com/bg.jpg"
	 *   padding="40px 20px"
	 * >
	 *   <Section.Group>
	 *     <Column width="50%">Left content</Column>
	 *     <Column width="50%">Right content</Column>
	 *   </Section.Group>
	 * </Section>
	 * ```
	 *
	 * @typedef {Object} Props
	 * @property {Snippet} [children] - The content to be rendered within the section. Can include other SailKit components or regular HTML content.
	 * @property {string} [backgroundColor] - Background color of the section
	 * @property {string} [backgroundPosition="top center"] - Position of the background image
	 * @property {string} [backgroundPositionX] - Horizontal position of the background image
	 * @property {string} [backgroundPositionY] - Vertical position of the background image
	 * @property {string} [backgroundRepeat="repeat"] - How the background image should repeat
	 * @property {string} [backgroundSize="auto"] - Size of the background image
	 * @property {string} [backgroundUrl] - URL of the background image
	 * @property {string} [border="none"] - CSS border shorthand for all sides
	 * @property {string} [borderBottom] - Bottom border style
	 * @property {string} [borderLeft] - Left border style
	 * @property {string} [borderRadius] - Border radius for all corners
	 * @property {string} [borderRight] - Right border style
	 * @property {string} [borderTop] - Top border style
	 * @property {string} [class] - CSS class names to apply, defined in the Head component's styles
	 * @property {'ltr'|'rtl'} [direction="ltr"] - Content direction within the section
	 * @property {string} [fullWidth] - Whether the section should be full-width
	 * @property {string} [padding="20px 0"] - Padding shorthand for all sides
	 * @property {string} [paddingBottom] - Bottom padding
	 * @property {string} [paddingLeft] - Left padding
	 * @property {string} [paddingRight] - Right padding
	 * @property {string} [paddingTop] - Top padding
	 * @property {'left'|'center'|'right'} [textAlign] - Text alignment within the section
	 *
	 * @remarks
	 * Sections are fundamental building blocks for email layouts. They can contain
	 * either Columns or Groups, but not both in the same Section. Use Section.Group
	 * when you need to prevent columns from stacking on mobile devices.
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
		direction?: 'ltr' | 'rtl';
		fullWidth?: string;
		padding?: Properties['padding'];
		paddingBottom?: DefaultUnits['paddingBottom'];
		paddingLeft?: DefaultUnits['paddingLeft'];
		paddingRight?: DefaultUnits['paddingRight'];
		paddingTop?: DefaultUnits['paddingTop'];
		textAlign?: 'left' | 'center' | 'right';
	}

	const {
		children,
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
		class: cssClass,
		direction,
		fullWidth,
		padding,
		paddingBottom,
		paddingLeft,
		paddingRight,
		paddingTop,
		textAlign
	}: Props = $props();

	const mjmlSectionTag = 'mj-section';

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
		direction && `direction="${direction}"`,
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

{@html `<${mjmlSectionTag} ${attributes}>`}
{@render children?.()}
{@html `</${mjmlSectionTag}>`}
