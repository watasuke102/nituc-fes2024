// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
export interface Time {
  readonly hour: number;
  readonly minute: number;
}
function time(hour: number, minute: number): Time {
  return {hour, minute};
}

export interface TimeTableEntry {
  readonly begin: Time;
  readonly end: Time;
  readonly name: string;
  readonly place: 'primary_gym' | 'main_stage' | 'both';
}

export const timetable_first: TimeTableEntry[] = [
  {
    begin: time(9, 30),
    end: time(10, 0),
    name: 'オープニング（正門付近）',
    place: 'both',
  },
  {
    begin: time(10, 0),
    end: time(11, 0),
    name: 'ビンゴ大会',
    place: 'main_stage',
  },
  {
    begin: time(11, 30),
    end: time(13, 0),
    name: 'カラオケ大会\n（予選）',
    place: 'main_stage',
  },

  {
    begin: time(10, 0),
    end: time(16, 15),
    name: 'バンド',
    place: 'primary_gym',
  },
  {
    begin: time(16, 30),
    end: time(17, 0),
    name: '吹奏楽部',
    place: 'primary_gym',
  },
  {
    begin: time(17, 15),
    end: time(18, 45),
    name: 'ダンス',
    place: 'primary_gym',
  },
];

export const timetable_second: TimeTableEntry[] = [
  {
    begin: time(10, 0),
    end: time(11, 30),
    name: '○×クイズ大会',
    place: 'main_stage',
  },
  {
    begin: time(12, 0),
    end: time(13, 30),
    name: 'カラオケ大会\n（決勝）',
    place: 'main_stage',
  },

  {
    begin: time(10, 0),
    end: time(15, 45),
    name: 'バンド',
    place: 'primary_gym',
  },
  {
    begin: time(16, 0),
    end: time(16, 30),
    name: '抽選会（前半）',
    place: 'primary_gym',
  },
  {
    begin: time(16, 40),
    end: time(17, 10),
    name: '仮装コンテスト',
    place: 'primary_gym',
  },
  {
    begin: time(17, 20),
    end: time(17, 50),
    name: '抽選会（後半）',
    place: 'primary_gym',
  },
  {
    begin: time(18, 10),
    end: time(19, 0),
    name: 'エンディング（正門付近）',
    place: 'both',
  },
];
