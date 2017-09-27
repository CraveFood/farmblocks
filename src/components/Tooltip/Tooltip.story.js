import React from 'react';
import {storiesOf} from '@storybook/react';

import Tooltip from './Tooltip';

storiesOf('Tooltip', module)
  .add('isVisible true', () => (
    <div style={{position: 'relative', width: '65px'}}>
      <Tooltip isVisible text='Hey yo'/>
    </div>
  ))
  .add('isVisible false', () => (
    <div style={{position: 'relative', width: '65px'}}>
      <Tooltip isVisible={false} text='Hey yo'/>
    </div>
  ));
