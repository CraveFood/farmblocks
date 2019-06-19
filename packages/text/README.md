![logo-farmblocks](https://user-images.githubusercontent.com/7760/31051341-4d280118-a63c-11e7-9e8f-3b375ca8f9a0.png)

# Farmblocks-Text

React components for displaying text. [See Storybook](https://cravefood.github.io/farmblocks/?selectedKind=Text%2FDefault)

## Usage

You can combine the text props to create a full customizable text page.

```jsx
import React from "react";
import { render } from "react-dom";

import Text from "@crave/farmblocks-text";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

const App = () => (
  <div>
    <Text fontWeight="title" size={fontSizes.HUGE} type={fontTypes.FEATURED}>
      Content title
    </Text>

    <Text size={fontSizes.LARGE} type={fontTypes.NEUTRAL} lineHeight={2.5}>
      This is a normal text that can be used as a subtitle
    </Text>

    <Text
      paragraph
      size={fontSizes.MEDIUM}
      type={fontTypes.NORMAL}
      align="justify"
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries.
    </Text>
  </div>
);

render(<App />, document.getElementById("root"));
```

This code will render this:

![image](https://user-images.githubusercontent.com/17936244/32954636-d433fee0-cb9a-11e7-804d-423c376bac98.png)

## API

See it in the [source](https://github.com/CraveFood/farmblocks/blob/master/packages/text/src/components/Text.js#L13:#L18)

Also see the predefined [font sizes](https://github.com/CraveFood/farmblocks/blob/master/packages/theme/src/fontSizes.js) and [types](https://github.com/CraveFood/farmblocks/blob/master/packages/theme/src/fontTypes.js) available on [farmblocks-theme](https://github.com/CraveFood/farmblocks/tree/master/packages/theme) package

## License

MIT
