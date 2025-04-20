<script lang="ts">
  import type { Properties } from 'csstype';
  import type { CustomProperties } from '$lib/types.js';
  import { Html, Head, Body, Section, Image } from '$lib/index.js';

  interface Props {
    align?: 'left' | 'center' | 'right';
    alt?: string;
    border?: Properties['border'];
    borderBottom?: Properties['borderBottom'];
    borderLeft?: Properties['borderLeft'];
    borderRadius?: Properties['borderRadius'];
    borderRight?: Properties['borderRight'];
    borderTop?: Properties['borderTop'];
    class?: string;
    containerBackgroundColor?: Properties['backgroundColor'];
    fluidOnMobile?: 'true';
    height?: CustomProperties['height'] | 'auto';
    href?: string;
    name?: string;
    padding?: Properties['padding'];
    paddingBottom?: CustomProperties['paddingBottom'];
    paddingLeft?: CustomProperties['paddingLeft'];
    paddingRight?: CustomProperties['paddingRight'];
    paddingTop?: CustomProperties['paddingTop'];
    rel?: string;
    src?: string;
    srcset?: string;
    target?: string;
    title?: string;
    usemap?: string;
    width?: CustomProperties['width'];
  }

  const {
    src,
    align,
    alt,
    border,
    borderTop,
    borderBottom,
    borderLeft,
    borderRight,
    borderRadius,
    class: cssClass,
    containerBackgroundColor,
    fluidOnMobile,
    height,
    href,
    name,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    rel,
    srcset,
    target,
    title,
    usemap,
    width
  }: Props = $props();
</script>

<Html>
  <Head subject="Test Email" preview="Test Preview" />
  <Body>
    <Section>
      <Image
        {src}
        {align}
        {alt}
        {border}
        {borderTop}
        {borderBottom}
        {borderLeft}
        {borderRight}
        {borderRadius}
        class={cssClass}
        {containerBackgroundColor}
        {fluidOnMobile}
        {height}
        {href}
        {name}
        {padding}
        {paddingTop}
        {paddingBottom}
        {paddingLeft}
        {paddingRight}
        {rel}
        {srcset}
        {target}
        {title}
        {usemap}
        {width}
      />
    </Section>
  </Body>
</Html>
