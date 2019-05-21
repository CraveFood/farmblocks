import React from "react";
import { storiesOf } from "@storybook/react";

import { Modal, useModal, ModalFactory } from ".";

storiesOf("Modal", module)
  .add("Default", () => (
    <Modal isOpen>
      <p>Hello</p>
    </Modal>
  ))
  .add("useModal", () => {
    const Example = () => {
      const [FirstModal, { open: openFirst, close: closeFirst }] = useModal();
      const [SecondModal, { toggle: toggleSecond }] = useModal();

      return (
        <>
          <button onClick={openFirst}>Open 1st</button>
          <FirstModal>
            Hi, this is the first modal.{" "}
            <button onClick={closeFirst}>close</button>
          </FirstModal>

          <button onClick={toggleSecond}>Open 2nd</button>
          <SecondModal>
            {`And I'm the second one.`}
            <button onClick={toggleSecond}>close</button>
          </SecondModal>
        </>
      );
    };
    return <Example />;
  })
  .add("ModalFactory", () => (
    <>
      <ModalFactory>
        {(FirstModal, { open, close }) => (
          <>
            <button onClick={open}>Open 1st</button>
            <FirstModal>
              Hi, this is the first modal.{" "}
              <button onClick={close}>close</button>
            </FirstModal>
          </>
        )}
      </ModalFactory>

      <ModalFactory>
        {(SecondModal, { open, close }) => (
          <>
            <button onClick={open}>Open 2nd</button>
            <SecondModal>
              {`And I'm the second one.`} <button onClick={close}>close</button>
            </SecondModal>
          </>
        )}
      </ModalFactory>
    </>
  ));
