# Farmblocks Checkbox Inputs

Input elements that behaves like a toggle:

- Checkbox
- Switch

## Installation

```
npm install @crave/farmblocks-input-checkbox
```

## Usage

```javascript
import React, { Component } from "react";
import { render } from "react-dom";
import { Checkbox, Switch } from "@crave/farmblocks-input-checkbox";

const root = document.createElement("div");
document.body.appendChild(root);

render(
  <div>
    <Checkbox label="Checkbox Label" />
    <Switch label="Switch Label" />
    <Checkbox checked label="Checkbox Label" />
    <Switch checked label="Switch Label" />
    <Checkbox disabled checked label="Checkbox Label" />
  </div>,
  root,
);
```

See the stories source code for more usage examples.

## Properties

The core of the Checkbox and Switch components is an html `input` element of
type `type="checkbox"`. So the APIs are very similar.

This component also accepts the properties `disabled` and `tooltipText` from the
[Disabled Tooltip HOC](https://github.com/CraveFood/farmblocks/tree/master/packages/hoc-disabled-tooltip)

### Extra Properties

In addition to the properties described above, there are some other optional
properties:

| property | type     | description                                       |
| -------- | -------- | ------------------------------------------------- |
| label    | string   | a text to be used as label for the checkbox field |
| innerRef | function | ref function passed to the component              |

## License

MIT
