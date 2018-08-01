# Farmblocks Dropdown

Simple dropdown component. See [examples](https://cravefood.github.io/farmblocks/index.html?selectedKind=Dropdown) on storybook

## Installation

```
npm install @crave/farmblocks-dropdown
```

## Usage

```
import React, { Component } from 'react';
import { render } from 'react-dom';
import {Dropdown, DropdownItem} from '@crave/farmblocks-dropdown';

class App extends Component {
  render() {
    return (
      <Dropdown text='Select fruit'
                align='left'
                handleSelection={(value, event) => console.log('handle selection', value)}>
        <DropdownItem value={1}>Banana</DropdownItem>
        <DropdownItem value={2}>Apple</DropdownItem>
        <DropdownItem value={3}>Strawberry</DropdownItem>
      </Dropdown>
    );
  }
}

render(<App />, document.getElementById('root'));
```

This code will render:

![image](https://user-images.githubusercontent.com/17936244/35000319-3a1b4d12-facb-11e7-9f2a-1b3024772f0f.png)

![image](https://user-images.githubusercontent.com/17936244/35000359-5cff49e6-facb-11e7-864f-b4abdb32e639.png)

## API

### Dropdown

| Property        | Description                                                                                                                             | Type                     | Required | Default            |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | -------- | ------------------ |
| children        | Pass children of DropdownItem instances                                                                                                 | node                     | x        |                    |
| text            | The dropdown label. Renders only the icon if this property is empty                                                                     | string                   |          | ''                 |
| handleSelection | Function to handle selection of a DropdownItem. The first argument is the value, the second is the event                                | function                 |          | () => false        |
| align           | Align of dropdown items container                                                                                                       | oneof(['left', 'right']) |          | left               |
| zIndex          | z-index passed to the dropdown items container                                                                                          | number                   |          |                    |
| width           | Custom dropdown items container width                                                                                                   | string                   |          |                    |
| size            | One of the constants in `buttonSizes` from `farmblocks-button` package. For convenience, `buttonSizes` is also exported on this package | string                   |          | buttonSizes.MEDIUM |

### DropdownItem

| Property | Description                                                                                                            | Type             | Required | Default |
| -------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------- | -------- | ------- |
| children | content to be rendered as the item text                                                                                | node             |          |         |
| text     | This property is rendered as children of the item component. If passed, it suppress the children property              | string           |          |         |
| value    | Option value. This property will be passed as the first argument on `handleSelection` property from Dropdown component | string or number |          |         |
| footer   | Flag to use on a last item to behave like a footer, without hover color and regular cursor                             |                  | false    |

## License

MIT
