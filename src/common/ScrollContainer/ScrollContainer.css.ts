// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {globalStyle, keyframes, style} from '@vanilla-extract/css';
import {colors} from '../../styles/theme';

const blink = keyframes({
  '0%': {opacity: 0},
  '50%': {opacity: 1},
  '100%': {opacity: 0, display: 'none'},
});

export const css = {
  container: style({
    position: 'relative',
    textAlign: 'center',
  }),
  scroll_area: style({
    overflowX: 'scroll',
    '::-webkit-scrollbar': {
      display: 'none',
    },
  }),
  prompt: style({
    '@media': {
      'screen and (width <= 850px)': {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        padding: 32,
        borderRadius: 8,
        fontSize: '1.4em',
        fontWeight: 'bold',
        color: colors.fg,
        backgroundColor: `${colors.p_g}dd`,
        animation: blink,
        animationDuration: '2s',
        animationFillMode: 'forwards',
        animationIterationCount: 3,
      },
    },
  })
};

globalStyle(`${css.container} img, ${css.container} svg`, {
  margin: 'auto',
  overflowX: 'clip',
  maxWidth: 'none !important',
});

globalStyle('th, td', {
  whiteSpace: 'nowrap',
});
