// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {colors} from './theme';

export const circle_width = 360;

export const css = {
  entrypoint_wrapper: style({
    height: '100dvh',
    alignContent: 'center',
    textAlign: 'center',
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
    paddingBottom: 40,
  }),
};
