// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';

export const container = style({
  height: 64,
  display: 'flex',
  margin: 'auto',
  flexDirection: 'column',
  justifyItems: 'center',
  alignItems: 'center',
});
export const times = style({
  height: 36,
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.15em',
});
export const num = style({
  width: 44,
  margin: '0 6px',
  fontWeight: 'bold',
  fontSize: '1.8em',
  wordBreak: 'keep-all',
});
export const announce = style({
  display: 'block',
  margin: 'auto',
  fontWeight: 'bold',
});
export const during_event = style({
  fontSize: '2.3em',
});
