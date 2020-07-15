# Farmblocks Amount selectors

An amount selector component

## Installation

```bash
npm install @crave/farmblocks-amount-selectors
```

## Usage

```jsx
import AmountSelectors from "@crave/farmblocks-amount-selectors";
const Form = () => (
  <AmountSelectors
    onChange={handleChanges}
    max={100}
    min={1}
    onRemoveClick={handleRemoveClick}
  />
);
```

For more examples and details on the available props, [read the docs](https://cravefood.github.io/farmblocks/?path=/docs/form-amountselectors--basic).

## License

MIT
