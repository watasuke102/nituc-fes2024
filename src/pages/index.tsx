// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {css} from '../styles/top.css';
import React from 'react';
import {Seo} from '../components/Seo/Seo';

export const Head = (): React.ReactElement => (
  <Seo title_prefix='' desc='実施日：2024年11月9日（土）・10日（日）' url='' />
);

export default function Index(): React.ReactElement {
  return (
    <main className={css.main}>
      <div className={css.entrypoint_wrapper}>
        <div className={css.entrypoint_bg} />
        <div className={css.entrypoint_circle}>
          <h1 className={css.entrypoint_title}>宇部高専 第61回高専祭</h1>
          <img alt='' src='/logo.png' loading='eager' />
          <span className={css.entrypoint_date}>2024-11-09 & 10</span>
        </div>
      </div>
      <div className={css.info_container}>
        <p>開催日：2024年11月09日 (土), 10日 (日)</p>
      </div>
    </main>
  );
}
