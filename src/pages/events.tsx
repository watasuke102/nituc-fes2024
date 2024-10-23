// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from '../styles/events.css';
import React from 'react';
import {Seo} from '../common/Seo/Seo';
import {Header} from '../common/Header';
import {events} from '../data/events';
import PlaceIcon from '/static/icon/place.svg';
import TimeIcon from '/static/icon/time.svg';
import GroupIcon from '/static/icon/group.svg';

export const Head = (): React.ReactElement => <Seo title_prefix='イベント' desc='' url='/events' />;

export default function Events(): JSX.Element {
  return (
    <>
      <Header />
      <main className={css.container}>
        <h1>イベント</h1>
        <div className={css.event_container}>
          {events.map(e => {
            return (
              <section key={e.title} className={css.event}>
                <h2>{e.title}</h2>
                <div className={css.basic_info}>
                  <img className={css.time_icon} src={TimeIcon} loading='eager' alt='' />
                  <span className={css.date}>{e.date}</span>
                  {e.place && (
                    <>
                      <img className={css.place_icon} src={PlaceIcon} loading='eager' alt='' />
                      <span className={css.place}>{e.place}</span>
                    </>
                  )}
                  {e.by && (
                    <>
                      <img className={css.group_icon} src={GroupIcon} loading='eager' alt='' />
                      <span className={css.by}>{e.by}</span>
                    </>
                  )}
                </div>
                <div className={css.desc}>{e.desc}</div>
              </section>
            );
          })}
        </div>
      </main>
    </>
  );
}
