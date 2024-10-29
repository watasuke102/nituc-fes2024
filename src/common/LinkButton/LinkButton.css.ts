// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {colors} from '../../styles/theme';

export const link = style({
  zIndex: 8,
  position: 'relative',
  display: 'inline-block',
  marginBlock: 8,
  textAlign: 'center',
  backgroundColor: colors.p_g,
  padding: 8,
  borderRadius: 4,
  border: `3px solid ${colors.fg}`,
  boxShadow: `4px 4px 6px 2px ${colors.fg}66`,

  transitionProperty: 'color',
  transitionDuration: '0.2s',
  ':hover': {
    color: colors.bg,
  },
  '::before': {
    content: '',
    position: 'absolute',
    display: 'block',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: colors.fg,
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transitionProperty: 'transform',
    transitionDuration: '0.3s',
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
  selectors: {
    '&:hover::before': {
      transform: 'scaleX(1)',
    },
  },
});

export const text = style({
  position: 'relative',
  zIndex: 16,
});
