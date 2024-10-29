// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from '../styles/top.css';
import React from 'react';
import {Link} from 'gatsby';
import {Seo} from '../common/Seo/Seo';
import {LinkButton} from '../common/LinkButton';
import {Header} from '../common/Header';
import {Countdown} from '../features/Countdown';
import DownIcon from '/static/icon/double_arrow_down.svg';

export const Head = (): React.ReactElement => (
  <Seo title_prefix='' desc='実施日：2024年11月9日（土）・10日（日）' url='' />
);

interface ArticleItemProps {
  date: string; // RFC8601 (YYYY-MM-DD)
  title: string;
  path: string; // `/article/${props.path}`
}
function ArticleItem(props: ArticleItemProps): JSX.Element {
  return (
    <Link to={`/article/${props.path}`} className={css.article_item}>
      <span>{props.date}</span>
      <span>{props.title}</span>
    </Link>
  );
}

export default function Index(): React.ReactElement {
  return (
    <>
      <Header />
      <main className={css.main}>
        <div className={css.entrypoint_wrapper}>
          <div className={css.entrypoint_bg} />
          <div className={css.entrypoint_circle}>
            <h1 className={css.entrypoint_title}>宇部高専 第61回高専祭</h1>
            <img alt='' src='/logo.png' loading='eager' />
            <span className={css.entrypoint_date}>NITUC 61th fes</span>
          </div>
        </div>
        <div className={css.info_container}>
          <p>
            開催日：2024年<strong>11月09日 (土), 10日 (日)</strong>
          </p>
          <Countdown />
          <div className={css.scroll_prompt}>
            <span>Scroll</span>
            <img src={DownIcon} loading='eager' alt='' />
            <span>down</span>
          </div>
        </div>
        <div className={css.extra_info}>
          <section>
            <h2 className={css.heading}>お知らせ</h2>
            <div className={css.article_list}>
              <ArticleItem
                date='2024-10-25'
                path='pr-yamaguchi-cable-vision'
                title='山口ケーブルテレビジョンでPRを行いました'
              />
              {/* (TBA) */}
            </div>
          </section>
          <section>
            <h2 className={css.heading}>概要</h2>
            <img alt='' src='/logo.png' loading='lazy' className={css.logo_after_ep} />
            <p>
              今年の宇部高専 高専祭のテーマは<strong>「YOISYO!」</strong>です。
              宇部高専全体で心をひとつにして、力強く、勢いよく、高専祭2024を盛り上げていくという意味が込められています。
            </p>
            <h3 className={css.heading}>開催日</h3>
            <p>
              2024年<strong>11月09日 (土), 10日 (日)</strong>
              <br />
              <LinkButton to='/timetable'>タイムテーブルを見る</LinkButton>
            </p>
            <h3 className={css.heading}>実施場所</h3>
            <p>
              宇部工業高等専門学校
              <br />
              ※駐車場はありません。外部参加の方は、公共交通機関のご利用をお願いします。
              <br />
              <LinkButton to='/map#access'>マップを確認する</LinkButton>
            </p>
          </section>
          <hr />
          <section className={css.nav_section}>
            <div className={css.nav_card}>
              <img className={css.nav_card_img} alt='' src='/top/events.jpg' loading='lazy' decoding='async' />
              <div className={css.nav_card_info}>
                <h3>イベント</h3>
                <p>メインステージをはじめ、各所でイベントが開催されます。お見逃しなく！</p>
                <LinkButton to='/events'>詳しく見る</LinkButton>
              </div>
            </div>
            <div className={css.nav_card}>
              <img className={css.nav_card_img} alt='' src='/top/exhibits.jpg' loading='lazy' decoding='async' />
              <div className={css.nav_card_info}>
                <h3>展示・バザー</h3>
                <p>バザー、各部活動による展示、各学科による工学実験など盛り沢山！</p>
                <LinkButton to='/exhibitions'>詳しく見る</LinkButton>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
