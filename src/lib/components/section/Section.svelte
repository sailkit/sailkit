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
		/** Background color of the section */
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
		/** Content direction within the section (default: ltr) */
		direction?: 'ltr' | 'rtl';
		/** Whether section spans full width */
		fullWidth?: string;
		/** Padding around the section (default: 20px 0) */
		padding?: Properties['padding'];
		/** Bottom padding */
		paddingBottom?: DefaultUnits['paddingBottom'];
		/** Left padding */
		paddingLeft?: DefaultUnits['paddingLeft'];
		/** Right padding */
		paddingRight?: DefaultUnits['paddingRight'];
		/** Top padding */
		paddingTop?: DefaultUnits['paddingTop'];
		/** Text alignment within section (default: center) */
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
