// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {Time} from './time';

export interface TimeTableEntry {
  readonly begin: Time;
  readonly end: Time;
  readonly name: string;
  readonly place: 'primary_gym' | 'main_stage' | 'both';
}

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
