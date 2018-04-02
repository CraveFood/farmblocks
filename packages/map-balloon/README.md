![logo-farmblocks](https://user-images.githubusercontent.com/7760/31051341-4d280118-a63c-11e7-9e8f-3b375ca8f9a0.png)

# Farmblocks Map Balloon

A React component to display pictures and a caption over a map. See
[Storybook](https://cravefood.github.io/farmblocks/index.html?selectedKind=Map
Balloon)

## Installation

```
npm install @crave/farmblocks-map-balloon
```

## Usage

```jsx
import React from "react";
import ReactDOM from "react-dom";
import MapBalloon from "@crave/farmblocks-map-balloon";

const root = document.createElement("div");

ReactDOM.render(
  <div
    style={{
      position: "relative",
      width: 500,
      height: 500,
      background: "lightcyan"
    }}
  >
    <MapBalloon
      x={50}
      y={400}
      open
      caption="My Farm"
      imageSet={[
        {
          name: "Strawberries",
          image: "https://source.unsplash.com/eCre0iMGtEA/800x800"
          // Photo by Clem Onojeghuo
        }
      ]}
    />
  </div>,
  root
);

document.body.appendChild(root);
```

### Required Font icon

This package assumes that the application using it uses a font icon that have a
farm symbol, and that the class name to include that icon is `.wg-purveyor`.

## API

* `x`: number (default: 0)
* `y`: number (default: 0)
* `align`: string (default: 'left') You can use our constants by importing the
  `alignments` object:
  * `import MapBalloon, { alignments } from "@crave/farmblocks-map-balloon";`
* `singleImage`: string. Path for a single image. If this prop is given, the
  balloon will show a smaller version with no caption
* `caption`: string (required if `logo` is not given). Text to show under the
  images.
* `imageSet`: array (required if `logo` is not given). Items should be objects
  with the following properties:
  * `name`: string (required). Text to show over the the image.
  * `image`: string (required). Path to product image.
* `open`: boolean (default: 0). Defines if the balloon wil be visible. Otherwise
  only the pin will be rendered
* `animated`: boolean (default: false). Defines if the balloon is animated or
  not
* `size`: number (default: 320). Balloon size
* `borderRadius`: string (default: 8px). Defines the balloon border radius
* `pinColor`: string (default: #f1c618). Color to be set to the pin icon
* `pinSize`: number (default: 18). Size to be set to the pin icon
* `opacity`: number (default: 1)

## License

MIT
