import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Modal, { useModal, ModalManager } from ".";

const TallComponent = styled.div`
  height: 9000px;
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
          >
            Hi, this is the first modal.
            <hr />
            <button onClick={closeFirst}>close</button>
          </Modal>

          <button onClick={toggleSecond}>Open 2nd</button>
          <Modal
            {...secondModal}
            onOpen={action("Second Modal opened")}
            onClose={action("Second Modal closed")}
          >
            {`And I'm the second one.`}
            <hr />
            <button onClick={toggleSecond}>close</button>
          </Modal>
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
            >
              Hi, this is the first modal.
              <hr />
              <button onClick={close}>close</button>
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
            >
              {`And I'm the second one.`}
              <hr />
              <button onClick={close}>close</button>
            </Modal>
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
