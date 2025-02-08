<script lang="ts">
  import type { Properties } from 'csstype';
  import type { DefaultUnits } from '$lib/types.js';
  import { Html, Head, Body, Section, Container } from '$lib/index.js';

  interface Props {
    backgroundColor?: Properties['backgroundColor'];
    backgroundPosition?: Properties['backgroundPosition'];
    backgroundPositionX?: Properties['backgroundPositionX'];
    backgroundPositionY?: Properties['backgroundPositionY'];
    backgroundRepeat?: Properties['backgroundRepeat'];
    backgroundSize?: DefaultUnits['backgroundSize'];
    backgroundUrl?: string;
    border?: Properties['border'];
    borderBottom?: Properties['borderBottom'];
    borderLeft?: Properties['borderLeft'];
    borderRadius?: Properties['borderRadius'];
    borderRight?: Properties['borderRight'];
    borderTop?: Properties['borderTop'];
    class?: string;
    fullWidth?: string;
    padding?: Properties['padding'];
    paddingBottom?: DefaultUnits['paddingBottom'];
    paddingLeft?: DefaultUnits['paddingLeft'];
    paddingRight?: DefaultUnits['paddingRight'];
    paddingTop?: DefaultUnits['paddingTop'];
    textAlign?: 'left' | 'center' | 'right';
  }

  const {
    backgroundColor,
    backgroundPosition,
    backgroundPositionX,
    backgroundPositionY,
    backgroundRepeat,
    backgroundSize,
    backgroundUrl,
    border,
    borderBottom,
    borderLeft,
    borderRadius,
    borderRight,
    borderTop,
    class: cssClass,
    fullWidth,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    textAlign
  }: Props = $props();
</script>

<Html>
  <Head subject="Test Email" preview="Test Preview" />
  <Body>
    <Container
      {backgroundColor}
      {backgroundPosition}
      {backgroundPositionX}
      {backgroundPositionY}
      {backgroundRepeat}
      {backgroundSize}
      {backgroundUrl}
      {border}
      {borderBottom}
      {borderLeft}
      {borderRadius}
      {borderRight}
      {borderTop}
      class={cssClass}
      {fullWidth}
      {padding}
      {paddingBottom}
      {paddingLeft}
      {paddingRight}
      {paddingTop}
      {textAlign}
    >
      <Section>
        <div>Test Section 1</div>
      </Section>

      <Section>
        <div>Test Section 2</div>
      </Section>
    </Container>
  </Body>
</Html>
