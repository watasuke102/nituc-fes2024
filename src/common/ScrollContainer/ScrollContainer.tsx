// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {css} from './ScrollContainer.css';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export function ScrollContainer(props: Props): JSX.Element {
  return <div className={css.container}>{props.children}</div>;
}
