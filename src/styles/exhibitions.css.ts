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

export const table = style({
  margin: '8px 12px',
  border: `3px solid ${colors.fg}`,
  borderSpacing: '0',
  borderCollapse: 'collapse',
});
export const thead = style({
  color: '#e3e2dd',
  backgroundColor: '#262523',
});
export const tbody = style({
  textAlign: 'left',
});
export const cell = style({
  paddingInline: '12px',
  border: `1px solid ${colors.fg}`,
});
export const place = style({
  textAlign: 'center',
});
