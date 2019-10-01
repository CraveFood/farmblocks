# Farmblocks Amount selectors

A simple amount selector component.

## Installation

```
npm install @crave/farmblocks-amount-selectors
```

## API

| Property                         | Description                                                                                 | Type                                               | Default                |
| -------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------- | ---------------------- |
| value                            | initial value of the selector                                                               | number                                             |                        |
| step                             | interval of increases or decreases                                                          | number                                             |                        |
| min                              | minimum amount available                                                                    | number                                             |                        |
| max                              | maximum amount available                                                                    | number                                             |                        |
| onChange                         | function to handle the input onChange event                                                 | function                                           |                        |
| disableTyping                    | disables direct typing                                                                      | bool                                               |                        |
| enforceStep                      | disable both buttons when a number outside of the step is typed                             | bool                                               |                        |
| size                             | size of the amount selector                                                                 | one of selectorSizes.SMALL or selectorSizes.MEDIUM |                        |
| disabled                         | disables both buttons and input                                                             | boolean                                            |                        |
| maxAmountMessage                 | message to be displayed when user types in a value above the maximum amount allowed         | string                                             | Reached maximum amount |
| minAmountMessage                 | message to be displayed when user types in a value below the minimum amount allowed         | string                                             | Reached minimum amount |
| showBoundariesMessageOnlyOnFocus | when set to true, the max/min amount message will be shown only when the input gets focused | bool                                               |                        |
| tooltipProps                     | props to be passed to TooltipContent when maxAmountMessage gets visible                     | object                                             |                        |

## License

MIT
