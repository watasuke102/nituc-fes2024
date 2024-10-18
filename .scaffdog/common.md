---
name: 'common'
root: './src'
output: '**'
ignore: []
questions:
  name: 'name: '
---

# `{{ pascal(inputs.name) }}/{{ pascal(inputs.name) }}.tsx`

```tsx
// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './{{ pascal(inputs.name) }}.css';
import React from 'react';

export function {{ pascal(inputs.name) }}(): JSX.Element {
  return(
    <></>
  );
}

```

# `{{ pascal(inputs.name) }}/{{ pascal(inputs.name) }}.css.ts`

```ts
// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {style} from '@vanilla-extract/css';

export const a = style({});
```

# `{{ pascal(inputs.name) }}/index.ts`

```ts
// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import { {{ pascal(inputs.name) }} } from './{{ pascal(inputs.name) }}';

export { {{ pascal(inputs.name) }} };

```
