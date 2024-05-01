import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import { _1920Px } from './components/_1920Px/_1920Px';
import resets from './components/_resets.module.css';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <_1920Px />
    </div>
  );
});
