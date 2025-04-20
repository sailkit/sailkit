<script lang="ts">
  import type { Properties } from 'csstype';
  import type { CustomProperties } from '$lib/types.js';
  import { Html, Head, Body, Section, Table } from '$lib/index.js';

  interface Props {
    align?: 'left' | 'right' | 'center';
    border?: Properties['border'];
    cellPadding?: Properties['padding'];
    cellSpacing?: CustomProperties['cellSpacing'];
    color?: Properties['color'];
    class?: string;
    containerBackgroundColor?: Properties['backgroundColor'];
    fontFamily?: Properties['fontFamily'];
    fontSize?: CustomProperties['fontSize'];
    lineHeight?: CustomProperties['lineHeight'];
    padding?: Properties['padding'];
    paddingBottom?: CustomProperties['paddingBottom'];
    paddingLeft?: CustomProperties['paddingLeft'];
    paddingRight?: CustomProperties['paddingRight'];
    paddingTop?: CustomProperties['paddingTop'];
    role?: 'none' | 'presentation';
    tableLayout?: 'auto' | 'fixed' | 'initial' | 'inherit';
    width?: CustomProperties['width'] | `${number}%`;
  }

  const {
    align,
    border,
    cellPadding,
    cellSpacing,
    color,
    class: cssClass,
    containerBackgroundColor,
    fontFamily,
    fontSize,
    lineHeight,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    role,
    tableLayout,
    width
  }: Props = $props();
</script>

<Html>
  <Head subject="Test Email" preview="Test Preview" />
  <Body>
    <Section>
      <Table
        {align}
        {border}
        {cellPadding}
        {cellSpacing}
        {color}
        {containerBackgroundColor}
        class={cssClass}
        {fontFamily}
        {fontSize}
        {lineHeight}
        {padding}
        {paddingBottom}
        {paddingLeft}
        {paddingRight}
        {paddingTop}
        {role}
        {tableLayout}
        {width}
      >
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
        </tr>
        <tr>
          <td>Value 1</td>
          <td>Value 2</td>
        </tr>
      </Table>
    </Section>
  </Body>
</Html>
