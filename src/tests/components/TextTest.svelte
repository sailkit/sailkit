<script lang="ts">
  import type { Properties } from 'csstype';
  import type { DefaultUnits } from '$lib/types.js';
  import { Html, Head, Body, Section, Text } from '$lib/index.js';

  interface Props {
    align?: 'left' | 'right' | 'center' | 'justify';
    class?: string;
    color?: Properties['color'];
    containerBackgroundColor?: Properties['backgroundColor'];
    fontFamily?: Properties['fontFamily'];
    fontSize?: DefaultUnits['fontSize'];
    fontStyle?: 'normal' | 'italic' | 'oblique';
    fontWeight?: number | 'normal' | 'bold';
    height?: DefaultUnits['height'];
    letterSpacing?: DefaultUnits['letterSpacing'];
    lineHeight?: DefaultUnits['lineHeight'];
    padding?: Properties['padding'];
    paddingBottom?: DefaultUnits['paddingBottom'];
    paddingLeft?: DefaultUnits['paddingLeft'];
    paddingRight?: DefaultUnits['paddingRight'];
    paddingTop?: DefaultUnits['paddingTop'];
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
