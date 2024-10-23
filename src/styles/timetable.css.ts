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
  paddingBottom: 40,
  textAlign: 'center',
});
export const tables_wrapper = style({
  width: '100%',
  display: 'grid',
  '@media': {
    'screen and (width > 850px)': {
      gridTemplate: '100% / 1fr 1fr',
      gap: 40,
    },
  },
});

export const heading_wrapper = style({
  display: 'grid',
  gridTemplate: `
    ".   text" auto
    "bar text" 8px
    ".   text" auto / 1fr auto
  `,
  columnGap: 12,
  marginBlock: 4,
  paddingRight: 8,
  textAlign: 'right',
  '::before': {
    content: '',
    gridArea: 'bar',
    display: 'block',
    width: '100%',
    height: '100%',
    backgroundColor: colors.p_r,
  },
});
export const heading = style({
  gridArea: 'text',
});
export const misc_schedule = style({
  display: 'inline-block',
  padding: '4px 8px',
  marginBlock: 4,
  borderRadius: 4,
  border: `2px solid ${colors.fg}`,
  backgroundColor: colors.p_g,
});

export const table = style({
  display: 'grid',
  gap: '4px 8px',
  gridTemplateColumns: 'auto auto 1fr auto 1fr',
  // earliest: 09:30, latest: 18:45 => 5min * _115_
  // [6(10:00) -> 12(5min * 12=1h) * 8h = 96(18:00) -> 9(18:45)]
  gridTemplateRows: 'auto repeat(115, 3px)',

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
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});
export const hour_grid = style({
  gridColumn: '2 / 6',
  position: 'relative',
  '::before': {
    content: '',
    display: 'block',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '100%',
    height: 2,
    backgroundColor: `${colors.fg}66`,
  },
});

export const event_entry = style({
  zIndex: 8, // show above grids of timetable
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  overflow: 'hidden',
  whiteSpace: 'pre-wrap',
  backgroundColor: colors.p_g,
  border: `2px solid ${colors.fg}`,
});
export const tiny_entry = style({
  paddingBottom: 8,
  display: 'grid',
  gridTemplate: `
    "event_name event_name event_name" 1fr
    "time_begin separator  time_end"   auto / 1fr auto 1fr
    `,
  alignItems: 'center',
  fontSize: '0.72em',
});
export const event_name = style({
  marginBlock: -4,
  selectors: {
    [`${tiny_entry} > &`]: {
      gridArea: 'event_name',
      marginTop: 0,
      marginBottom: -8,
    },
  },
});
export const time_separator = style({
  display: 'none',
  selectors: {
    [`${tiny_entry} > &`]: {
      display: 'block',
    },
  },
});

/// 第1体育館
export const primary_gym = style({
  gridColumn: '2 / 4',
});
export const main_stage = style({
  gridColumn: '4 / 6',
});
export const both = style({
  gridColumn: '2 / 6',
});

export const band_head = style({
  gridColumn: '2 / 3',
  writingMode: 'vertical-rl',
});
export const band_entry = style({
  gridColumn: '3 / 4',
  fontSize: '0.77em',
});
