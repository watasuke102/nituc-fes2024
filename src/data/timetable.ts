// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {Time} from './time';

export interface BandEntry {
  readonly begin: Time;
  readonly end: Time;
  readonly name: string;
}
export type TimeTableEntry = BandEntry & {
  place: 'primary_gym' | 'main_stage' | 'both';
};

export const timetable_first: TimeTableEntry[] = [
  {
    begin: new Time(9, 30),
    end: new Time(10, 0),
    name: 'オープニング（正門付近）',
    place: 'both',
  },
  {
    begin: new Time(10, 0),
    end: new Time(11, 0),
    name: 'ビンゴ大会',
    place: 'main_stage',
  },
  {
    begin: new Time(11, 30),
    end: new Time(13, 0),
    name: 'カラオケ大会\n（予選）',
    place: 'main_stage',
  },

  {
    begin: new Time(10, 0),
    end: new Time(16, 15),
    name: 'バンド',
    place: 'primary_gym',
  },
  {
    begin: new Time(16, 30),
    end: new Time(17, 0),
    name: '吹奏楽部',
    place: 'primary_gym',
  },
  {
    begin: new Time(17, 15),
    end: new Time(18, 45),
    name: 'ダンス',
    place: 'primary_gym',
  },
];

export const timetable_second: TimeTableEntry[] = [
  {
    begin: new Time(10, 0),
    end: new Time(11, 30),
    name: '○×クイズ大会',
    place: 'main_stage',
  },
  {
    begin: new Time(12, 0),
    end: new Time(13, 30),
    name: 'カラオケ大会\n（決勝）',
    place: 'main_stage',
  },

  {
    begin: new Time(10, 0),
    end: new Time(15, 45),
    name: 'バンド',
    place: 'primary_gym',
  },
  {
    begin: new Time(16, 0),
    end: new Time(16, 30),
    name: '抽選会（前半）',
    place: 'primary_gym',
  },
  {
    begin: new Time(16, 40),
    end: new Time(17, 10),
    name: '仮装コンテスト',
    place: 'primary_gym',
  },
  {
    begin: new Time(17, 20),
    end: new Time(17, 50),
    name: '抽選会（後半）',
    place: 'primary_gym',
  },
  {
    begin: new Time(18, 10),
    end: new Time(19, 0),
    name: 'エンディング（正門付近）',
    place: 'both',
  },
];

export const band_first: BandEntry[] = [
  {
    begin: new Time(10, 0),
    end: new Time(10, 20),
    name: 'テノナル',
  },
  {
    begin: new Time(10, 30),
    end: new Time(10, 50),
    name: 'thee ELLE gun elephant',
  },
  {
    begin: new Time(11, 0),
    end: new Time(11, 20),
    name: 'Next Stage',
  },
  {
    begin: new Time(11, 30),
    end: new Time(11, 50),
    name: 'スイミンブソク',
  },
  {
    begin: new Time(12, 0),
    end: new Time(12, 20),
    name: 'キラキラユー',
  },
  {
    begin: new Time(12, 50),
    end: new Time(13, 10),
    name: 'As usual',
  },
  {
    begin: new Time(13, 20),
    end: new Time(13, 40),
    name: 'Saucy Dog cover.',
  },
  {
    begin: new Time(13, 50),
    end: new Time(14, 10),
    name: 'mic',
  },
  {
    begin: new Time(14, 20),
    end: new Time(14, 40),
    name: '特急呪物',
  },
  {
    begin: new Time(14, 50),
    end: new Time(15, 10),
    name: '泡沫シアン',
  },
  {
    begin: new Time(15, 20),
    end: new Time(15, 40),
    name: 'The Humble Cats',
  },
  {
    begin: new Time(15, 50),
    end: new Time(16, 15),
    name: 'Xe-キセノン-',
  },
];

export const band_second: BandEntry[] = [
  {
    begin: new Time(10, 0),
    end: new Time(10, 20),
    name: '鼻先ティラミス',
  },
  {
    begin: new Time(10, 30),
    end: new Time(10, 50),
    name: 'Go with the flow',
  },
  {
    begin: new Time(11, 0),
    end: new Time(11, 20),
    name: 'Oasis',
  },
  {
    begin: new Time(11, 30),
    end: new Time(11, 45),
    name: '凸凹フレンズ',
  },
  {
    begin: new Time(11, 55),
    end: new Time(12, 15),
    name: 'Eat my honEy',
  },
  {
    begin: new Time(12, 45),
    end: new Time(13, 5),
    name: 'looser',
  },
  {
    begin: new Time(13, 15),
    end: new Time(13, 35),
    name: 'ベイブ',
  },
  {
    begin: new Time(13, 45),
    end: new Time(14, 5),
    name: 'コレザワ',
  },
  {
    begin: new Time(14, 15),
    end: new Time(14, 35),
    name: 'mistero',
  },
  {
    begin: new Time(14, 45),
    end: new Time(15, 5),
    name: 'コピシカ',
  },
  {
    begin: new Time(15, 15),
    end: new Time(15, 45),
    name: 'わたしたち',
  },
];
