![logo-farmblocks](https://user-images.githubusercontent.com/7760/31051341-4d280118-a63c-11e7-9e8f-3b375ca8f9a0.png)

# Farmblocks-Theme

React components for displaying text. [Storybook](https://cravefood.github.io/farmblocks/)

## Design spec
See it on zeplin:
[Title](https://scene.zeplin.io/project/595a9cd3b401bf1876faab27/screen/59f0dee4b4c8ae0eea8769e4)
[Caption](https://scene.zeplin.io/project/595a9cd3b401bf1876faab27/screen/59f0dee25617ae2c1f2fcb26)
[Paragraph](https://scene.zeplin.io/project/595a9cd3b401bf1876faab27/screen/59f0dee4c7570f862449ae63)

## Usage

```jsx
import React from 'react';
import { render } from 'react-dom';
import { Title, Caption, Paragraph, fontSizes, fontTypes } from '@crave/farmblocks-text';

render(
  <div>
    <Title size={fontSizes.X_LARGE} type={fontTypes.NORMAL}>Content title </Title>
    <Caption size={fontSizes.LARGE} type={fontTypes.NORMAL} align='left'>Content caption</Caption>
    <Paragraph size={fontSizes.MEDIUM} type={fontTypes.NORMAL} align='left'>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.</Paragraph>
  </div>,
  document.getElementById('root'));


```

## API

See it in the source

## License

MIT
