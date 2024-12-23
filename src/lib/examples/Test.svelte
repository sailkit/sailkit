<script lang="ts">
	import { Html, Head, Body, Section, Column, Text } from '$lib/index.js';

	export interface TestProps {
		name: string;
	}

	let { name }: TestProps = $props();
</script>

<Html language="en" dir="ltr">
	<Head
		subject="Exmample Email"
		fonts={[{ name: 'Oswald', href: 'https://fonts.googleapis.com/css?family=Oswald' }]}
		styles={[
			{
				type: 'global',
				value: 'font-family="Oswald"'
			}
		]}
	/>
	<Body>
		<Section>
			<Column>
				<Text fontFamily="Arial" color="#F45E43">
					<h1>Hello, {name}!</h1>
				</Text>
			</Column>
			<Column>
				<Text fontFamily="Helvetica" fontStyle="italic">
					<p>Paragraph</p>
				</Text>
				<Text>
					<p style="font-family:Comic Sans Ms">Another paragraph</p>
				</Text>
			</Column>
		</Section>
		<Section>
			<Section.Group>
				<Column>
					<Text>
						<p>Paragraph</p>
					</Text>
					<Column.Divider />
					<Text>
						<p>Paragraph</p>
					</Text>
				</Column>
				<Column>
					<Text>
						<p>Paragraph</p>
					</Text>
				</Column>
			</Section.Group>
		</Section>
	</Body>
</Html>
