---
name: 'page'
root: './src'
output: '.'
ignore: []
questions:
  slug: 'slug    : '
  name: 'name(ja): '
---

# `pages/{{ inputs.slug }}.tsx`

```tsx
// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from '../styles/{{ inputs.slug }}.css';
import React from 'react';
import {Seo} from '../common/Seo/Seo';
import {Header} from '../common/Header';

export const Head = (): React.ReactElement => (
  <Seo title_prefix='{{ inputs.name }}' desc='' url='/{{ inputs.slug }}' />
);

export default function {{ pascal(inputs.slug) }}(): JSX.Element {
  return (
    <>
      <Header />
      <main className={css.container}>
        <h1>{{ inputs.name }}</h1>
      </main>
    </>
  );
}

```

# `styles/{{ inputs.slug }}.css.ts`

```ts
// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';

export const container = style({
  paddingTop: 76,
  textAlign: 'center',
});
```
