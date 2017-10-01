<img src="https://user-images.githubusercontent.com/7760/31051341-4d280118-a63c-11e7-9e8f-3b375ca8f9a0.png" width="400" />

# Farmblocks-Alert 

A React component for displaying messages on an alert bar.

## Installation

```
npm install @crave/farmblocks-alert
```

## Spec

![screen shot 2017-09-24 at 6 13 31 pm](https://user-images.githubusercontent.com/7760/30786905-30965154-a154-11e7-9659-bf78d3773068.png)

## Usage

```jsx
const React = require("react");
const ReactDOM = require("react-dom");
const Alert = require("@crave/farmblocks-alert").default;
const { AlertTypes } = require("@crave/farmblocks-alert");

const root = document.createElement("div");

ReactDOM.render(
  <Alert
    dismissable
    type={AlertTypes.POSITIVE}
    text="Positive alert!"
    onDismiss={() => {
      console.log("dismiss button clicked");
    }}
  />,
  root
);

document.body.appendChild(root);
```

## API

See it [in the source](https://github.com/CraveFood/farmblocks/blob/feature/alert-component/packages/alert/src/index.js#L25-L36)

## License

MIT
