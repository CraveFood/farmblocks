# Farmblocks-Image 

A react component for thumbnail images

## Installation

```
npm install @crave/farmblocks-image
```

## Spec
TBD

## Usage

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Image, { imageTypes, thumbnailSizes, badgeSizes } from "@crave/farmblocks-image";

const root = document.createElement("div");

const imageUrl = "https://openclipart.org/image/300px/svg_to_png/290343/1510649016.png&disposition=attachment";

ReactDOM.render(
  <Image
    src={imageUrl}
    size={badgeSizes.LARGE}
    badge
  />,
  root
);

document.body.appendChild(root);
```

## API

TBD

## License

MIT
