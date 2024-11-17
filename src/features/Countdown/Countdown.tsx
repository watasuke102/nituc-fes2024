// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Countdown.css';
import React from 'react';
import cs from 'classnames';
import {ZeroPadding} from '../../utils/ZeroPadding';

type Props = {
  beginning_time?: string;
};

const jst = 9 /*hours*/ * 60 /*minutes*/ * 60 /*sec*/ * 1000; /*ms*/

export function Countdown(props: Props) {
  const beginning = new Date(props.beginning_time ?? '2024-11-09T09:30:00+0900');
  const [remain_date, set_remain_date] = React.useState(new Date());
  React.useEffect(() => {
    const update_countdown = () => {
      const diff = new Date(beginning.getTime() - Date.now() - jst);
      set_remain_date(diff);
    };
    update_countdown();
    const id = setInterval(update_countdown, 1000);
    return () => clearInterval(id);
  }, []);

  const year = remain_date.getFullYear();
  const month = remain_date.getMonth() + 1;
  const date = remain_date.getDate() - 1;

  if (year === 1969 && month === 12 && (date === 29 || date === 30)) {
    return (
      <div className={css.container}>
        <span className={cs(css.announce, css.during_event)}>高専祭 開催中！！</span>
      </div>
    );
  }

  if (year !== 1970) {
    return (
      <div className={css.container}>
        <span className={css.announce}>宇部高専 第61回高専祭は終了しました。</span>
      </div>
    );
  }

  return (
    <section
      className={css.container}
      aria-label={`オープニングまで残り${date}日${remain_date.getHours()}時間${remain_date.getMinutes()}分`}
    >
      オープニングまで残り
      <div className={css.times} aria-hidden>
        <span className={css.num}>{ZeroPadding(date)}</span>日{/**/}
        <span className={css.num}>{ZeroPadding(remain_date.getHours())}</span>時間{/**/}
        <span className={css.num}>{ZeroPadding(remain_date.getMinutes())}</span>分{/**/}
        <span className={css.num}>{ZeroPadding(remain_date.getSeconds())}</span>秒{/**/}
      </div>
    </section>
  );
}
