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

Pass a list of `steps` to be completed, the quantity of `completedSteps` and a function to handle `onClick`.

The `Stepper` component will render:
  - `COMPLETED` status from index 0 of the `steps` array until the index of the last completed step (`completedSteps - 1`);
  - `CURRENT` status to the next step after the last completed step
  - `PENDING` status to all remaining steps

`onClick` will be called only for `CURRENT` steps.

```jsx
const React = require("react");
const ReactDOM = require("react-dom");
const Stepper = require("@crave/farmblocks-stepper").default;
const { statusTypes } = require("@crave/farmblocks-stepper");

const root = document.createElement("div");

const steps = [
  "Complete profile",
  "Add bank account",
  "Connect to purchasers",
  "Add products",
  "Start selling"
];

const completedSteps = 2;

ReactDOM.render(
  <Stepper steps={steps} completedSteps={completedSteps} onClick={({index, value}) => console.log("Handle click", index, value)} />,
  root
);

document.body.appendChild(root);
```

## API

See it [in the source](https://github.com/CraveFood/farmblocks/blob/master/packages/stepper/src/Stepper.js)

## License

MIT
