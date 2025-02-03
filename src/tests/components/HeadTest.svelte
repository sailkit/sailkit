<script lang="ts">
	import type { DefaultUnits } from '$lib/types.js';
	import { Html, Head, Body, Raw } from '$lib/index.js';

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
				| 'container';
			value: string;
			inline?: boolean;
		}[];
	}

	const { subject, preview, fonts, breakpoint, styles }: Props = $props();
</script>

<Html>
	<Head {subject} {preview} {fonts} {breakpoint} {styles}>
		<Raw>
			<meta name="x-apple-disable-message-reformatting" />
			<meta name="color-scheme" content="light dark" />
			<meta name="supported-color-schemes" content="light dark" />
		</Raw>
	</Head>
	<Body></Body>
</Html>
