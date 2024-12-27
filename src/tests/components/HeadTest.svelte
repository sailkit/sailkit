<script lang="ts">
	import type { DefaultUnits } from '$lib/types.js';

	import { Html, Head, Body } from '$lib/index.js';

	interface Props {
		subject: string;
		preview?: string;
		fonts?: {
			name: string;
			href: string;
		}[];
		breakpoint?: DefaultUnits['breakpoint'];
		styles?: {
			type: 'global' | 'component' | 'class';
			component?:
				| 'body'
				| 'button'
				| 'column'
				| 'divider'
				| 'hero'
				| 'image'
				| 'image'
				| 'section'
				| 'social-element'
				| 'social'
				| 'table'
				| 'text'
				| 'wrapper';
			value: string;
			inline?: boolean;
		}[];
	}

	const { subject, preview, fonts, breakpoint, styles }: Props = $props();
</script>

<Html>
	<Head {subject} {preview} {fonts} {breakpoint} {styles} />
	<Body></Body>
</Html>
