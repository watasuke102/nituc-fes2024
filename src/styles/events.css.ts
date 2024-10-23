// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {colors} from './theme';

export const container = style({
  paddingTop: 76,
  paddingBottom: 40,
  textAlign: 'center',
});
export const event_container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
  gap: 12,
  padding: '8px 16px',
});

export const event = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  textAlign: 'left',
  whiteSpace: 'pre-wrap',

  padding: 8,
  borderRadius: 4,
  border: `2px solid ${colors.fg}`,
  backgroundColor: colors.p_g,
});
export const basic_info = style({
  display: 'grid',
  columnGap: 8,
  alignItems: 'center',
  gridTemplate: `
    "time_icon  date"  auto
    "place_icon place" auto
    "group_icon by"    auto / auto 1fr
  `,
  fontSize: '0.88em',
});
export const time_icon = style({
  gridArea: 'time_icon',
});
export const date = style({
  gridArea: 'date',
});
export const place_icon = style({
  gridArea: 'place_icon',
});
export const place = style({
  gridArea: 'place',
});
export const group_icon = style({
  gridArea: 'group_icon',
});
export const by = style({
  gridArea: 'by',
});
export const desc = style({
  marginTop: 'auto',
});
