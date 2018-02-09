# Farmblocks Checkbox Input

Checkbox form element.

## Installation

```
npm install @crave/farmblocks-input-checkbox
```

## Usage

```javascript
import React, { Component } from "react";
import { render } from "react-dom";
import { Checkbox } from "@crave/farmblocks-input-checkbox";

const root = document.createElement("div");
document.body.appendChild(root);

render(
  <div>
    <Checkbox label="Checkbox Label" />
    <Checkbox checked label="Checkbox Label" />
    <Checkbox
      disabled
      tooltipText="custom disabled text"
      checked
      label="Checkbox Label"
    />
  </div>,
  root
);
```

See the stories source code for more usage examples.

### Required Font icon

This package assumes that the application using it uses a font icon that have a
checkmark symbol, and that the class name to include that icon is `.wg-check`.

## Properties

The core of the Checkbox Input component is an html `input` element of type
`type="checkbox"`. So the APIs are very similar.

This component also accepts the properties `disabled` and `tooltipText` from the
[Disabled Tooltip HOC](https://github.com/CraveFood/farmblocks/tree/master/packages/hoc-disabled-tooltip)

### Extra Properties

In addition to the properties described above, there are some other optional
properties:

| property | type   | description                                       |
| -------- | ------ | ------------------------------------------------- |
| label    | string | a text to be used as label for the checkbox field |

## License

MIT
