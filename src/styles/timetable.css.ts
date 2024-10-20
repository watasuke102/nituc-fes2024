// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';
import {colors} from './theme';

export const container = style({
  paddingTop: 76,
  textAlign: 'center',
});

export const heading = style({
  textAlign: 'right',
  paddingRight: 8,
  position: 'relative',
  '::before': {
    content: '',
    display: 'block',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 'calc(100% - 250px)',
    height: 8,
    backgroundColor: colors.p_r,
  },
});

export const table = style({
  display: 'grid',
  gap: '4px 8px',
  gridTemplateColumns: 'auto 1fr 1fr',
  // earliest: 09:30, latest: 18:45 => 15min * _38_
  // [2(10:00) -> 4(15min * 4=1h) * 8h = 32(18:00) -> 3(18:45)]
  gridTemplateRows: 'auto repeat(38, 16px)',

  width: 'min(100%, 650px)',
  marginInline: 'auto',
  paddingInline: 8,
});
export const table_top = style({
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
});
export const table_top_weather_notice = style({
  display: 'block',
  marginTop: -7,
  fontSize: '0.85em',
});
export const show_hour = style({
  gridColumn: '1 / 2',
});

export const event_entry = style({
  backgroundColor: colors.p_g,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  border: `2px solid ${colors.fg}`,
});
/// 第1体育館
export const primary_gym = style({
  gridColumn: '2 / 3',
});
export const main_stage = style({
  gridColumn: '3 / 4',
});
