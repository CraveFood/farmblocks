import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Button from './index';

storiesOf('Button', module)
    .add('Primary', () => (
        <Button onClick={action('buttonClicked')} text='Give me something'/>
    ))
    .add('Disabled', () => (
        <Button disabled onClick={action('buttonClicked')} text='Give me something'/>
    ))
    .add('Primary with Icon', () => (
        <Button onClick={action('buttonClicked')} icon='wg-meat' text='Give me something'/>
    ))
    .add('Secondary', () => (
        <Button type='secondary' onClick={action('buttonClicked')} text='The Ocean'/>
    ))
    .add('Request', () => (
        <Button type='request' onClick={action('buttonClicked')} text='The Dogs'/>
    ))
    .add('Closed', () => (
        <Button type='closed' onClick={action('buttonClicked')} text='The Dogs'/>
    ))
    .add('Neutral', () => (
        <Button type='neutral' onClick={action('buttonClicked')} text='The Ocean'/>
    ))
    .add('Large button', () => (
        <Button size='large' onClick={action('buttonClicked')} text='Give me something'/>
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
