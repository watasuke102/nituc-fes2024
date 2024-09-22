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
    <main className={css.container}>
      <h1>宇部高専 第61回高専祭</h1>
      <img alt='' src='/logo.png' className={css.logo} />
      <div>
        <p>開催日：2024-11-09, 10</p>
        <p>工事中...</p>
      </div>
    </main>
  );
}
