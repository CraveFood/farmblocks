import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

import Tooltip from './Tooltip';

storiesOf('Tooltip', module)
.add('Default', withInfo()(() => (
    <div style={{position: 'relative', width: '40px'}}>
        <Tooltip text='Hey yo'/>
    </div>
)));
