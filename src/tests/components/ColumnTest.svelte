<script lang="ts">
  import type { Properties } from 'csstype';
  import type { CustomProperties } from '$lib/types.js';

  import { Html, Head, Body, Section, Column } from '$lib/index.js';

  interface Props {
    backgroundColor?: Properties['backgroundColor'];
    border?: Properties['border'];
    borderBottom?: Properties['borderBottom'];
    borderLeft?: Properties['borderLeft'];
    borderRadius?: Properties['borderRadius'];
    borderRight?: Properties['borderRight'];
    borderTop?: Properties['borderTop'];
    class?: string;
    innerBackgroundColor?: Properties['backgroundColor'];
    innerBorder?: Properties['border'];
    innerBorderBottom?: Properties['borderBottom'];
    innerBorderLeft?: Properties['borderLeft'];
    innerBorderRadius?: Properties['borderRadius'];
    innerBorderRight?: Properties['borderRight'];
    innerBorderTop?: Properties['borderTop'];
    padding?: Properties['padding'];
    paddingBottom?: CustomProperties['paddingBottom'];
    paddingLeft?: CustomProperties['paddingLeft'];
    paddingRight?: CustomProperties['paddingRight'];
    paddingTop?: CustomProperties['paddingTop'];
    verticalAlign?: 'middle' | 'top' | 'bottom';
    width?: CustomProperties['width'] | `${number}%`;
  }

  const {
    backgroundColor,
    border,
    borderBottom,
    borderLeft,
    borderRadius,
    borderRight,
    borderTop,
    class: cssClass,
    innerBackgroundColor,
    innerBorder,
    innerBorderBottom,
    innerBorderLeft,
    innerBorderRadius,
    innerBorderRight,
    innerBorderTop,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    verticalAlign,
    width
  }: Props = $props();
</script>

<Html>
  <Head subject="Test Email" preview="Test Preview" />
  <Body>
    <Section>
      <Column
        {backgroundColor}
        {border}
        {borderBottom}
        {borderLeft}
        {borderRadius}
        {borderRight}
        {borderTop}
        class={cssClass}
        {innerBackgroundColor}
        {innerBorder}
        {innerBorderBottom}
        {innerBorderLeft}
        {innerBorderRadius}
        {innerBorderRight}
        {innerBorderTop}
        {padding}
        {paddingBottom}
        {paddingLeft}
        {paddingRight}
        {paddingTop}
        {verticalAlign}
        {width}
      >
        <div>Test Column</div>
        <p>Above divider</p>
        <Column.Divider
          borderColor="#e0e0e0"
          borderStyle="dashed"
          borderWidth="1px"
          padding="15px 0"
        />
        <p>Below divider</p>
        <p>Above spacer</p>
        <Column.Spacer height="20px" />
        <p>Below spacer</p>
      </Column>
    </Section>
  </Body>
</Html>
