// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import React from 'react';
import {GatsbySSR} from 'gatsby';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({setHtmlAttributes, setHeadComponents}) => {
  setHtmlAttributes({lang: 'ja'});
  setHeadComponents([
    <link key='reset.css' rel='stylesheet' href='https://unpkg.com/@acab/reset.css@0.10.0/index.css' />,
    <link key='main' rel='stylesheet' href='main.css' />,
    <link key='pre-googleapis' rel='preconnect' href='https://fonts.googleapis.com' />,
    <link key='pre-gstatic' rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />,
    <link
      key='font'
      href='https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@500&display=swap'
      rel='stylesheet'
    />,
    <link key='favicon' rel='icon' type='image/svg+xml' href='favicon.ico' />,
  ]);
};
