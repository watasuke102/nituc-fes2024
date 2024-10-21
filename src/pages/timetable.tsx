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
import {Time, timetable_first, timetable_second, TimeTableEntry} from '../data/timetable';
import {ZeroPadding} from '../utils/ZeroPadding';

export const Head = (): React.ReactElement => (
  <Seo title_prefix='タイムテーブル' desc='時間ごと・会場ごとのタイムテーブル' url='/timetable' />
);

function Table(props: {list: TimeTableEntry[]}): JSX.Element {
  return (
    <div className={css.table}>
      {/* Header */}
      <div className={cs(css.table_top, css.primary_gym)}>
        <strong>第1体育館</strong>
      </div>
      <div className={cs(css.table_top, css.main_stage)}>
        <strong>メインステージ</strong>
        <span className={css.table_top_weather_notice}>(雨天時：第2体育館)</span>
      </div>
      {
        // Times; 09:30 == row[2], 10:30 == row[14] (1-indexed)
        [10, 11, 12, 13, 14, 15, 16, 17, 18].map((e, i) => (
          <div key={e} style={{gridRow: `${2 + i * 12} / ${14 + i * 12}`}} className={css.show_hour}>
            {`${e}:00`}
          </div>
        ))
      }
      {props.list.map(e => {
        function row(t: Time) {
          if (t.hour === 9) {
            if (t.minute === 30) {
              return 2; // 09:30 is row[2]
            } else {
              throw Error(`unexpected time : ${ZeroPadding(e.begin.hour)}:${ZeroPadding(e.begin.minute)}`);
            }
          }
          // 10:00 == row[8], 1 hour == row*12
          return Math.floor(8 + (t.hour - 10) * 12 + t.minute / 5);
        }
        const begin = row(e.begin);
        const end = row(e.end);
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
            <span>{`${ZeroPadding(e.begin.hour)}:${ZeroPadding(e.begin.minute)}`}</span>
            <strong className={css.event_name}>{e.name}</strong>
            <strong className={css.time_separator}>～</strong>
            <span>{`${ZeroPadding(e.end.hour)}:${ZeroPadding(e.end.minute)}`}</span>
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
        <section>
          <h2 className={css.heading}>1日目 - 11/09 (土)</h2>
          <span className={css.misc_schedule}>
            (工学実験・展示・バザー：<strong>09:30～16:30</strong>)
          </span>
          <Table list={timetable_first} />
        </section>
        <section>
          <h2 className={css.heading}>2日目 - 11/10 (日)</h2>
          <span className={css.misc_schedule}>
            (工学実験・展示・バザー：<strong>09:30～15:00</strong>)
          </span>
          <Table list={timetable_second} />
        </section>
      </main>
    </>
  );
}
