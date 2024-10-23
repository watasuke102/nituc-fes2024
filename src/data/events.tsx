// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {Time} from './time';
import React from 'react';

export interface EventDetail {
  readonly title: string;
  readonly date: string;
  // main stage is varied on the rainy day
  readonly place?: 'main_stage' | string;
  readonly by?: string;
  readonly desc: JSX.Element;
}

function date(day: 1 | 2, begin?: Time, end?: Time): string {
  let date = day === 1 ? '11/09 (土) ' : '11/10 (日) ';
  if (begin) {
    date += begin.toString() + '～';
    if (end) {
      date += end.toString();
    }
  }
  return date;
}

export const events: EventDetail[] = [
  {
    title: '映えコン',
    date: 'オープニングから2日目の午前中まで',
    desc: (
      <div>
        「映え」の瞬間をInstagramに投稿しよう！
        <br />
        <strong>【応募手順】</strong>
        <ol>
          <li>
            <strong>
              <code>kousensai_2024</code>
            </strong>{' '}
            をタグ付け
          </li>
          <li>「2024高専祭」で投稿</li>
        </ol>
      </div>
    ),
  },
  {
    title: 'カラオケ大会',
    date: `予選：${date(1, new Time(11, 30))}\n決勝：${date(2, new Time(12, 0))}`,
    place: 'main_stage',
    desc: (
      <span>
        歌唱力を魅せつけろ。
        <br />
        一般の方も参加できます！
      </span>
    ),
  },
  {
    title: 'ビンゴ大会',
    date: date(1, new Time(10, 0)),
    place: 'main_stage',
    desc: (
      <span>
        運試し、やっていきませんか？
        <br />
        一般の方も参加できます！
      </span>
    ),
  },
  {
    title: '献血',
    date: date(1) + ' 09:30～12:00 / 13:15～16:00',
    place: 'ペリカン食堂',
    desc: (
      <div>
        <span>
          受付された方<strong>全員</strong>にステキな記念品をご用意してお待ちしています！
        </span>
        <details>
          <summary>詳細</summary>
          <dl>
            <dt>200mL献血（学生限定）</dt>
            <dd>
              年齢：男女ともに<strong>16歳</strong>以上
              <br />
              体重：男性<strong>45kg</strong>, 女性<strong>40kg</strong>以上
              <br />
              ※人数に限りがあります
            </dd>
            <dt>400mL献血</dt>
            <dd>
              年齢：男性<strong>17歳</strong>, 女性<strong>18歳</strong>以上
              <br />
              体重：男女ともに<strong>50kg</strong>以上
            </dd>
          </dl>
        </details>
      </div>
    ),
  },
  {
    title: 'ダーツゲーム',
    date: date(1),
    place: '第2体育館',
    by: '西日本自動車学校',
    desc: <span>無料で参加できます！</span>,
  },
  {
    title: 'スーパーボールすくい',
    date: date(1),
    place: '第2体育館',
    by: 'うべ自動車学校',
    desc: <span>くじつきスーパーボールをすくって景品をゲット♪（ハズレなし）</span>,
  },
  {
    title: '仮装コンテスト',
    date: date(2, new Time(16, 40)),
    place: '第1体育館',
    desc: (
      <span>
        <strong>創造力を光らせる！</strong>
        <br />
        唯一無二の仮装で高専祭を盛り上げよう！
      </span>
    ),
  },
  {
    title: '○×クイズ大会',
    date: date(2, new Time(10, 0)),
    place: 'main_stage',
    desc: (
      <span>
        クイズ王は誰だ？様々なジャンルのクイズを出題します。
        <br />
        一般の方も参加できます！
      </span>
    ),
  },
  {
    title: 'どきどきパターGolf',
    date: date(2),
    place: '第2体育館',
    by: '宇部中央自動車学校',
    desc: <span>無料で参加できます！ゲームクリアで景品GET!!</span>,
  },
  {
    title: '抽選会',
    date: `前半：${date(2, new Time(16, 0))}\n後半：${date(2, new Time(17, 20))}`,
    place: '第1体育館',
    desc: <span>50人に景品が当たる！！豪華景品をゲットしよう！</span>,
  },
];
