![Farmblocks logo](https://user-images.githubusercontent.com/7760/31051341-4d280118-a63c-11e7-9e8f-3b375ca8f9a0.png)

# Farmblocks Modal <!-- omit in toc -->

A React Modal component

## Table of Contents <!-- omit in toc -->

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Helpers](#helpers)
  - [useModal](#usemodal)
  - [ModalManager](#modalmanager)
- [Extra Components](#extra-components)
  - [DialogModal](#dialogmodal)
  - [ModalTitle](#modaltitle)
- [License](#license)

## Installation

```sh
npm install @crave/farmblocks-modal
```

## Usage

```jsx
import React from "react";
import { render } from "react-dom";
import Modal from "@crave/farmblocks-modal";

const App = () => (
  <div>
    This is the regular content
    <Modal isOpen>This is the modal content</Modal>
  </div>
);

render(<App />, document.getElementById("root"));
```

This code will render:

![Modal example](https://user-images.githubusercontent.com/32174637/61081330-4e773780-a3fd-11e9-8ccc-de4b3be6c437.png)

## API

- **isOpen** (_Boolean_) = `false`

  > Whether the modal is visible or not.

- **verticalAlign** (_Array_ || _String_) = `["flex-end", "flex-start"]`

  > Vertical position of the modal at the viewport. All justify-content values are valid.

- **parentNode** (_HTMLElement_) = `document.body`

  > Element in which the modal should be attached.
  > Can be either inside or outside the ReactDOM root but not the same element.

- **shouldCloseOnOverlayClick** (_Boolean_) = `true`

  > Whether `onRequestClose` should be called or not when the overlay is clicked.

- **shouldCloseOnEsc** (_Boolean_) = `true`

  > Whether `onRequestClose` should be called or not when the ESC key is pressed.

- **showCloseButton** (_Boolean_) = `true`

  > Whether the close button should be visible or not. When visible, it will be rendered inside the `header` section whether there's a header or not.

- **onRequestClose** (_Function_)

  > Function to call when the overlay or close icon are clicked, or the ESC key is pressed.  
  > It passes either a [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent) or a [KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent) depending on the action.

- **onOpen** (_Function_)

  > Function to call when the modal opens.

- **onClose** (_Function_)

  > Function to call when the modal closes.

- **cardProps** (_Object_)

  > Props to be passed to the [Card](https://www.npmjs.com/package/@crave/farmblocks-card) component that wraps the modal.

- **closeButtonProps** (_Object_)

  > Props to be passed to the [Button](https://www.npmjs.com/package/@crave/farmblocks-button) component used for the close button.

- **zIndex** (_Number_) = `1500`

  > Value for the `z-index` [CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index).

- **header** (_Node_)

  > Node for the header section

- **footer** (_Node_)

  > Node for the footer section

- **footerProps** (_Object_)

  > Properties passed to the footer section

## Helpers

### useModal

The Modal component is stateless. So the visibility is controlled exclusively by the `isOpen` prop, and the close actions (close icon, overlay click and ESC key) won't change it automatically.
You need to create a function for `onRequestClose` that will handle the state and change the `isOpen` prop accordingly.

The `useModal` hook helps to manage the state for the component. It will return 2 objects:

- **props**, containing `isOpen` and `onRequestClose` properly bound to a `useState`.
- **actions**, containing the `open`, `close` and `toggle` functions that can be used inside or outside the modal.

```jsx
import Modal, { useModal } from "@crave/farmblocks-modal";

const Example = () => {
  const [myModalProps, { open, close }] = useModal();

  return (
    <>
      <button onClick={open}>Open Modal</button>
      <Modal footer={<button onClick={close}>Close</button>} {...myModalProps}>
        This is the a modal.
      </Modal>
    </>
  );
};
```

Optionally, it can receive an options object:

```js
const [props, actions] = useModal({ openAtMount: true });
```

- **openAtMount** (_Boolean_) = `false`

  > The initial state for the `isOpen` prop.

### ModalManager

A class component version of `useModal`. It expects a function as the `children` prop and passes the hook results as arguments.

```jsx
import Modal, { ModalManager } from "@crave/farmblocks-modal";

const Example = () => (
  <ModalManager>
    {(myModalProps, { open }) => (
      <>
        <button onClick={open}>Open Modal</button>
        <Modal {...myModalProps}>This is the a modal.</Modal>
      </>
    )}
  </ModalManager>
);
```

## Extra Components

### DialogModal

This is a combination of the Modal and the [Empty State](https://www.npmjs.com/package/@crave/farmblocks-empty-state) Components.
It accepts all the props from both of them.

```jsx
import { DialogModal } from "@crave/farmblocks-modal";
import { MdAlert } from "@crave/farmblocks-icon";

const Example = () => (
  <DialogModal
    isOpen
    icon={<MdAlert />}
    title="Delete entry?"
    description="This action can't be undone"
    actions={[
      {
        text: "Cancel",
        type: buttonTypes.NEUTRAL,
        onClick: () => console.log("Canceled"),
      },
      {
        text: "Delete",
        type: buttonTypes.PRIMARY,
        onClick: () => console.log("Deleted"),
      },
    ]}
  />
);
```

![image](https://user-images.githubusercontent.com/1459283/58564521-7884e980-8203-11e9-8b2f-eb544506e646.png)

### ModalTitle

Component to use on **header** prop, is a [Text](https://www.npmjs.com/package/@crave/farmblocks-text) with `font-weight: 600` and `font-size: 24px` as default, and accepts all the Text properties.

```jsx
import { DialogModal } from "@crave/farmblocks-modal";

const Example = () => (
  <Modal isOpen header={<ModalTitle>Header</ModalTitle>}>
    Modal using <strong>ModalTitle</strong> on header
  </Modal>
);
```

![image](https://user-images.githubusercontent.com/32174637/61314892-03ca3680-a7d4-11e9-8387-b7985d32c351.png)

## Peer dependencies

- prop-types
- react
- react-dom
- react-spring
- styled-components
- styled-system

## License

MIT
