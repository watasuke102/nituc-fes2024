// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
export function ZeroPadding(s: string | number) {
  const str = String(s);
  return `${str.length === 1 ? '0' : ''}${str}`;
}
