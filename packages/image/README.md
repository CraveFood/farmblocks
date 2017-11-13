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
const React = require("react");
const ReactDOM = require("react-dom");
const Image = require("@crave/farmblocks-image").default;
const { thumbnailSizes, badgeSizes } = require("@crave/farmblocks-image")";

const root = document.createElement("div");

ReactDOM.render(
  <Image
    src=""
    type={imageTypes.BADGE}
    size={badgeSizes.MEDIUM}
  />,
  root
);

document.body.appendChild(root);
```

## API

TBD

## License

MIT
