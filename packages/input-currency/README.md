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
  root
);
```

See the stories source code for more usage examples.

## Properties

This component is an extension of the [farmblocks-input-text](https://www.npmjs.com/package/@crave/farmblocks-input-text) using [react-currency-input](https://www.npmjs.com/package/react-currency-input) instead of a regular html input. So the props for those packages are available here as well.

Here is a list of the most common props to be used with currency:

| property          | type    | description                                  | default | required |
| ----------------- | ------- | -------------------------------------------- | ------- | -------- |
| label             | string  | A text to be used as label for the field     |         | no       |
| value             | number  | The initial currency value                   | `0`     | no       |
| precision         | number  | Number of digits after the decimal separator | `2`     | no       |
| decimalSeparator  | string  | The decimal separator                        | `"."`   | no       |
| thousandSeparator | string  | The thousand separator                       | `","`   | no       |
| allowNegative     | boolean | Allows negative numbers in the input         | `false` | no       |
| prefix            | string  | Text to display at left of the input         |         | no       |
| suffix            | string  | Text to display at right of the input        |         | no       |

## License

MIT
