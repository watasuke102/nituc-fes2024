// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from '../styles/exhibitions.css';
import React from 'react';
import cs from 'classnames';
import {Seo} from '../common/Seo/Seo';
import {Header} from '../common/Header';
import {BazaarMap, ExhibitsMap} from '../features/Map';
import {bazaar, ExhibitInfo, exhibits} from '../data/exhibitions';
import {ScrollContainer} from '../common/ScrollContainer';

export const Head = (): React.ReactElement => <Seo title_prefix='展示・バザー' desc='' url='/exhibitions' />;

function ExhibitTable(props: {info: ExhibitInfo[]}): JSX.Element {
  return (
    <ScrollContainer>
      <table className={css.table}>
        <thead className={css.thead}>
          <tr>
            <th className={css.cell}>場所</th>
            <th className={css.cell}>団体</th>
            <th className={css.cell}>概要</th>
          </tr>
        </thead>
        <tbody className={css.tbody}>
          {props.info.map(e => {
            return (
              <tr key={e.place}>
                <td className={cs(css.cell, css.place)}>{e.place}</td>
                <td className={css.cell}>{e.org}</td>
                <td className={css.cell}>{e.desc}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </ScrollContainer>
  );
}

export default function Exhibitions(): JSX.Element {
  return (
    <>
      <Header />
      <main className={css.container}>
        <h1>展示・バザー</h1>
        <section>
          <h2>バザー</h2>
          <BazaarMap />
          <ExhibitTable info={bazaar} />
        </section>
        <section>
          <h2>展示</h2>
          <ExhibitsMap />
          <ExhibitTable info={exhibits} />
        </section>
      </main>
    </>
  );
}
