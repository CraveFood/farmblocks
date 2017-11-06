![logo-farmblocks](https://user-images.githubusercontent.com/7760/31051341-4d280118-a63c-11e7-9e8f-3b375ca8f9a0.png)

# Farmblocks-Stepper

A React component for displaying step to step actions.
See [Storybook](https://cravefood.github.io/farmblocks/index.html?selectedKind=Stepper)

## Installation

```
npm install @crave/farmblocks-stepper
```

## Design Spec
[See it on zeplin](https://scene.zeplin.io/project/595a9cd3b401bf1876faab27/screen/59f0de71521656e699a6c55b)

![image](https://user-images.githubusercontent.com/17936244/32457588-cda09774-c310-11e7-8e66-677b61bbe1c5.png)


## Usage

```jsx
const React = require("react");
const ReactDOM = require("react-dom");
const Stepper = require("@crave/farmblocks-stepper").default;
const { statusTypes } = require("@crave/farmblocks-stepper");

const root = document.createElement("div");

const steps = [
  {
    id: "1",
    description: "Complete profile",
    status: statusTypes.COMPLETED
  },
  {
    id: "2",
    description: "Add products",
    status: statusTypes.CURRENT
  },
  {
    id: "3",
    description: "Start selling",
    status: statusTypes.PENDING
  }
]

ReactDOM.render(
  <Stepper steps={steps} onClick={id => console.log("Handle click", id)} />,
  root
);

document.body.appendChild(root);
```

## API

See it [in the source](https://github.com/CraveFood/farmblocks/blob/master/packages/stepper/src/Stepper.js)

## License

MIT
