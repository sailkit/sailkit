<script lang="ts">
	import { Html, Head, Body } from '$lib/index.js';

	interface Props {
		dir?: 'auto' | 'ltr' | 'rtl';
		language?: string;
		owa?: boolean;
	}

	const { dir, language, owa }: Props = $props();
</script>

<Html {dir} {language} {owa}>
	<Head subject="Test Email" preview="Test Preview" />
	<Body></Body>
</Html>
