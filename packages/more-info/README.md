# Farmblocks More info

A component which renders a text, icon, and a tooltip when mouse is over the icon.

## Installation

```
npm install @crave/farmblocks-more-info
```

## API

A text or children must be supplied, otherwise the tooltip won't be rendered.

| Property | Description | Type |
|----------|-------------|------|
| icon | (required) triggers the tooltip display | string |
| children | (required) content to be rendered inside the tooltip | React.Node |
| text | displayed at the left of the icon | string |
| tooltipAlign | controls the tooltip alignment to the parent | one of "left", "right" or "center" |


## License

MIT