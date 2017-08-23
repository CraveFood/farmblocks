/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import {configure} from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

import '../src/assets/fonts/fonticon.scss';
import '../src/assets/fonts/lato/fontlato.scss';

const req = require.context('../src/', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

// addon-info
setDefaults({
  inline: true,
  maxPropsIntoLine: 1,
  maxPropObjectKeys: 10,
  maxPropArrayLength: 10,
  maxPropStringLength: 100,
});
