<script lang="ts">
	import type { Properties } from 'csstype';
	import type { DefaultUnits } from '$lib/types.js';
	import { Html, Head, Body } from '$lib/index.js';

	interface Props {
		backgroundColor?: Properties['backgroundColor'];
		width?: DefaultUnits['width'];
		class?: string;
	}

	const { backgroundColor, width, class: cssClass }: Props = $props();
</script>

<Html>
	<Head subject="Test Email" preview="Test Preview" />
	<Body {backgroundColor} {width} class={cssClass} />
</Html>
