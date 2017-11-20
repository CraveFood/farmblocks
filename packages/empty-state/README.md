![logo-farmblocks](https://user-images.githubusercontent.com/7760/31051341-4d280118-a63c-11e7-9e8f-3b375ca8f9a0.png)

# Empty State

A placeholder to use on screens without content.

## Design specs

- [Neutral Empty State](https://scene.zeplin.io/project/595a9cd3b401bf1876faab27/screen/59f0df31487698229288a969)
- [Customized Empty State](https://scene.zeplin.io/project/595a9cd3b401bf1876faab27/screen/59f0df31bbc93198a853bbd7)
- [In Section - Empty States](https://scene.zeplin.io/project/595a9cd3b401bf1876faab27/screen/59f0df3106cb3d119936d6d6)

## Usage

```jsx
import React from 'react';
import { render } from 'react-dom';

import EmptyState from '@crave/farmblocks-empty-state';

const text =
  "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.";
const imgSrc =
  "https://sourcewhatsgood.com/assets/images/utility_images/gallery-third-about-a518a29f64.jpg";

const App = () => (
  <EmptyState
    imageSrc={imgSrc}
    title="Empty State Title"
    description={text}
    primaryActionText="Primary Action"
    onPrimaryActionClick={() => console.log("clicked")}
    info={text}
  />
);

render(<App />, document.getElementById('root'));
```

## API
Text properties: ``title``(required), ``description``, ``info``
Button: ``primaryButtonLabel``, ``onPrimaryButtonClick``
Thumbnail: ``imageSrc``

## License

MIT
