import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

import Tooltip from './Tooltip';

storiesOf('Tooltip', module)
  .add('isVisible true', withInfo()(() => (
    <div style={{position: 'relative', width: '65px'}}>
      <Tooltip isVisible text='Hey yo'/>
    </div>
  )))
  .add('isVisible false', withInfo('for snapshot testing (should be invisible)')(() => (
    <div style={{position: 'relative', width: '65px'}}>
      <Tooltip isVisible={false} text='Hey yo'/>
    </div>
  )));
