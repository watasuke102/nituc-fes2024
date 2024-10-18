// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style, keyframes} from '@vanilla-extract/css';
import {colors} from './theme';

export const circle_width = 360;
const intro_animation_0 = keyframes({
  '0%': {clipPath: 'circle(0px)'},
  '100%': {clipPath: `circle(${circle_width / 2 - 8}px)`},
});
const intro_animation_1 = keyframes({
  '0%': {clipPath: `circle(${circle_width / 2 - 8}px)`},
  '100%': {clipPath: 'circle(100%)'},
});

export const css = {
  main: style({
    backgroundColor: colors.fg,
  }),
  entrypoint_wrapper: style({
    clipPath: 'circle(0px)', // initialize for animation
    animation: `
      ${intro_animation_0} 0.7s forwards 0.4s ease,
      ${intro_animation_1} 1.3s forwards 1.7s cubic-bezier(0.22, 1, 0.36, 1)
    `,
    height: '100dvh',
    alignContent: 'center',
    textAlign: 'center',
  }),
  entrypoint_bg: style({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url(/bg.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: '80%',
    backgroundPositionY: 'bottom',
    filter: 'blur(8px)',
  }),
  entrypoint_circle: style({
    position: 'relative', // for date component
    width: circle_width,
    aspectRatio: '1 / 1',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%',
    backgroundColor: colors.p_r,
  }),
  entrypoint_title: style({
    position: 'absolute',
    top: 72,
    fontSize: '24px',
    fontWeight: 'bold',
  }),
  entrypoint_date: style({
    position: 'absolute',
    bottom: 64,
  }),
  info_container: style({
    width: '100%',
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 40,
    backgroundColor: colors.bg,
  }),
};
