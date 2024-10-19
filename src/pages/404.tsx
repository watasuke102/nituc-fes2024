// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import React from 'react';
import {Link} from 'gatsby';
import {Header} from '../common/Header';

export default function NotFound(): React.ReactElement {
  return (
    <>
      <Header />
      <main style={{paddingTop: 80, textAlign: 'center'}}>
        <h1>404</h1>
        <p>ページが見つかりませんでした。</p>
        <Link to='/'>トップページに戻る</Link>
      </main>
    </>
  );
}
