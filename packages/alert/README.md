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

See it [in the source](https://github.com/CraveFood/farmblocks/blob/master/packages/alert/src/Alert.js#L24-L35)

## Props

| Property      | Description                                                                                    | Type              | Default value     |
| ------------- | ---------------------------------------------------------------------------------------------- | ----------------- | ----------------- |
| text          | text to be displayed at the alert (required)                                                   | string            |
| type          | changes the alert color                                                                        | oneOf(AlertTypes) | `AlertTypes.NEWS` |
| dismissable   | allows the alert to be closed. If `false` it can't be closed by user action.                   | boolean           | `true`            |
| autoRemove    | automatically closes the alert after the amount of time set in `visibleTime` prop              | boolean           | `true`            |
| onDismiss     | function to be called when the alert is closed                                                 | function          | `() => null`      |
| visibleTime   | amount of time that the alert should be visible once `autoRemove` is `true` -- in milliseconds | number            | `2000`            |
| zIndex        | custom zIndex                                                                                  | number            | `2500`            |
| bottomAligned | align the alert on the bottom of its container, instead of the default `top` alignment         | boolean           | `false`           |

## License

MIT
