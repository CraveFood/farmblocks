# Farmblocks Tooltip

A simple tooltip component.

![image](https://user-images.githubusercontent.com/17936244/41741170-b479620e-7570-11e8-9941-7c6f276704c6.png)

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
| hideArrow         | controls arrow visibility                                                                                                                                       | bool                                       |
| padding           | content padding                                                                                                                                                 | string                                     |

## License

MIT
