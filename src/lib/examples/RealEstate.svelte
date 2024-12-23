<script lang="ts">
	import { Html, Head, Body, Section, Column, Image, Text, Button } from '$lib/index.js';
</script>

<Html>
	<Head
		subject="Say hello to RealEstate"
		fonts={[
			{ name: 'Alice', href: 'https://fonts.googleapis.com/css?family=Alice' },
			{ name: 'Roboto', href: 'https://fonts.googleapis.com/css?family=Roboto:400,700' }
		]}
		styles={[
			{
				type: 'class',
				value: '.custom-class { text-decoration: underline }',
				inline: true
			}
		]}
	/>
	<Body backgroundColor="#EAE8E5">
		<Section padding="20px 0 0 0">
			<Column>
				<Image
					src="http://nimus.de/share/tpl-realestate/box-head.png"
					alt=""
					align="center"
					border="none"
					padding="0px"
				/>
			</Column>
		</Section>
		<Section paddingTop="40px" backgroundColor="#FFFFFF">
			<Column width="570px">
				<Text
					align="left"
					padding="0 20px"
					color="#1D83A8"
					fontSize="36px"
					lineHeight="40px"
					fontFamily="Alice, Helvetica, Arial, sans-serif"
				>
					Real Estate
				</Text>
				<Column.Divider
					align="left"
					width="20px"
					padding="0 20px"
					borderWidth="2px"
					borderColor="#000000"
				/>
			</Column>
		</Section>
		<Section backgroundColor="#FFFFFF">
			<Column width="300px">
				<Text align="left" padding="0 20px 30px 20px" class="custom-class">
					<strong>Aliquam lorem ante, dapibus in hasellus viverra nulla</strong> ut metus varius laoreet.
					Quisque rutrum lorem dellorus. Aenean imperdiet.
				</Text>
			</Column>
			<Column width="260px">
				<Image
					src="http://nimus.de/share/tpl-realestate/icon-1.png"
					alt=""
					paddingBottom="30px"
					width="260px"
					align="center"
					border="none"
				/>
			</Column>
		</Section>
		<Section
			backgroundUrl="http://nimus.de/share/tpl-realestate/img-1.png"
			textAlign="center"
			backgroundSize="cover"
			padding="30px"
			backgroundRepeat="no-repeat"
		>
			<Column verticalAlign="middle" width="60%">
				<Text
					align="center"
					padding="40px 30px"
					color="#FFFFFF"
					fontSize="42px"
					lineHeight="48px"
					fontFamily="Alice, Helvetica, Arial, sans-serif"
				>
					Villa Semperin
				</Text>
			</Column>
			<Column verticalAlign="middle" width="40%" backgroundColor="#FFFFFF">
				<Image
					src="http://nimus.de/share/tpl-realestate/box-top.png"
					width="220px"
					alt=""
					align="center"
					border="none"
				/>
				<Text
					align="center"
					padding="20px 20px 0 20px"
					color="#1D83A8"
					fontSize="26px"
					lineHeight="30px"
					fontFamily="Alice, Helvetica, Arial, sans-serif"
				>
					– first offer –
				</Text>
				<Text align="center" padding="10px 20px" fontSize="22px" lineHeight="30px">340,000 $</Text>
				<Text align="center" padding="0 20px"
					>Nascetur ridiculus mus. Donec quam felis, ultricies nec</Text
				>
				<Button
					backgroundColor="#F44E3C"
					color="white"
					padding="20px 20px 30px 20px"
					borderRadius="20px"
				>
					view details
				</Button>
			</Column>
		</Section>
		<Section padding="30px" backgroundColor="#FFFFFF">
			<Column width="60%">
				<Text
					align="center"
					paddingBottom="20px"
					fontSize="26px"
					lineHeight="30px"
					fontFamily="Alice, Helvetica, Arial, sans-serif">Lorem Ipsum</Text
				>
				<Text align="center" padding="0 40px">
					Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
					ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Lorem Ipsum
				</Text>
				<Image
					src="http://nimus.de/share/tpl-realestate/icon-2.png"
					alt=""
					padding="30px 0 10px 0"
					width="50px"
					align="center"
					border="none"
				/>
			</Column>
			<Column width="40%" backgroundColor="#FFFFFF">
				<Image
					src="http://nimus.de/share/tpl-realestate/img-2.png"
					width="216px"
					alt=""
					align="center"
					border="none"
				/>
			</Column>
		</Section>
		<Section padding="20px" backgroundColor="#FFFFFF">
			<Column width="100%">
				<Image
					src="http://nimus.de/share/tpl-realestate/symbol-1.png"
					alt=""
					width="292px"
					align="left"
					border="none"
				/>
			</Column>
		</Section>
		<Section padding="0 20px" backgroundColor="#FFFFFF">
			<Column>
				<Text
					align="center"
					fontSize="26px"
					lineHeight="30px"
					fontFamily="Alice, Helvetica, Arial, sans-serif"
				>
					Lorem Ipsum
				</Text>
				<Column.Divider width="20px" padding="20px 0" borderWidth="2px" borderColor="#000000" />
				<Text align="center" padding="0 40px"
					>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
					ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Lorem Ipsum
				</Text>
				<Button
					backgroundColor="#F44E3C"
					color="white"
					padding="20px 20px 10px 20px"
					borderRadius="20px"
				>
					Call to action
				</Button>
			</Column>
		</Section>
		<Section padding="20px" backgroundColor="#FFFFFF">
			<Column width="100%">
				<Image
					src="http://nimus.de/share/tpl-realestate/symbol-2.png"
					alt=""
					width="213px"
					align="right"
					border="none"
				/>
			</Column>
		</Section>
		<Section padding="0 30px 30px" backgroundColor="#FFFFFF">
			<Column width="55%">
				<Image
					src="http://nimus.de/share/tpl-realestate/img-3.png"
					width="280px"
					paddingBottom="20px"
					alt=""
					align="center"
					border="none"
				/>
			</Column>
			<Column width="45%" backgroundColor="#FFFFFF">
				<Text
					align="center"
					paddingBottom="20px"
					fontSize="26px"
					lineHeight="30px"
					fontFamily="Alice, Helvetica, Arial, sans-serif"
				>
					Lorem Ipsum
				</Text>
				<Text align="center" padding="0 40px">
					Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
				</Text>
				<Image
					src="http://nimus.de/share/tpl-realestate/icon-3.png"
					alt=""
					padding="30px 0 10px 0"
					width="50px"
					align="center"
					border="none"
				/>
			</Column>
		</Section>
		<Section padding="0 20px" backgroundColor="#FFFFFF">
			<Column>
				<Text
					align="center"
					fontSize="26px"
					lineHeight="30px"
					fontFamily="Alice, Helvetica, Arial, sans-serif"
					>' Nullam dictum felis eu pede
				</Text>
				<Column.Divider width="20px" padding="20px 0" borderWidth="2px" borderColor="#000000" />
			</Column>
		</Section>
		<Section padding="0 20px 30px" backgroundColor="#FFFFFF">
			<Column width="33%">
				<Text align="left" padding="0 15px 15px">
					<strong>Aliquam lorem ante,</strong> dapibus in, viverra quis, feugiat a, tellus. Phasellus
					viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Lorem Ipsum
				</Text>
			</Column>
			<Column width="34%">
				<Text align="left" padding="0 15px 15px">
					<strong>Phasellus viverra null aliquam lorem ante</strong>, dapibus in, viverra quis,
					feugiat a, tellus ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Lorem Ipsum
				</Text>
			</Column>
			<Column width="33%">
				<Text align="left" padding="0 15px 15px">
					<strong>Quisque rutrum.</strong> Aenean imperdiet viverra nulla ut metus varius laoreet. Aliquam
					lorem ante, dapibus in, viverra quis, feugiat a, tellus. Lorem Ipsum
				</Text>
			</Column>
		</Section>
		<Section
			backgroundUrl="http://nimus.de/share/tpl-realestate/img-4.png"
			textAlign="center"
			backgroundSize="cover"
			padding="30px"
			backgroundRepeat="no-repeat"
		>
			<Column verticalAlign="middle" width="40%" backgroundColor="#FFFFFF">
				<Image
					src="http://nimus.de/share/tpl-realestate/box-top.png"
					width="220px"
					alt=""
					align="center"
					border="none"
				/>
				<Text
					align="center"
					padding="20px 20px 0 20px"
					color="#1D83A8"
					fontSize="26px"
					lineHeight="30px"
					fontFamily="Alice, Helvetica, Arial, sans-serif"
				>
					– 2. offer –
				</Text>
				<Text align="center" padding="10px 20px" fontSize="22px" lineHeight="30px">198,700 $</Text>
				<Text align="center" padding="0 20px">
					Donec quam felis, ultricies Nascetur ridiculus mus.
				</Text>
				<Button
					backgroundColor="#F44E3C"
					color="white"
					padding="20px 20px 30px 20px"
					borderRadius="20px"
				>
					view details
				</Button>
			</Column>
			<Column verticalAlign="middle" width="60%">
				<Text
					align="center"
					padding="40px 30px"
					color="#FFFFFF"
					fontSize="42px"
					lineHeight="48px"
					fontFamily="Alice, Helvetica, Arial, sans-serif"
				>
					Window House 23
				</Text>
			</Column>
		</Section>
		<Section padding="40px 20px" backgroundColor="#FFFFFF">
			<Column width="100%">
				<Image
					src="http://nimus.de/share/tpl-realestate/icon-1.png"
					alt=""
					width="130px"
					align="center"
					border="none"
				/>
			</Column>
		</Section>
		<Section padding="10px 0 20px 0">
			<Column>
				<Text align="center" color="#9B9B9B" fontSize="11px">
					<a href="/unsubsribe" style="color: #9B9B9B;">Unsubscribe</a> from this newsletter<br
					/>Icon made by Freepik from
					<a
						href="http://www.flaticon.com"
						target="_blank"
						style="color: #9B9B9B; text-decoration: none;">www.flaticon.com</a
					><br />
					<a href="http://svenhaustein.de" style="color: #9B9B9B; text-decoration:none;"
						>Made by svenhaustein.de</a
					>
				</Text>
			</Column>
		</Section>
	</Body>
</Html>
