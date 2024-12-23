<script lang="ts">
	/**
	 * @component Section.Group
	 * @description A component that prevents its child columns from stacking on mobile devices.
	 * Must be used within a Section component and contains Column components with percentage-based widths.
	 *
	 * @example
	 * ```svelte
	 * <Section>
	 *   <Section.Group>
	 *     <Column width="50%">First column</Column>
	 *     <Column width="50%">Second column</Column>
	 *   </Section.Group>
	 * </Section>
	 * ```
	 *
	 * With additional styling:
	 * ```svelte
	 * <Section>
	 *   <Section.Group
	 *     backgroundColor="#f6f6f6"
	 *     verticalAlign="middle"
	 *     direction="ltr"
	 *   >
	 *     <Column width="33.33%">First</Column>
	 *     <Column width="33.33%">Second</Column>
	 *     <Column width="33.33%">Third</Column>
	 *   </Section.Group>
	 * </Section>
	 * ```
	 *
	 * @typedef {Object} Props
	 * @property {Snippet} [children] - The Column components to be rendered within the group
	 * @property {string} [backgroundColor] - Background color of the group
	 * @property {string} [class] - CSS class names to apply, defined in the Head component's styles
	 * @property {'ltr'|'rtl'} [direction="ltr"] - Content direction within the group
	 * @property {'middle'|'top'|'bottom'} [verticalAlign="top"] - Vertical alignment of columns
	 * @property {string} [width] - Width of the group, must be a percentage value
	 *
	 * @remarks
	 * Important usage notes:
	 * - Column components inside a group must use percentage-based widths
	 * - Can be used alongside regular columns in a section
	 * - For iOS9 compatibility, remove blank spaces between columns in the group
	 *   to prevent unwanted stacking
	 * - The width property defaults to an equal distribution of available space
	 *   among non-raw elements in the section
	 */

	import type { Snippet } from 'svelte';
	import type { DefaultUnits } from '$lib/types.js';

	interface Props {
		children?: Snippet;
		backgroundColor?: string;
		class?: string;
		direction?: 'ltr' | 'rtl';
		verticalAlign?: 'middle' | 'top' | 'bottom';
		width?: DefaultUnits['width'] | `${number}%`;
	}

	const {
		children,
		backgroundColor,
		class: cssClass,
		direction,
		verticalAlign,
		width // Default is calculated: (100 / number of non-raw elements in section)%
	}: Props = $props();

	const mjmlGroupTag = 'mj-group';

	const attributes = [
		backgroundColor && `background-color="${backgroundColor}"`,
		cssClass && `css-class="${cssClass}"`,
		direction && `direction="${direction}"`,
		verticalAlign && `vertical-align="${verticalAlign}"`,
		width && `width="${width}"`
	]
		.filter(Boolean)
		.join(' ');
</script>

{@html `<${mjmlGroupTag} ${attributes}>`}
{@render children?.()}
{@html `</${mjmlGroupTag}>`}
