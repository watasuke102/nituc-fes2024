// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style, keyframes} from '@vanilla-extract/css';
import {colors} from './theme';

export const main = style({
  backgroundColor: colors.fg,
});

const circle_width = 360;
const intro_animation_0 = keyframes({
  '0%': {clipPath: 'circle(0px)'},
  '100%': {clipPath: `circle(${circle_width / 2 - 8}px)`},
});
const intro_animation_1 = keyframes({
  '0%': {clipPath: `circle(${circle_width / 2 - 8}px)`},
  '100%': {clipPath: 'circle(100%)'},
});
export const entrypoint_wrapper = style({
  clipPath: 'circle(0px)', // initialize for animation
  animation: `
      ${intro_animation_0} 0.7s forwards 0.4s ease,
      ${intro_animation_1} 1.5s forwards 1.9s cubic-bezier(0.22, 1, 0.36, 1)
    `,
  height: '100dvh',
  alignContent: 'center',
  textAlign: 'center',
});

export const entrypoint_bg = style({
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
});

export const entrypoint_circle = style({
  position: 'relative', // for date component
  width: circle_width,
  aspectRatio: '1 / 1',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '100%',
  backgroundColor: colors.p_r,
});
export const entrypoint_title = style({
  position: 'absolute',
  top: 72,
  fontSize: '24px',
  fontWeight: 'bold',
});
export const entrypoint_date = style({
  position: 'absolute',
  bottom: 64,
});

const info_fadein = keyframes({
  '0%': {opacity: 0},
  '100%': {opacity: 1},
});
export const info_container = style({
  position: 'fixed',
  bottom: 24,
  left: '50%',
  transform: 'translateX(-50%)',
  width: 'min(100%, 550px)',
  textAlign: 'center',
  paddingTop: 12,
  paddingBottom: 20,
  borderRadius: 4,
  backgroundColor: colors.bg,
  opacity: 0,
  animation: `${info_fadein} 1s linear 2.7s forwards`,
});
