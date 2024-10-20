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

export const Head = (): React.ReactElement => (
  <Seo title_prefix='タイムテーブル' desc='時間ごと・会場ごとのタイムテーブル' url='/timetable' />
);

function Times(): JSX.Element {
  // 09:30 == row[2], 10:00 == row[4] (1-indexed)
  return (
    <>
      {[10, 11, 12, 13, 14, 15, 16, 17, 18].map((e, i) => (
        <div key={e} style={{gridRow: `${3 + i * 4} / ${5 + i * 4}`}} className={css.show_hour}>
          {`${e}:00`}
        </div>
      ))}
    </>
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
          <div className={css.table}>
            <div className={cs(css.table_top, css.primary_gym)}>
              <strong>第1体育館</strong>
            </div>
            <div className={cs(css.table_top, css.main_stage)}>
              <strong>メインステージ</strong>
              <span className={css.table_top_weather_notice}>(雨天時：第2体育館)</span>
            </div>

            <Times />

            <div style={{gridRow: '2 / 4'}} className={cs(css.event_entry, css.primary_gym)}>
              09:30 - 10:00
            </div>
            {[10, 11, 12, 13, 14, 15, 16, 17, 18].map((e, i) => (
              <div
                key={e}
                style={{gridRow: `${4 + i * 4} / ${8 + i * 4}`}}
                className={cs(css.event_entry, css.primary_gym)}
              >
                {`${e}:00 - ${e + 1}:00`}
              </div>
            ))}
            <div style={{gridRow: '2 / 4'}} className={cs(css.event_entry, css.main_stage)}>
              09:30 - 10:00
            </div>
            {[10, 11, 12, 13, 14, 15, 16, 17, 18].map((e, i) => (
              <div
                key={e}
                style={{gridRow: `${4 + i * 4} / ${8 + i * 4}`}}
                className={cs(css.event_entry, css.main_stage)}
              >
                {`${e}:00 - ${e + 1}:00`}
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className={css.heading}>2日目 - 11/10 (日)</h2>
        </section>
      </main>
    </>
  );
}
