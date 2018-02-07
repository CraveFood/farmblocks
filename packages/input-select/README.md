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

| Property         | Description                                                                           | Type                                      | Required | Default     |
| ---------------- | ------------------------------------------------------------------------------------- | ----------------------------------------- | -------- | ----------- |
| items            | Items to be rendered as options                                                       | ArrayOf({ value: string, label: string }) | x        |             |
| value            | Selected option                                                                       | string                                    |          |             |
| onChange         | Function to handle selection of an item.                                              | onChange(value:string)                    |          | () => false |
| renderItem       | Custom render item function                                                           | renderItem(item): node                    |          |             |
| noResultsMessage | Custom no results message to be displayed when there is no result available on search | string                                    |          |             |

## License

MIT
