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
    userName: string;
  }

  const {
    firstName = 'John',
    companyName = 'SailKit',
    contactEmail = 'john@sailkit.com',
    userName = 'john'
  }: Props = $props();
</script>

<Html>
  <Head
    subject="Welcome"
    preview="Welcome to SailKit"
    styles={[
      {
        type: 'class',
        value: '.custom-container { margin-bottom: 20px; }',
        inline: false
      }
    ]}
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

    <Section
      backgroundColor="#009fe3"
      paddingBottom="20px"
      paddingTop="20px"
      borderRadius="10px 10px 0px 0px"
    >
      <Column verticalAlign="middle" width="100%">
        <Text
          align="left"
          color="#ffffff"
          fontSize="22px"
          fontFamily="open Sans Helvetica, Arial, sans-serif"
          paddingLeft="25px"
          paddingRight="25px"
        >
          <span style="color:#FEEB35">Dear {firstName}</span><br /><br />
          Welcome to {companyName}.
        </Text>

        <Text
          align="left"
          color="#ffffff"
          fontSize="15px"
          fontFamily="open Sans Helvetica, Arial, sans-serif"
          paddingLeft="25px"
          paddingRight="25px"
        >
          We're really excited you've decided to give us a try. In case you have any questions, feel
          free to reach out to us at {contactEmail}. You can login to your account with your
          username {userName}
        </Text>

        <Button
          align="left"
          fontSize="22px"
          fontWeight="bold"
          backgroundColor="#ffffff"
          borderRadius="10px"
          color="#1AA0E1"
          fontFamily="open Sans Helvetica, Arial, sans-serif"
        >
          Login
        </Button>

        <Text
          align="left"
          color="#ffffff"
          fontSize="15px"
          fontFamily="open Sans Helvetica, Arial, sans-serif"
          paddingLeft="25px"
          paddingRight="25px"
          class="custom-container"
        >
          Thanks, <br />
          The {companyName} Team
        </Text>
      </Column>
    </Section>

    <Section
      backgroundColor="#DA702C"
      paddingBottom="0px"
      paddingTop="0px"
      borderRadius="0px 0px 10px 10px"
    >
      <Column>
        <Social>
          <Social.Element name="facebook" href="https://www.facebook.com/SailKit" />
          <Social.Element name="twitter" href="https://twitter.com/SailKit" />
          <Social.Element name="linkedin" href="https://www.linkedin.com/company/SailKit" />
          <Social.Element name="github" href="https://github.com/SailKitjs/SailKit" />
        </Social>
      </Column>
    </Section>

    <Section>
      <Column>
        <Table>
          <tr style="border-bottom:1px solid #ecedee;text-align:left;padding:15px 0;">
            <th style="padding: 0 15px 0 0;">Email</th>
            <th style="padding: 0 15px;">Phone</th>
            <th style="padding: 0 0 0 15px;">Address</th>
          </tr>
          <tr>
            <td style="padding: 0 15px 0 0;">{contactEmail}</td>
            <td style="padding: 0 15px;">{`+1 555 555 555`}</td>
            <td style="padding: 0 0 0 15px;">{companyName}, 123 Main St, Anytown, USA</td>
          </tr>
        </Table>
      </Column>
    </Section>
  </Body>
</Html>
