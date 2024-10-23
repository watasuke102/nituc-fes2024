// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';

export const container = style({
  paddingTop: 76,
  textAlign: 'center',
});
export const map = style({
  height: 400,
});

export const parking_notice = style({
  fontSize: '0.85em',
});
export const access_container = style({
  display: 'grid',
  gridTemplateRows: '1fr auto',
  gap: 12,
  width: '90dvw',
  margin: '16px auto',
  textAlign: 'left',
  '@media': {
    'screen and (min-width: 750px)': {
      gridTemplateColumns: '1fr auto',
    },
  },
});
export const googlemap = style({
  width: '100%',
  height: 350,
  border: 0,
});
export const time_estimation = style({
  fontSize: '0.9em',
});
