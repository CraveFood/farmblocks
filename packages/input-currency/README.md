# Farmblocks Currency Input

a form field to input currency values

## Installation

```
npm install @crave/farmblocks-input-currency
```

## Usage

```javascript
import React, { Component } from "react";
import { render } from "react-dom";
import CurrencyInput from "@crave/farmblocks-input-currency";

const root = document.createElement("div");
document.body.appendChild(root);

render(
  <div>
    <CurrencyInput prefix="$" value={123.45} />
  </div>,
  root,
);
```

See the stories source code for more usage examples.

## Properties

This component is an extension of the [farmblocks-input-text](https://www.npmjs.com/package/@crave/farmblocks-input-text) using [react-number-format](https://www.npmjs.com/package/react-number-format) instead of a regular html input. So the props for those packages are available
here as well.

For more examples and details on the available props, [read the docs](https://cravefood.github.io/farmblocks/?path=/docs/form-currency-input--basic#input-currency).

## License

MIT
