<script lang="ts">
	import { Html, Head, Body, Section, Raw } from '$lib/index.js';
</script>

<Html>
	<Head subject="Test Email" preview="Test Preview" />
	<Body>
		<Section>
			<Raw>
				<h1>Hello World</h1>
				<span>
					<p>Paragraph</p>
				</span>
			</Raw>
		</Section>
	</Body>
</Html>
