// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {ComplexStyleRule, style} from '@vanilla-extract/css';
import {colors} from '../../styles/theme';

const opener_size = 36;
const padding = 12;

export const header = style({
  zIndex: 256,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  background: `linear-gradient(100deg, ${colors.p_g} 30%, ${colors.bg} 48%)`,
  borderBottom: `5px dotted ${colors.fg}`,
});

export const main = style({
  height: opener_size + padding * 2, // top+bottom
  display: 'grid',
  padding,
  gridTemplateColumns: `${opener_size}px 1fr ${opener_size}px`,
});

export const logo = style({
  gridColumn: '2 / 3',
  height: opener_size,
  justifySelf: 'center',
});

export const menu_opener = style({
  gridColumn: '3 / 4',
  width: '100%',
  aspectRatio: '1 / 1',
  border: 'none',
  ':focus': {
    outline: 'none',
  },
  ':active': {
    transitionDuration: '0.2s',
    filter: 'brightness(75%)',
  },
});

const animation: ComplexStyleRule = {
  transitionDuration: '0.4s',
  transitionProperty: 'transform, top, background-color',
  transitionTimingFunction: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
};
const bar_style: ComplexStyleRule = {
  content: '',
  display: 'block',
  width: '100%',
  height: 3,
  backgroundColor: colors.fg,
  ...animation,
};

const bar_space = 12;
export const icon = style({
  ...bar_style,
  position: 'relative',
  '::before': {
    ...bar_style,
    position: 'absolute',
    top: -bar_space,
  },
  '::after': {
    ...bar_style,
    position: 'absolute',
    top: +bar_space,
  },
});

export const icon_opening = style({
  background: `${colors.fg}00`,
  ...animation,
  '::before': {
    top: 0,
    transform: 'rotate(-45deg)',
    ...animation,
  },
  '::after': {
    top: 0,
    transform: 'rotate(45deg)',
    ...animation,
  },
});

export const menu = style({
  overflow: 'hidden',
  height: 0,
  transition: 'height 0.2s ease',
});
export const menu_opening = style({
  height: 204,
});

export const menu_links = style({
  paddingInline: 12,
});
export const menu_link_item = style({
  textAlign: 'center',
  display: 'block',
  fontSize: '1.15em',
  padding: 8,
});
