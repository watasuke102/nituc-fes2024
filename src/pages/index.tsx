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
  path?: string; // `/article/${props.path}`
}
function ArticleItem(props: ArticleItemProps): JSX.Element {
  if (props.path) {
    return (
      <Link to={`/article/${props.path}`} className={css.article_item}>
        <span>{props.date}</span>
        <span>{props.title}</span>
      </Link>
    );
  }
  return (
    <p className={css.article_item}>
      <span>{props.date}</span>
      <span>{props.title}</span>
    </p>
  );
}
const articles: ArticleItemProps[] = [
  {
    date: '2024-10-29',
    title: 'Webサイトの完全版を公開しました！',
  },
  {
    date: '2024-10-25',
    path: 'pr-yamaguchi-cable-vision',
    title: '山口ケーブルテレビジョンでPRを行いました',
  },
];

export default function Index(): React.ReactElement {
  // :)
  console.info(`ようこそ：コンソールを覗きたくなる気持ち、わかりますよ
---
このサイトは Gatsby, vanilla-extract, Prettier, ESLint (w/Flat Config) 等と VSCode+VSCodeVim によって作られ、Cloudflare Pages にデプロイされています。
しばらくしたらGitHubでソースを公開します -> https://github.com/watasuke102/nituc-fes2024
---
$ made by @Watasuke102. https://watasuke.net をよろしくおねがいします`);
  return (
    <>
      <Header />
      <main className={css.main}>
        <div className={css.entrypoint_wrapper} aria-hidden>
          <div className={css.entrypoint_bg} />
          <div className={css.entrypoint_circle}>
            <h1 className={css.entrypoint_title_upper}>宇部高専 第61回高専祭</h1>
            <img alt='' src='/logo.png' loading='eager' />
            <span className={css.entrypoint_title_lower}>NITUC 61th fes</span>
          </div>
        </div>
        <div className={css.extra_info}>
          {/* dateinfo is shown at the lowest area when display height is enough long
              If it isn't enough, dateinfo should be shown at the next area of entrypoint
              ... that's why dateinfo is a child of extra_info */}
          <div className={css.dateinfo_container}>
            <p>
              開催日：2024年<strong>11月09日 (土), 10日 (日)</strong>
            </p>
            <Countdown />
            <div className={css.scroll_prompt}>
              <span>Scroll</span>
              <img src={DownIcon} alt='' loading='lazy' decoding='async' />
              <span>down</span>
            </div>
          </div>
          <section>
            <h2 className={css.heading}>お知らせ</h2>
            <div className={css.article_list}>
              {articles.map((e, i) => {
                return <ArticleItem key={`article_${i}`} {...e} />;
              })}
            </div>
          </section>
          <section>
            <h2 className={css.heading}>概要</h2>
            <img className={css.logo_after_ep} src='/logo.png' alt='' loading='lazy' decoding='async' />
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
