// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {Link} from 'gatsby';
import * as css from './LinkButton.css';
import React from 'react';

interface Props {
  to: string;
  children: string;
}

export function LinkButton(props: Props): JSX.Element {
  return (
    <Link className={css.link} to={props.to}>
      {props.children}
    </Link>
  );
}
