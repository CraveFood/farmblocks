# Farmblocks Tooltip

A simple tooltip component.

## Installation

```
npm install @crave/farmblocks-tooltip
```

## API

A text or children must be supplied, otherwise the tooltip won't be rendered.

| Property          | Description                                                                                                                                                     | Type                                       |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| children          | content to be rendered inside the tooltip                                                                                                                       | React.Node                                 |
| text              | tooltip text                                                                                                                                                    | string                                     |
| isVisible         | controls its visibility                                                                                                                                         | bool                                       |
| align             | controls its alignment to the parent                                                                                                                            | one of "left", "right", "center" or "auto" |
| bondariesSelector | (only for `align="auto"`) A CSS selector for a container which will define the limits for the tooltip. If not defined, the limit will be the browser's viewport | string                                     |
| zIndex            | zIndex value                                                                                                                                                    | number                                     |

## License

MIT
