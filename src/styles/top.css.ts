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
  // dispel global
  backgroundColor: 'transparent',
});
export const entrypoint_date = style({
  position: 'absolute',
  fontSize: 22,
  bottom: 72,
});

const info_fadein = keyframes({
  '0%': {opacity: 0},
  '100%': {opacity: 1},
});
export const info_container = style({
  position: 'absolute',
  bottom: 24,
  left: '50%',
  transform: 'translateX(-50%)',
  width: 'min(100%, 550px)',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  textAlign: 'center',
  paddingBlock: 12,
  borderRadius: 4,
  backgroundColor: colors.bg,
  opacity: 0,
  animation: `${info_fadein} 1s linear 2.7s forwards`,
});

export const scroll_prompt = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
export const extra_info = style({
  paddingInline: 12,
  paddingTop: 8,
  paddingBottom: 40,
  textAlign: 'center',
  color: colors.fg,
  backgroundColor: colors.bg,
});
export const heading = style({
  marginTop: 12,
});

export const article_list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  width: '90%',
  margin: '8px auto',
  padding: '4px 8px',
  border: `2px solid ${colors.fg}`,
  borderRadius: 4,
});
export const article_item = style({
  display: 'grid',
  gridTemplateColumns: '96px 1fr',
  gap: 16,
  textAlign: 'left',
});

export const logo_after_ep = style({
  maxWidth: '100%',
  margin: '8px auto',
});

export const nav_section = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginInline: 'auto',
  '@media': {
    'screen and (width > 650px)': {
      // max image width is 300px, so wrapper width should be (300*2)px
      width: 'min(98%, 600px)',
    },
  },
});
export const nav_card = style({
  display: 'flex',
  width: 300,
  flexDirection: 'column',
  alignItems: 'stretch',
  marginBlock: 24,
  textAlign: 'left',
  // hide corners of the image, overwrapping due to border radius
  overflow: 'hidden',
  borderRadius: 16,
  border: `2px solid ${colors.fg}`,
  backgroundColor: colors.p_g,
  '@media': {
    'screen and (width > 650px)': {
      width: 'auto',
      flexDirection: 'row',
      selectors: {
        '&:nth-child(even)': {
          flexDirection: 'row-reverse',
        },
      },
    },
  },
});
export const nav_card_info = style({
  // FIXME: height is not 100% length
  // ...but current design is not bad?
  height: '100%',
  display: 'grid',
  rowGap: 16,
  gridTemplateRows: 'auto 1fr auto',

  margin: '8px 20px',
  '@media': {
    'screen and (width > 650px)': {
      margin: 'auto 20px',
    },
  },
});
export const nav_card_img = style({
  width: 300,
});
