/* eslint-disable react/jsx-curly-brace-presence */
import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Modal, { useModal, ModalManager } from ".";

const TallComponent = styled.div`
  height: 1500px;
  background: linear-gradient(to bottom, #3f5efb, #fc466b);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

storiesOf("Modal/helpers", module)
  .add("useModal", () => {
    const Example = () => {
      const [firstModal, { open: openFirst, close: closeFirst }] = useModal();
      const [secondModal, { toggle: toggleSecond }] = useModal();

      return (
        <div>
          <button onClick={openFirst}>Open 1st</button>
          <Modal
            {...firstModal}
            onOpen={action("First Modal opened")}
            onClose={action("First Modal closed")}
            footer={<button onClick={closeFirst}>close</button>}
          >
            Hi, this is the first modal.
          </Modal>

          <button onClick={toggleSecond}>Open 2nd</button>
          <Modal
            {...secondModal}
            onOpen={action("Second Modal opened")}
            onClose={action("Second Modal closed")}
            footer={<button onClick={toggleSecond}>close</button>}
          >
            {`And I'm the second one.`}
          </Modal>
        </div>
      );
    };
    return <Example />;
  })
  .add("useModal open at mount", () => {
    const Example = () => {
      const [modalProps, { open }] = useModal({ openAtMount: true });
      return (
        <div>
          <button onClick={open}>Open modal</button>
          <Modal {...modalProps}>This modal starts open.</Modal>
        </div>
      );
    };
    return <Example />;
  })
  .add("ModalManager", () => (
    <div>
      <ModalManager>
        {(firstModal, { open, close }) => (
          <>
            <button onClick={open}>Open 1st</button>
            <Modal
              {...firstModal}
              onOpen={action("First Modal opened")}
              onClose={action("First Modal closed")}
              footer={<button onClick={close}>close</button>}
            >
              Hi, this is the first modal.
            </Modal>
          </>
        )}
      </ModalManager>

      <ModalManager>
        {(secondModal, { open, close }) => (
          <>
            <button onClick={open}>Open 2nd</button>
            <Modal
              {...secondModal}
              onOpen={action("Second Modal opened")}
              onClose={action("Second Modal closed")}
              footer={<button onClick={close}>close</button>}
            >
              {`And I'm the second one.`}
            </Modal>
          </>
        )}
      </ModalManager>
    </div>
  ))
  .add("ModalManager open at mount", () => (
    <div>
      <ModalManager openAtMount>
        {(props, { open }) => (
          <>
            <button onClick={open}>Open modal</button>
            <Modal {...props}>This modal starts open.</Modal>
          </>
        )}
      </ModalManager>
    </div>
  ))
  .add("Scroll lock", () => (
    <ModalManager>
      {(modalProps, { open }) => (
        <>
          <TallComponent>
            <p style={{ flex: 1 }}>Scroll down to find the button</p>
            <div style={{ flex: 1 }}>
              <button onClick={open}>Open modal</button>
            </div>
          </TallComponent>
          <Modal {...modalProps}>It should not scroll while this is open</Modal>
        </>
      )}
    </ModalManager>
  ));
