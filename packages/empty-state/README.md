![logo-farmblocks](https://user-images.githubusercontent.com/7760/31051341-4d280118-a63c-11e7-9e8f-3b375ca8f9a0.png)

# Empty State

A placeholder to use on screens without content.

## Usage

```jsx
import React from "react";
import { render } from "react-dom";

import EmptyState from "@crave/farmblocks-empty-state";

const text =
  "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.";
const imgSrc =
  "https://sourcewhatsgood.com/assets/images/utility_images/gallery-third-about-a518a29f64.jpg";

const App = () => (
  <EmptyState
    imageSrc={imgSrc}
    title="Empty State Title"
    description={text}
    actions={[
      {
        text: "Primary Action",
        onClick: () => console.log("clicked"),
        type: buttonTypes.PRIMARY,
      },
    ]}
    info={text}
  />
);

render(<App />, document.getElementById("root"));
```

## API

| property    | type             | description                                                                                                                                                                                                    | Required |
| ----------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| title       | string           | a text that is bold and will be rendered on the first line                                                                                                                                                     | Yes      |
| description | string           | a text that will be rendered bellow title                                                                                                                                                                      |          |
| imageSrc    | string           | image source to be rendered. This property overrides `icon` if both are present                                                                                                                                |          |
| icon        | node             | icon name to be rendered                                                                                                                                                                                       |          |
| actions     | array of objects | each object corresponds to one button that will be rendered. We expect 3 required properties on each object: text (string), type(string) a valid farmblocks-theme.buttonTypes or any color, onClick (function) |          |
| info        | string           | a text that is smaller than the others and will be rendered bellow buttons                                                                                                                                     |          |

## License

MIT
