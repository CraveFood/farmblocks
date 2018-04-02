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

* `x`: number (default: 0). The x position of the pin, in pixels.
* `y`: number (default: 0). The y position of the pin, in pixels.
* `align`: string (default: 'left') The alignment of the balloon relative to the
  pin. You can use our constants by importing the `alignments` object:
  * `import MapBalloon, { alignments } from "@crave/farmblocks-map-balloon";`
* `singleImage`: string. Path for a single image to be displayed in a smaller
  balloon without caption.
* `caption`: string (required if `singleImage` is not used). Text to show under
  the images.
* `imageSet`: array (required if `singleImage` is not used). The list of images
  to be displayed on a balloon. Items should be objects with the following
  properties:
  * `name`: string (required). Text to show over the the image.
  * `image`: string (required). Path to product image.
* `open`: boolean (default: 0). Defines if the balloon wil be visible. Otherwise
  only the pin will be rendered
* `animated`: boolean (default: false). Defines if the balloon is animated or
  not
* `balloonSize`: number (default: 260). Balloon size
* `borderRadius`: string (default: 8px). Defines the balloon border radius
* `pinColor`: string (default: #f1c618). Color to be set to the pin icon
* `pinSize`: number (default: 40). Size to be set to the pin icon
* `opacity`: number (default: 1)
* `captionSize`: number (default: 18), Size of the caption text.
* `imageTextSize`: number (default: 28), Size of the text overlay on images.

## License

MIT
