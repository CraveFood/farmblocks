# Farmblocks Disabled Tooltip HOC

A Higher Order Component that adds the behaviour of displaying a tooltip when a component is disabled (disabled property true)

## Installation

```
npm install @crave/farmblocks-hoc-disabled-tooltip
```

## Usage

```jsx
import React from "react";
import ReactDOM from "react-dom";
import disabledTooltip from "@crave/farmblocks-hoc-disabled-tooltip";

const MyComponent = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);
const ButtonWithDisabledTooltip = disabledTooltip(MyComponent);

const root = document.createElement("div");

ReactDOM.render(
  <div>
    <ButtonWithDisabledTooltip>
      My Button
    </ButtonWithDisabledTooltip>
    <ButtonWithDisabledTooltip
      disabled
      tooltipText="my custom text"
      tooltipAlign="right"
    >
      My Disabled Button
    </ButtonWithDisabledTooltip>
  </div>,
  root
);

document.body.appendChild(root);
```

See more examples in the stories file.

## API

This HOC will add the following properties to a given component:

| Property | Type | Description |
|----------|------|-------------|
| disabled | Boolean | a flag that indicates that the element is disabled, and so should display the tooltip |
| tooltipAlign | String, one of "left" or "right" | Which side to align the disabled tooltip balloon |
| tooltipText | String | A custom text to display as tooltip when the component is disabled |
| displayBlock | Boolean | use this flag to override the default css style of the resulting element from ``inline-block`` to ``block`` | 

## License

MIT
