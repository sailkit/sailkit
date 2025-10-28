<script lang="ts">
  import type { Properties } from 'csstype';
  import type { CustomProperties } from '$lib/types.js';
  import { Html, Head, Body, Section, Social } from '$lib/index.js';

  interface Props {
    align?: 'left' | 'right' | 'center';
    borderRadius?: Properties['borderRadius'];
    class?: string;
    color?: Properties['color'];
    containerBackgroundColor?: Properties['backgroundColor'];
    fontFamily?: Properties['fontFamily'];
    fontSize?: CustomProperties['fontSize'];
    fontStyle?: 'normal' | 'italic' | 'oblique';
    fontWeight?: number | 'normal' | 'bold';
    iconHeight?: CustomProperties['iconHeight'];
    iconPadding?: string | number;
    iconSize?: CustomProperties['iconSize'];
    innerPadding?: Properties['padding'];
    lineHeight?: CustomProperties['lineHeight'];
    mode?: 'horizontal' | 'vertical';
    padding?: Properties['padding'];
    paddingBottom?: CustomProperties['paddingBottom'];
    paddingLeft?: CustomProperties['paddingLeft'];
    paddingRight?: CustomProperties['paddingRight'];
    paddingTop?: CustomProperties['paddingTop'];
    textDecoration?: 'underline' | 'overline' | 'none';
    textPadding?: Properties['padding'];
  }

  const {
    align,
    borderRadius,
    class: cssClass,
    color,
    containerBackgroundColor,
    fontFamily,
    fontSize,
    fontStyle,
    fontWeight,
    iconHeight,
    iconPadding,
    iconSize,
    innerPadding,
    lineHeight,
    mode,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    textDecoration,
    textPadding
  }: Props = $props();
</script>

<Html>
  <Head subject="Test Email" preview="Test Preview" />
  <Body>
    <Section>
      <Social
        {align}
        {borderRadius}
        class={cssClass}
        {color}
        {containerBackgroundColor}
        {fontFamily}
        {fontSize}
        {fontStyle}
        {fontWeight}
        {iconHeight}
        {iconPadding}
        {iconSize}
        {innerPadding}
        {lineHeight}
        {mode}
        {padding}
        {paddingBottom}
        {paddingLeft}
        {paddingRight}
        {paddingTop}
        {textDecoration}
        {textPadding}
      >
        <Social.Element name="facebook" href="https://facebook.com/profile" />
        <Social.Element name="twitter" href="https://twitter.com/profile" />
        <Social.Element name="linkedin" href="https://linkedin.com/profile">
          Social Element Test 1
        </Social.Element>
        <Social.Element name="github" href="https://github.com/profile">
          Social Element Test 2
        </Social.Element>
        <Social.Element
          align="left"
          alt="Instagram"
          backgroundColor="#333"
          borderRadius="8px"
          class="custom-social-element"
          color="#fff"
          fontFamily="Ubuntu, Helvetica, Arial, sans-serif"
          fontSize="13px"
          fontStyle="normal"
          fontWeight="normal"
          href="https://instagram.com/profile"
          iconHeight="20px"
          iconPosition="right"
          iconSize="25px"
          lineHeight="22px"
          name="instagram"
          padding="0px"
          paddingBottom="0px"
          paddingLeft="0px"
          paddingRight="0px"
          paddingTop="0px"
          rel="nofollow"
          src="https://example.com/image.jpg"
          srcset="image-2x.jpg 2x, image-3x.jpg 3x"
          target="_blank"
          textDecoration="underline"
          title="Instagram"
          verticalAlign="middle"
        />
        <Social.Element
          name="example"
          href="https://example.com"
          src="/src/lib/assets/local-icon.png"
          alt="Local Icon"
        >
          Local Icon Test
        </Social.Element>
      </Social>
    </Section>
  </Body>
</Html>
