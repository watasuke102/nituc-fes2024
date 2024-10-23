// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from '../styles/map.css';
import React from 'react';
import map from '/static/map.svg';
import {Seo} from '../common/Seo/Seo';
import {ScrollContainer} from '../common/ScrollContainer';
import {Header} from '../common/Header';

export const Head = (): React.ReactElement => <Seo title_prefix='マップ' desc='場内マップおよびアクセス' url='/time' />;

export default function Map(): JSX.Element {
  return (
    <main className={css.container} aria-label='マップ'>
      <Header />
      <h1>マップ</h1>
      <h2>場内マップ</h2>
      <ScrollContainer>
        <img className={css.map} alt='場内マップ' src={map} />
      </ScrollContainer>
      <h2>アクセス</h2>
      <p>
        会場：
        <strong>
          <a target='_blank' rel='nofollow noopener noreferrer' href='https://www.ube-k.ac.jp/'>
            宇部工業高等専門学校
          </a>
        </strong>
        <br />
        〒755-8555 山口県宇部市常盤台2-14-1
      </p>
      <p className={css.parking_notice}>※駐車場はありません。外部参加の方は、公共交通機関のご利用をお願いします。</p>
      <div className={css.access_container}>
        <iframe
          title='宇部高専マップ'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.4563346775!2d131.2716709257123!3d33.95510862319374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354380a26792f7f7%3A0x5c8df8c6a1df1677!2z54us56uL6KGM5pS_5rOV5Lq65Zu956uL6auY562J5bCC6ZaA5a2m5qCh5qmf5qeLIOWuh-mDqOW3pealremrmOetieWwgumWgOWtpuagoQ!5e0!3m2!1sja!2sjp!4v1698330937203!5m2!1sja!2sjp'
          className={css.googlemap}
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
        <ul className={css.time_estimation}>
          <li>
            <strong>宇部市営バス</strong>：高専グランド前から徒歩3分
          </li>
          <li>
            <strong>電車</strong>：常盤駅から徒歩40分
          </li>
        </ul>
      </div>
    </main>
  );
}
