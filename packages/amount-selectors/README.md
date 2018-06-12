# Farmblocks Amount selectors

A simple amount selector component.

## Installation

```
npm install @crave/farmblocks-amount-selectors
```

## API

| Property | Description | Type |
|----------|-------------|------|
| value | initial value of the selector | number |
| step | interval of increases or decreases | number |
| min | minimum amount available | number |
| max | maximum amount available | number |
| onChange | function to handle the input onChange event | function |
| disableTyping | disables direct typing | bool |
| enforceStep | disable both buttons when a number outside of the step is typed | bool |
| size | size of the amount selector | one of selectorSizes.SMALL or selectorSizes.MEDIUM |

## License

MIT
