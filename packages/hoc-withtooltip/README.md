# Farmblocks HOC-withTooltip

A Higher Order Component that handles Farmblocks-Tooltip visibility.

## Installation

```
npm install @crave/farmblocks-hoc-withtooltip
```

## Usage

This HOC takes as argument a component or HTML element which will work as a trigger for a tooltip, firing its visibility when `onMouseOver`, and hiding it `onMouseLeave`.

```
import React, { Component } from 'react';
import { render } from 'react-dom';
import withTooltip from '@crave/farmblocks-hoc-withTooltip'

const InputWithTooltip = withTooltip("input");

const App = props => (
  <div>
    <InputWithTooltip tooltipContent="This is the text rendered inside the tooltip" />
  </div>
);

render(<App />, document.getElementById('root'));
```

## API

| Property       | Type                     | Default | Description                                                                           |
| -------------- | ------------------------ | ------- | ------------------------------------------------------------------------------------- |
| disableTooltip | boolean                  | `false` | disables tooltip rendering                                                            |
| tooltipContent | string or PropTypes.node |         | content to be rendered inside the tooltip. If empty, the tooltip will not be rendered |
| tooltipProps   | object                   |         | props to be passed to Tooltip component                                               |
| onMouseOver    | function                 |         | function to be run when the mouse enters the trigger component                        |
| onMouseLeave   | function                 |         | function to be run when the mouse leaves the trigger component                        |

## License

MIT
