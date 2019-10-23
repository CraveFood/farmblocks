# Farmblocks Select Input

A component for rendering Select inputs

## Installation

```
npm install @crave/farmblocks-input-select
```

## Usage

```
import React, { Component } from 'react';
import { render } from 'react-dom';
import Select from '@crave/farmblocks-input-select';

const items = [
  { value: "1", label: "Apple" },
  { value: "2", label: "Banana" },
  { value: "3", label: "Pear" }
];

class App extends Component {
  render() {
    return (
      <Select
        placeholder="Select fruit"
        label="Fruit"
        items={items}
        onChange={(value) => console.log("onChange", value)}
      />
    );
  }
}

render(<App />, document.getElementById('root'));
```

This code will render:

![image](https://user-images.githubusercontent.com/17936244/35926509-785b6fd0-0c0f-11e8-8d3f-b1c44917f108.png)

## API

| Property         | Description                                                                                                                        | Type                                                               | Required | Default     |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -------- | ----------- |
| items            | Items to be rendered as options                                                                                                    | ArrayOf({ value: string, label: string, image: (optional)string }) | x        |             |
| value            | Selected option                                                                                                                    | string, number or array of those (for multi)                       |          |             |
| width            | Width of the component                                                                                                             | string                                                             |          | 200px       |
| onChange         | Function to handle selection of an item.                                                                                           | onChange(value:string)                                             |          | () => false |
| renderItem       | Custom render item function                                                                                                        | renderItem(item): node                                             |          |             |
| noResultsMessage | Custom no results message to be displayed when there is no result available on search                                              | string                                                             |          |             |
| disableSearch    | Disables item search                                                                                                               | boolean                                                            |          | false       |
| maxHeight        | Set a maximum height for the menu                                                                                                  | string                                                             |          |             |
| fontSize         | One of the constants in `fontSizes` from `farmblocks-theme` package. For convenience, `fontSizes` is also exported on this package | number                                                             |          |             |
| id               | DOM element Id attribute                                                                                                           | string                                                             |          |             |
| multi            | Defines if multiple items can be selected                                                                                          | boolean                                                            |          | false       |

## Subcomponent: Item

This subcomponent is exported so it can reused by components that have similar
visuals:

- `@crave/farmblocks-search-field`

### Usage

```jsx
import { Item } from "@crave/farmblocks-input-select";

const Component = () => (
  <div>
    <Item label="First Item" />
    <Item label="Second Item" />
  </div>
);
```

### API

| Property | Description                       | Type   | Required | Default |
| -------- | --------------------------------- | ------ | -------- | ------- |
| label    | Text to display on Item           | string | x        |         |
| image    | Path for image to display on Item | string |          |         |

## License

MIT
