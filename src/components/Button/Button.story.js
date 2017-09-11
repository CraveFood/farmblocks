import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {action} from '@storybook/addon-actions';

import Button from './index';

storiesOf('Button', module)
  .add('Primary', withInfo('Default usage')(() => (
    <Button onClick={action('buttonClicked')} text='Primary Button'/>
  )))
  .add('Disabled', withInfo()(() => (
    <Button disabled onClick={action('buttonClicked')} text='Disabled Button'/>
  )))
  .add('Primary with Icon', () => (
    <Button onClick={action('buttonClicked')} icon='wg-meat' text='Primary with Icon'/>
  ))
  .add('Secondary', () => (
    <Button type='secondary' onClick={action('buttonClicked')} text='Secondary Button'/>
  ))
  .add('Request', () => (
    <Button type='request' onClick={action('buttonClicked')} text='Request Button'/>
  ))
  .add('Closed', () => (
    <Button type='closed' onClick={action('buttonClicked')} text='Closed Button'/>
  ))
  .add('Neutral', () => (
    <Button type='neutral' onClick={action('buttonClicked')} text='Neutral Button'/>
  ))
  .add('Neutral Off', () => (
    <div style={{backgroundColor: 'gray', padding: '10px', display: 'inline-block'}}>
      <Button type='neutral-off' onClick={action('buttonClicked')} text='Neutral Off Button'/>
    </div>
  ))
  .add('Large button', () => (
    <Button size='large' onClick={action('buttonClicked')} text='Large Button'/>
  ))
  .add('Icon only', () => (
    <Button type='neutral' onClick={action('buttonClicked')} icon='wg-edit'/>
  ))
  .add('Icon only (disabled)', () => (
    <Button disabled type='neutral' onClick={action('buttonClicked')} icon='wg-edit'/>
  ))
  .add('Icon only (large)', () => (
    <Button type='neutral' size='large' onClick={action('buttonClicked')} icon='wg-edit'/>
  ));
