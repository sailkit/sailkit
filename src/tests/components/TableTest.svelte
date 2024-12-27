<script lang="ts">
	import type { Properties } from 'csstype';
	import type { DefaultUnits } from '$lib/types.js';
	import { Html, Head, Body, Section, Table } from '$lib/index.js';

	interface Props {
		align?: 'left' | 'right' | 'center';
		border?: Properties['border'];
		cellPadding?: Properties['padding'];
		cellSpacing?: DefaultUnits['cellSpacing'];
		color?: Properties['color'];
		class?: string;
		containerBackgroundColor?: Properties['backgroundColor'];
		fontFamily?: Properties['fontFamily'];
		fontSize?: DefaultUnits['fontSize'];
		lineHeight?: DefaultUnits['lineHeight'];
		padding?: Properties['padding'];
		paddingBottom?: DefaultUnits['paddingBottom'];
		paddingLeft?: DefaultUnits['paddingLeft'];
		paddingRight?: DefaultUnits['paddingRight'];
		paddingTop?: DefaultUnits['paddingTop'];
		role?: 'none' | 'presentation';
		tableLayout?: 'auto' | 'fixed' | 'initial' | 'inherit';
		width?: DefaultUnits['width'] | `${number}%`;
	}

	const {
		align,
		border,
		cellPadding,
		cellSpacing,
		color,
		class: cssClass,
		containerBackgroundColor,
		fontFamily,
		fontSize,
		lineHeight,
		padding,
		paddingBottom,
		paddingLeft,
		paddingRight,
		paddingTop,
		role,
		tableLayout,
		width
	}: Props = $props();
</script>

<Html>
	<Head subject="Test Email" preview="Test Preview" />
	<Body>
		<Section>
			<Table
				{align}
				{border}
				{cellPadding}
				{cellSpacing}
				{color}
				{containerBackgroundColor}
				class={cssClass}
				{fontFamily}
				{fontSize}
				{lineHeight}
				{padding}
				{paddingBottom}
				{paddingLeft}
				{paddingRight}
				{paddingTop}
				{role}
				{tableLayout}
				{width}
			>
				<tr>
					<th>Header 1</th>
					<th>Header 2</th>
				</tr>
				<tr>
					<td>Value 1</td>
					<td>Value 2</td>
				</tr>
			</Table>
		</Section>
	</Body>
</Html>
