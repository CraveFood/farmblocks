![logo-farmblocks](https://user-images.githubusercontent.com/7760/31051341-4d280118-a63c-11e7-9e8f-3b375ca8f9a0.png)

# Farmblocks-Button

A React component for displaying buttons and actionable icons.

## Design Spec

![screen shot 2017-10-24 at 10 53 34 am](https://user-images.githubusercontent.com/7760/31944212-112c68e0-b8aa-11e7-9991-3c8a8bb46c52.png)

![screen shot 2017-10-24 at 10 54 43 am](https://user-images.githubusercontent.com/7760/31944159-ebcaffd0-b8a9-11e7-8771-57c02112c6a2.png) ![screen shot 2017-10-24 at 10 55 03 am](https://user-images.githubusercontent.com/7760/31944168-f063cab8-b8a9-11e7-8b2d-aa704bad4877.png)

## Usage

```jsx
const React = require("react");
const ReactDOM = require("react-dom");
const Button = require("@crave/farmblocks-button").default;
const { buttonTypes, buttonSizes } = require("@crave/farmblocks-button");

const root = document.createElement("div");

ReactDOM.render(
  <Button
    type={buttonTypes.NEUTRAL}
    size={buttonSizes.MEDIUM}
    text="Neutral Button"
    onClick={() => {
      console.log("button clicked");
    }}
  />,
  root
);

document.body.appendChild(root);
```

## API

See it [in the source](https://github.com/CraveFood/farmblocks/blob/master/packages/button/src/Button.js#L92-L112)

## License

MIT
