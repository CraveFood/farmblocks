# Farmblocks Text Input

A form field to input simple text

## Installation

```
npm install @crave/farmblocks-input-text
```

## Usage

```javascript
import React, { Component } from "react";
import { render } from "react-dom";
import TextInput, { TextAreaInput } from "@crave/farmblocks-input-text";

const root = document.createElement("div");
document.body.appendChild(root);

render(
  <div>
    <TextInput label="Text Field" placeholder="enter a text..." />
    <TextInput disabled label="Disabled Field" placeholder="disabled field" />
    <TextInput
      label="Number Field"
      type="number"
      placeholder="enter a number"
    />
    <TextAreaInput label="Text area input" rows="4" />
  </div>,
  root,
);
```

For more examples and details on the available props, [read the docs](https://cravefood.github.io/farmblocks/?path=/docs/form-text-input--basic).

## License

MIT
