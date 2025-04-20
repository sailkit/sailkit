<script lang="ts">
  import type { Properties } from 'csstype';
  import type { CustomProperties } from '$lib/types.js';
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
    fontSize?: CustomProperties['fontSize'];
    fontStyle?: 'normal' | 'italic' | 'oblique';
    fontWeight?: number | 'normal' | 'bold';
    height?: CustomProperties['height'];
    href?: string;
    innerPadding?: Properties['padding'];
    letterSpacing?: CustomProperties['letterSpacing'];
    lineHeight?: CustomProperties['lineHeight'];
    padding?: Properties['padding'];
    paddingBottom?: CustomProperties['paddingBottom'];
    paddingLeft?: CustomProperties['paddingLeft'];
    paddingRight?: CustomProperties['paddingRight'];
    paddingTop?: CustomProperties['paddingTop'];
    rel?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    textAlign?: 'left' | 'center' | 'right';
    textDecoration?: 'underline' | 'overline' | 'none';
    textTransform?: 'capitalize' | 'uppercase' | 'lowercase';
    title?: string;
    verticalAlign?: 'top' | 'middle' | 'bottom';
    width?: CustomProperties['width'];
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
