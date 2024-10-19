// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './Header.css';
import React from 'react';
import cs from 'classnames';
import {Link} from 'gatsby';

export function Header(): JSX.Element {
  const [is_open, set_is_open] = React.useState(false);

  const links = [
    {to: '/timetable', text: 'タイムテーブル'},
    {to: '/events', text: 'イベント'},
    {to: '/exhibitions', text: '展示・バザー'},
    {to: '/map', text: '場内マップ・アクセス'},
  ];

  return (
    <header className={css.header}>
      <div className={css.main}>
        <Link to='/' className={css.logo}>
          <img alt='' src='/logo.png' loading='eager' style={{height: '100%'}} />
        </Link>
        <button
          className={css.menu_opener}
          aria-label='toggle menu'
          aria-expanded={is_open}
          onClick={() => set_is_open(f => !f)}
        >
          <span className={cs(css.icon, is_open && css.icon_opening)} aria-hidden />
        </button>
      </div>
      <nav className={cs(css.menu, is_open && css.menu_opening)}>
        <ul className={css.menu_links}>
          {links.map(e => (
            <li key={e.to}>
              <Link to={e.to} className={css.menu_link_item}>
                {e.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
