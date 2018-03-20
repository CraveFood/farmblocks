![logo-farmblocks](https://user-images.githubusercontent.com/7760/31051341-4d280118-a63c-11e7-9e8f-3b375ca8f9a0.png)

# Farmblocks Radio

Radio form element. See
[Storybook](https://cravefood.github.io/farmblocks/index.html?selectedKind=Radio)

## Installation

```
npm install @crave/farmblocks-input-radio
```

## Usage

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Radio, { RadioGroup } from "@crave/farmblocks-map-balloon";

const root = document.createElement("div");

ReactDOM.render(
  <div>
    <RadioGroup name="radioExample" defaultValue="second">
      <Radio value="first" label="First" />
      <Radio value="second" label="Second (default)" />
      <Radio value="third" label="Third (disabled)" disabled />
    </RadioGroup>
  </div>,
  root
);

document.body.appendChild(root);
```

## API

### Radio

* `label`: string
* `name`: string
* `checked`: boolean
* `disabled`: boolean
* `onClick`: function
* `onChange`: function
* `value`: any

### RadioGroup

* `defaultValue`: any. If set, the radio option with this value will be
  automatically checked.
* `name`: string. Will be given to all the children.
* `disabled`: boolean. If set, all the children will be disabled.
* `onChange`: function

## License

MIT
