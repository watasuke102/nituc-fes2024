// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {css} from './ScrollContainer.css';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export function ScrollContainer(props: Props): JSX.Element {
  const [is_prompt_visible, set_is_prompt_visible] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      async objs => {
        if (objs[0]?.isIntersecting) {
          set_is_prompt_visible(true);
        }
      },
      {threshold: 0.55},
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className={css.container} ref={ref}>
      <div className={css.scroll_area}>{props.children}</div>
      {is_prompt_visible && <div className={css.prompt}>Scroll →</div>}
    </div>
  );
}
