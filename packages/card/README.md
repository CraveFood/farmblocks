# Farmblocks Card

A styled card to put content inside.

## Installation

```
npm install @crave/farmblocks-card
```

## API

| Property  | Description                                                                             | Type                                             | Default |
| --------- | --------------------------------------------------------------------------------------- | ------------------------------------------------ | ------- |
| floating  | if present, the card drops a bigger shadow                                              | boolean                                          | false   |
| type      | the type of card (reflects on background color)                                         | string (one of "FEATURED", "NEUTRAL", "DEFAULT") | DEFAULT |
| width     | a css value to be used as width                                                         | string                                           | 100%    |
| p         | padding. See [reference](https://styled-system.com/getting-started#margin--padding)     | number                                           | 2       |
| overflow  | a css value to be used as overflow                                                      | string                                           | visible |
| children  | the contents of the card                                                                | React.Node                                       |         |
| boxShadow | specifies a custom border shadow. Please note that this will override floating property | string                                           |         |

## Peer dependencies

- react
- prop-types
- styled-components
- styled-system

## License

MIT
