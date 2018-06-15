# Farmblocks popover

A customisable popover component

![2018-06-15 11 22 29](https://user-images.githubusercontent.com/17936244/41473024-777bf420-708e-11e8-9317-c2147449842a.gif)

## Installation

```
npm install @crave/farmblocks-popover
```

## Usage

```
<Popover
  trigger={<button>Trigger</button>}
  content={dismiss => (
    <div>
      <Text>Popover content</Text>
      <button onClick={dismiss}>Dismiss</button>
    </div>
  )}
/>
```

## API

| Property | Description                                                        | Type                                       | Required | Default |
| -------- | ------------------------------------------------------------------ | ------------------------------------------ | -------- | ------- |
| trigger  | A component that will be popover's trigger                         | node                                       | Yes      |         |
| content  | A render function with the contents to be displayed on the popover | function => node                           | Yes      |         |
| align    | The popover alignment                                              | oneOf(['left', 'right', 'center', 'auto']) |          | left    |
| zIndex   | zIndex of popover                                                  | number                                     |          |         |
| padding  | padding of popover contents                                        | string                                     |          | 4px     |

## License

MIT
