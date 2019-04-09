# Farmblocks hoc validation messages

A Higher Order Component that adds validation messages when a component is
invalid

## Installation

```
npm install @crave/farmblocks-hoc-validation-messages
```

## Usage

```
import React, { Component } from 'react';
import { render } from 'react-dom';
import withMessages from '@crave/farmblocks-hoc-validation-messages'

const WithMessagesInput = withMessages(props =>
  React.createElement("input", props)
);

const App = props => (
  <div>
    <WithMessagesInput validationMessages={['Required field']} />
  </div>
);

render(<App />, document.getElementById('root'));
```

## API

| Property           | Type             | Default     | Required | Description                                                         |
| ------------------ | ---------------- | ----------- | -------- | ------------------------------------------------------------------- |
| validationMessages | array of strings | []          |          | the error messages to be rendered                                   |
| onInvalid          | function         | () => false |          |                                                                     |
| errorIconSrc       | string           |             |          | the url for a custom icon to be displayed before all error messages |
| invalid            | boolean          | false       |          | `true` if there are any validationMessages                          |

## License

MIT
