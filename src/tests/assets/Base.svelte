<script lang="ts">
	import { Html, Head, Body, Section, Column, Text } from '$lib/index.js';

	export interface TestProps {
		text: string;
	}

	let { text }: TestProps = $props();
</script>

<Html language="en" dir="ltr">
	<Head subject="Exmample Email" preview="Test Preview" />
	<Body>
		<Section>
			<Column>
				<Text color="#F45E43">
					<div>
						<h1>Hello World</h1>
						<p>{text}</p>
					</div>
				</Text>
			</Column>
		</Section>

		<Section>
			<Section.Group>
				<Column width="50%">First</Column>
				<Column width="50%">Second</Column>
			</Section.Group>
		</Section>
	</Body>
</Html>
