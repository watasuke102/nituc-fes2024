// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {colors} from '../../styles/theme';

export const link = style({
  display: 'inline-block',
  marginBlock: 8,
  padding: 8,
  textAlign: 'center',
  backgroundColor: colors.p_g,
  border: `3px solid ${colors.fg}`,
  borderRadius: 4,
  boxShadow: `4px 4px 6px 2px ${colors.fg}66`,
  transitionProperty: 'color, background-color',
  transitionDuration: '0.2s',
  ':hover': {
    color: colors.bg,
    backgroundColor: colors.fg,
    transitionDuration: '0.2s',
  },
});
