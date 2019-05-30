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
- [Extended Components](#extended-components)
  - [DialogModal](#dialogmodal)
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

![Modal example](https://user-images.githubusercontent.com/1459283/58510879-07482680-8170-11e9-9e20-c788f151f914.png)

## API

- **isOpen** (_Boolean_) = `false`

  > Whether the modal is visible or not.

- **verticalAlign** (`"flex-start"` | `"center"` | `"flex-end"`) = `"flex-start"`

  > Vertical position of the modal at the viewport

- **parentNode** (_HTMLElement_) = `document.body`

  > Element in which the modal should be attached.
  > Can be either inside or outside the ReactDOM root but not the same element.

- **shouldCloseOnOverlayClick** (_Boolean_) = `true`

  > Whether `onRequestClose` should be called or not when the overlay is clicked.

- **shouldCloseOnEsc** (_Boolean_) = `true`

  > Whether `onRequestClose` should be called or not when the ESC key is pressed.

- **showCloseButton** (_Boolean_) = `true`

  > Whether the close button should be visible or not.

- **onRequestClose** (_Function_)

  > Function to call when the overlay or close button are clicked, or the ESC key is pressed.  
  > It passes either a [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent) or a [KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent) depending on the action.

- **onOpen** (_Function_)

  > Function to call when the modal opens.

- **onClose** (_Function_)

  > Function to call when the modal closes.

- **cardProps** (_Object_)

  > Props to be passed to the [Card](https://www.npmjs.com/package/@crave/farmblocks-card) component that wraps the modal.

- **closeProps** (_Object_)

  > Props to be passed to the [Link](https://www.npmjs.com/package/@crave/farmblocks-link) component used for the close button.

## Helpers

### useModal

The Modal component is stateless. So the visibility is controlled exclusively by the `isOpen` prop, and the close actions (close button, overlay click and ESC key) won't change it automatically.
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
      <Modal {...myModalProps}>
        This is the a modal.
        <hr />
        <button onClick={close}>Close</button>
      </Modal>
    </>
  );
};
```

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

## Extended Components

### DialogModal

This is a combination of the Modal and the [Empty State](https://www.npmjs.com/package/@crave/farmblocks-empty-state) Components.
It accepts all the props from both of them.

```jsx
import { DialogModal } from "@crave/farmblocks-modal";

const Example = () => (
  <DialogModal
    isOpen
    icon="wg-alert"
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

## License

MIT
