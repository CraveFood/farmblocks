![logo-farmblocks](https://user-images.githubusercontent.com/7760/31051341-4d280118-a63c-11e7-9e8f-3b375ca8f9a0.png)

# Farmblocks-Image

A React component for thumbnail images. See
[Storybook](https://cravefood.github.io/farmblocks/index.html?selectedKind=Image)

## Installation

```
npm install @crave/farmblocks-image
```

## Spec

See it on zeplin: Thumbnails:
https://scene.zeplin.io/project/595a9cd3b401bf1876faab27/screen/59f0df2fee4fbc85eccb17b1
Badges:
https://scene.zeplin.io/project/595a9cd3b401bf1876faab27/screen/59f0df31bbc93198a853bbe2

## Usage

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Image, { thumbnailSizes, badgeSizes } from "@crave/farmblocks-image";

const root = document.createElement("div");

const imageUrl =
  "https://openclipart.org/image/300px/svg_to_png/290343/1510649016.png&disposition=attachment";

ReactDOM.render(<Image src={imageUrl} size={badgeSizes.LARGE} badge />, root);

document.body.appendChild(root);
```

## API

| Property     | Description                                                                                 | Type             |
| ------------ | ------------------------------------------------------------------------------------------- | ---------------- |
| src          | **required**, the URL of the image                                                          | string           |
| badge        | make the image a circle                                                                     | boolean          |
| borderRadius | the border radius of the image (it will be ignored if the _badge_ prop is true)             | string or number |
| fit          | how should the image fit the size (same options that the object-fit css attribute)          | string           |
| height       | the height of the image                                                                     | string or number |
| size         | if your image uses the same size in pixels for width and height, you can use this shorthand | number           |
| width        | the width of the image                                                                      | string           |

## Table of sizes

| Type                    | Value                    | Size result |
| ----------------------- | ------------------------ | ----------- |
| badge - extra small     | `badgeSizes.X_SMALL`     | 16 px       |
| badge - small           | `badgeSizes.SMALL`       | 24 px       |
| badge - medium          | `badgeSizes.MEDIUM`      | 40 px       |
| badge - large           | `badgeSizes.LARGE`       | 56 px       |
| thumbnail - small       | `thumbnailSizes.SMALL`   | 40 px       |
| thumbnail - medium      | `thumbnailSizes.MEDIUM`  | 48 px       |
| thumbnail - large       | `thumbnailSizes.LARGE`   | 72 px       |
| thumbnail - extra large | `thumbnailSizes.X_LARGE` | 120 px      |
| thumbnail - huge        | `thumbnailSizes.HUGE`    | 240 px      |

## License

MIT
