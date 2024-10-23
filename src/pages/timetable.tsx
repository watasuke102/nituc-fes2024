// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from '../styles/timetable.css';
import React from 'react';
import cs from 'classnames';
import {Seo} from '../common/Seo/Seo';
import {Header} from '../common/Header';
import {band_first, band_second, BandEntry, timetable_first, timetable_second, TimeTableEntry} from '../data/timetable';
import {Time} from '../data/time';

export const Head = (): React.ReactElement => (
  <Seo title_prefix='タイムテーブル' desc='時間ごと・会場ごとのタイムテーブル' url='/timetable' />
);

function event_label(e: TimeTableEntry): string {
  let label = e.begin.toString();
  label += 'から';
  label += e.end.toString();
  label += 'まで、';
  switch (e.place) {
    case 'primary_gym':
      label += '第1体育館';
      break;
    case 'main_stage':
      label += 'メインステージ';
      break;
    case 'both':
      label += '正門付近';
      break;
  }
  label += 'で「' + e.name + '」を開催します。';
  return label;
}
function band_label(e: BandEntry): string {
  let label = e.begin.toString();
  label += 'から';
  label += e.end.toString();
  label += 'まで、第1体育館で「' + e.name + '」によるバンド演奏が行われます。';
  return label;
}

function row(t: Time): number {
  if (t.hour === 9) {
    if (t.minute === 30) {
      return 2; // 09:30 is row[2]
    } else {
      throw Error(`unexpected time : ${t.toString()}`);
    }
  }
  // 10:00 == row[8], 1 hour == row*12
  return Math.floor(8 + (t.hour - 10) * 12 + t.minute / 5);
}

interface Props {
  event_list: TimeTableEntry[];
  band_list: BandEntry[];
}
function Table(props: Props): JSX.Element {
  return (
    <div className={css.table}>
      {/* Header */}
      <div className={cs(css.table_top, css.primary_gym)} aria-hidden>
        <strong>第1体育館</strong>
      </div>
      <div className={cs(css.table_top, css.main_stage)} aria-hidden>
        <strong>メインステージ</strong>
        <span className={css.explicit_place_info} aria-hidden>
          (第2体育館)
        </span>
      </div>
      {
        // Times; 09:30 == row[2], 10:30 == row[14] (1-indexed)
        // so 1\d:00 is row[8*12i]; use ±2
        [10, 11, 12, 13, 14, 15, 16, 17, 18].map((e, i) => (
          <>
            <strong
              key={`time_hour_${e}`}
              style={{gridRow: `${6 + i * 12} / ${10 + i * 12}`}}
              className={css.show_hour}
              aria-hidden
            >
              {`${e}:00`}
            </strong>
            <div
              key={`grid_hour_${e}`}
              style={{gridRow: `${6 + i * 12} / ${10 + i * 12}`}}
              className={css.table_grid}
              role='separator'
            />
            {/* 1\d:30 is row[14*12i]; use ±2 */}
            <span
              key={`time_mid_${e}`}
              style={{gridRow: `${12 + i * 12} / ${16 + i * 12}`}}
              className={css.show_hour}
              aria-hidden
            >
              {`${e}:30`}
            </span>
            <div
              key={`grid_mid_${e}`}
              style={{gridRow: `${12 + i * 12} / ${16 + i * 12}`}}
              className={cs(css.table_grid, css.grid_thin)}
              role='separator'
            />
          </>
        ))
      }
      {props.event_list.map(e => {
        const begin = row(e.begin);
        const end = row(e.end);

        if (e.name === 'バンド') {
          return (
            <>
              <div
                key={'band_head'}
                style={{gridRow: `${begin} / ${end}`}}
                className={cs(css.event_entry, css.band_head)}
                aria-hidden
              >
                バンド
              </div>
              {props.band_list.map(e => {
                return (
                  <div
                    key={`band_${e.name}`}
                    style={{gridRow: `${row(e.begin)} / ${row(e.end)}`}}
                    className={cs(css.event_entry, css.band_entry)}
                  >
                    <strong aria-hidden>{e.name}</strong>
                    <span className={css.visually_hidden}>{band_label(e)}</span>
                  </div>
                );
              })}
            </>
          );
        }

        return (
          <div
            key={e.name}
            style={{gridRow: `${begin} / ${end}`}}
            className={cs(
              css.event_entry,
              e.place === 'main_stage' && css.main_stage,
              e.place === 'primary_gym' && css.primary_gym,
              e.place === 'both' && css.both,
              // the event that duration is less than 1h is too small to show info
              end - begin < 12 && css.tiny_entry,
            )}
          >
            <span aria-hidden>{e.begin.toString()}</span>
            <strong className={css.event_name} aria-hidden>
              {e.name}
            </strong>
            <strong className={css.time_separator} aria-hidden>
              ～
            </strong>
            <span aria-hidden>{e.end.toString()}</span>
            <span className={css.visually_hidden}>{event_label(e)}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function Timetable(): JSX.Element {
  return (
    <>
      <Header />
      <main className={css.container}>
        <h1>タイムテーブル</h1>
        <div className={css.tables_wrapper}>
          <section>
            <div className={css.heading_wrapper}>
              <h2 className={css.heading}>1日目 - 11/09 (土)</h2>
            </div>
            <span className={css.misc_schedule}>
              (工学実験・展示・バザー：<strong>09:30～16:30</strong>)
            </span>
            <Table event_list={timetable_first} band_list={band_first} />
          </section>
          <section>
            <div className={css.heading_wrapper}>
              <h2 className={css.heading}>2日目 - 11/10 (日)</h2>
            </div>
            <span className={css.misc_schedule}>
              (工学実験・展示・バザー：<strong>09:30～15:00</strong>)
            </span>
            <Table event_list={timetable_second} band_list={band_second} />
          </section>
        </div>
      </main>
    </>
  );
}
