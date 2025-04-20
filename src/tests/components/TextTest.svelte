<script lang="ts">
  import type { Properties } from 'csstype';
  import type { CustomProperties } from '$lib/types.js';
  import { Html, Head, Body, Section, Text } from '$lib/index.js';

  interface Props {
    align?: 'left' | 'right' | 'center' | 'justify';
    class?: string;
    color?: Properties['color'];
    containerBackgroundColor?: Properties['backgroundColor'];
    fontFamily?: Properties['fontFamily'];
    fontSize?: CustomProperties['fontSize'];
    fontStyle?: 'normal' | 'italic' | 'oblique';
    fontWeight?: number | 'normal' | 'bold';
    height?: CustomProperties['height'];
    letterSpacing?: CustomProperties['letterSpacing'];
    lineHeight?: CustomProperties['lineHeight'];
    padding?: Properties['padding'];
    paddingBottom?: CustomProperties['paddingBottom'];
    paddingLeft?: CustomProperties['paddingLeft'];
    paddingRight?: CustomProperties['paddingRight'];
    paddingTop?: CustomProperties['paddingTop'];
    textDecoration?: 'underline' | 'overline' | 'line-through' | 'none';
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
  }

  const {
    align = 'left',
    class: cssClass,
    color = '#000000',
    containerBackgroundColor,
    fontFamily,
    fontSize = '13px',
    fontStyle,
    fontWeight,
    height,
    letterSpacing,
    lineHeight,
    padding = '10px 25px',
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    textDecoration,
    textTransform
  }: Props = $props();
</script>

<Html>
  <Head subject="Test Email" preview="Test Preview" />
  <Body>
    <Section>
      <Text
        {align}
        class={cssClass}
        {color}
        {containerBackgroundColor}
        {fontFamily}
        {fontSize}
        {fontStyle}
        {fontWeight}
        {height}
        {letterSpacing}
        {lineHeight}
        {padding}
        {paddingBottom}
        {paddingLeft}
        {paddingRight}
        {paddingTop}
        {textDecoration}
        {textTransform}
      >
        <h1>Hello World</h1>
        <p>Paragraph</p>
      </Text>
    </Section>
  </Body>
</Html>
