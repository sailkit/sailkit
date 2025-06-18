<script lang="ts">
  import {
    Html,
    Head,
    Body,
    Section,
    Column,
    Image,
    Text,
    Button,
    Social,
    Table
  } from '$lib/index.js';

  interface Props {
    firstName: string;
    companyName: string;
    contactEmail: string;
  }

  const {
    firstName = 'John',
    companyName = 'SailKit',
    contactEmail = 'john@sailkit.com'
  }: Props = $props();
</script>

<Html>
  <Head
    subject="Welcome"
    preview="Welcome to SailKit"
    styles={{
      custom: ['.custom-container { margin-bottom: 20px; }']
    }}
  />
  <Body backgroundColor="#ffffff">
    <Section backgroundColor="#ffffff" paddingBottom="0px" paddingTop="0px">
      <Column verticalAlign="top" width="100%">
        <Image
          src="https://img.freepik.com/premium-vector/beautiful-professional-cartoon-character-design-vector-illustration_1253044-38474.jpg?semt=ais_hybrid"
          alt=""
          align="center"
          border="none"
          width="300px"
          paddingLeft="0px"
          paddingRight="0px"
          paddingBottom="0px"
          paddingTop="0px"
        />
      </Column>
    </Section>

    <Section backgroundColor="#DA702C" paddingBottom="0px" paddingTop="0px" borderRadius="10px">
      <Column verticalAlign="top" width="100%">
        <Text
          align="left"
          color="#ffffff"
          fontSize="45px"
          fontWeight="bold"
          fontFamily="open Sans Helvetica, Arial, sans-serif"
          paddingLeft="25px"
          paddingRight="25px"
          paddingBottom="30px"
          paddingTop="50px"
        >
          Welcome aboard
        </Text>
      </Column>
    </Section>

    <Section padding="0px">
      <Column>
        <Column.Spacer />
      </Column>
    </Section>

    <Section padding="0 20px">
      <Column>
        <Text align="left" color="#000000" fontSize="16px" lineHeight="24px">
          Hello {firstName},
        </Text>
        <Text>
          Welcome to {companyName}, your new platform for building amazing email templates with
          Svelte and MJML. We're thrilled to have you join our community!
        </Text>
        <Text>
          This is a sample email template built with {companyName}. Feel free to customize it as
          needed.
        </Text>
      </Column>
    </Section>

    <Section padding="20px">
      <Column>
        <Button href="https://example.com" backgroundColor="#DA702C" color="#ffffff">
          Get Started
        </Button>
      </Column>
    </Section>

    <Section padding="20px">
      <Column>
        <Table>
          <tr>
            <th>Feature</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>Svelte Integration</td>
            <td>Available</td>
          </tr>
          <tr>
            <td>MJML Compatibility</td>
            <td>Available</td>
          </tr>
        </Table>
      </Column>
    </Section>

    <Section padding="20px">
      <Column>
        <Text>Connect with us on social media:</Text>
        <Social iconSize="20px" mode="horizontal">
          <Social.Element name="facebook" href="https://facebook.com" />
          <Social.Element name="twitter" href="https://twitter.com" />
          <Social.Element name="linkedin" href="https://linkedin.com" />
        </Social>
      </Column>
    </Section>

    <Section padding="20px">
      <Column>
        <Text align="center" fontSize="12px" color="#666666">
          You received this email because you signed up for {companyName}. If you no longer wish to
          receive these emails, please unsubscribe here.
        </Text>
        <Text align="center" fontSize="12px" color="#666666">
          Contact us at <a href="mailto:{contactEmail}">{contactEmail}</a>
        </Text>
        <Text align="center" fontSize="12px" color="#666666">
          @{new Date().getFullYear()}
          {companyName}. All rights reserved.
        </Text>
      </Column>
    </Section>
  </Body>
</Html>
