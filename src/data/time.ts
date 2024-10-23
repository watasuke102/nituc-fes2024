// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {ZeroPadding} from '../utils/ZeroPadding';

export class Time {
  constructor(readonly hour: number, readonly minute: number) {
    if (hour > 24 || minute > 60) {
      throw RangeError;
    }
  }
  public toString() {
    return `${ZeroPadding(this.hour)}:${ZeroPadding(this.minute)}`;
  }
}

export function time_from(hour: number, minute: number): Time {
  return {hour, minute};
}
