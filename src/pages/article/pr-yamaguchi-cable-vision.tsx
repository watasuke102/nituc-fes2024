// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from '../../styles/article.css';
import React from 'react';
import {Seo} from '../../common/Seo/Seo';
import {Header} from '../../common/Header';
import {LinkButton} from '../../common/LinkButton';

export const Head = (): React.ReactElement => (
  <Seo title_prefix='山口ケーブルテレビジョンでPRを行いました' desc='' url='/article/pr-yamaguchi-cable-vision' />
);

export default function PrYamaguchiCableVision(): JSX.Element {
  return (
    <>
      <Header />
      <main className={css.container}>
        <article className={css.body}>
          <h1>山口ケーブルテレビジョンでPRを行いました</h1>
          <img
            src='/article/pr-yamaguchi-cable-vision_00.jpg'
            loading='lazy'
            decoding='async'
            alt='山口ケーブルテレビジョンで、学生会実行委員長と高専祭実行委員長が、ポスターを持って写真に映っている様子'
          />
          <p>
            この度、学生会実行委員長の上野と高専祭実行委員長の込山が、高専祭のPRのため、山口ケーブルテレビジョンに出演してきました！
            緊張しましたが、2人ともとても頑張りました。 高専祭までもう少し、みなさんで盛り上がっていきましょう！
          </p>
        </article>
        <LinkButton to='/'>戻る</LinkButton>
      </main>
    </>
  );
}
