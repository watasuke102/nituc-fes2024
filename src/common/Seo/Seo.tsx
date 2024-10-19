// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import React from 'react';

interface Props {
  title_prefix: string;
  desc: string;
  url: string; // '/'から始まる
}

export const Seo = (props: Props): React.ReactElement => {
  const title = `${props.title_prefix === '' ? '' : props.title_prefix + ' | '} 宇部高専 第61回高専祭`;
  const url = `https://nituc-fes61.org${props.url}`;
  const desc = `2024年度 宇部工業高等専門学校 第61回高専祭「YOISYO!」 公式Webサイト | ${props.desc}`;
  return (
    <>
      <title>{title}</title>
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:url' content={url} />
      <meta property='og:image' content='https://nituc-fes61.org/icon.jpg' />
      <meta property='og:description' content={desc} />
      <meta name='description' content={desc} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:url' content={url} />
      <meta name='twitter:image' content='https://nituc-fes61.org/icon.jpg' />
      <meta name='twitter:description' content={desc} />
    </>
  );
};
