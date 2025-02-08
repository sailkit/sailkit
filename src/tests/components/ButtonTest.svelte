<script lang="ts">
  import type { Properties } from 'csstype';
  import type { DefaultUnits } from '$lib/types.js';
  import { Html, Head, Body, Section, Button } from '$lib/index.js';

  interface Props {
    align?: 'left' | 'center' | 'right';
    backgroundColor?: Properties['backgroundColor'];
    border?: Properties['border'];
    borderBottom?: Properties['borderBottom'];
    borderLeft?: Properties['borderLeft'];
    borderRadius?: Properties['borderRadius'];
    borderRight?: Properties['borderRight'];
    borderTop?: Properties['borderTop'];
    class?: string;
    color?: Properties['color'];
    containerBackgroundColor?: Properties['backgroundColor'];
    fontFamily?: Properties['fontFamily'];
    fontSize?: DefaultUnits['fontSize'];
    fontStyle?: 'normal' | 'italic' | 'oblique';
    fontWeight?: number | 'normal' | 'bold';
    height?: DefaultUnits['height'];
    href?: string;
    innerPadding?: Properties['padding'];
    letterSpacing?: DefaultUnits['letterSpacing'];
    lineHeight?: DefaultUnits['lineHeight'];
    padding?: Properties['padding'];
    paddingBottom?: DefaultUnits['paddingBottom'];
    paddingLeft?: DefaultUnits['paddingLeft'];
    paddingRight?: DefaultUnits['paddingRight'];
    paddingTop?: DefaultUnits['paddingTop'];
    rel?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    textAlign?: 'left' | 'center' | 'right';
    textDecoration?: 'underline' | 'overline' | 'none';
    textTransform?: 'capitalize' | 'uppercase' | 'lowercase';
    title?: string;
    verticalAlign?: 'top' | 'middle' | 'bottom';
    width?: DefaultUnits['width'];
  }

  const {
    align,
    backgroundColor,
    border,
    borderBottom,
    borderLeft,
    borderRadius,
    borderRight,
    borderTop,
    class: cssClass,
    color,
    containerBackgroundColor,
    fontFamily,
    fontSize,
    fontStyle,
    fontWeight,
    height,
    href,
    innerPadding,
    letterSpacing,
    lineHeight,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    rel,
    target,
    textAlign,
    textDecoration,
    textTransform,
    title,
    verticalAlign,
    width
  }: Props = $props();
</script>

<Html>
  <Head subject="Test Email" preview="Test Preview" />
  <Body>
    <Section>
      <Button
        {align}
        {backgroundColor}
        {border}
        {borderBottom}
        {borderLeft}
        {borderRadius}
        {borderRight}
        {borderTop}
        class={cssClass}
        {color}
        {containerBackgroundColor}
        {fontFamily}
        {fontSize}
        {fontStyle}
        {fontWeight}
        {height}
        {href}
        {innerPadding}
        {letterSpacing}
        {lineHeight}
        {padding}
        {paddingBottom}
        {paddingLeft}
        {paddingRight}
        {paddingTop}
        {rel}
        {target}
        {textAlign}
        {textDecoration}
        {textTransform}
        {title}
        {verticalAlign}
        {width}
      >
        Button Test
      </Button>
    </Section>
  </Body>
</Html>
