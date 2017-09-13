import React from 'react';
import {storiesOf} from '@storybook/react';

import Tooltip from './Tooltip';

storiesOf('Tooltip', module)
    .add('Default', () => (
        <div style={{position: 'relative', width: '40px'}}>
            <Tooltip text='Hey yo'/>
        </div>
    ));
