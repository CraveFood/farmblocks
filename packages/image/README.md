# Farmblocks-Image 

A react component for thumbnail images

## Installation

```
npm install @crave/farmblocks-image
```

## Spec
Thumbnails: https://scene.zeplin.io/project/595a9cd3b401bf1876faab27/screen/59f0df2fee4fbc85eccb17b1
Badges: https://scene.zeplin.io/project/595a9cd3b401bf1876faab27/screen/59f0df31bbc93198a853bbe2

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

https://github.com/CraveFood/farmblocks/blob/master/packages/image/src/Image.js#L11-L19

## License

MIT
