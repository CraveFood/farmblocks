import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Modal, { useModal, ModalManager } from ".";
import lipsum from "./lipsum";

const TallComponent = styled.div`
  height: 9000px;
  background: linear-gradient(to bottom, #3f5efb, #fc466b);
  color: white;
  &:before {
    content: "This will create a scrollbar";
    display: block;
  }
`;

const PreLine = styled.p`
  white-space: pre-line;
`;

storiesOf("Modal", module)
  .add("Default", () => (
    <Modal isOpen>
      <p>Hello</p>
    </Modal>
  ))
  .add("useModal", () => {
    const Example = () => {
      const [firstModal, { open: openFirst, close: closeFirst }] = useModal();
      const [secondModal, { toggle: toggleSecond }] = useModal();

      return (
        <div>
          <button onClick={openFirst}>Open 1st</button>
          <Modal {...firstModal}>
            Hi, this is the first modal.{" "}
            <button onClick={closeFirst}>close</button>
          </Modal>

          <button onClick={toggleSecond}>Open 2nd</button>
          <Modal {...secondModal}>
            {`And I'm the second one.`}
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
            <Modal {...firstModal}>
              Hi, this is the first modal.{" "}
              <button onClick={close}>close</button>
            </Modal>
          </>
        )}
      </ModalManager>

      <ModalManager>
        {(secondModal, { open, close }) => (
          <>
            <button onClick={open}>Open 2nd</button>
            <Modal {...secondModal}>
              {`And I'm the second one.`} <button onClick={close}>close</button>
            </Modal>
          </>
        )}
      </ModalManager>
    </div>
  ))
  .add("Extensive Content", () => (
    <div>
      <TallComponent />
      <Modal isOpen onRequestClose={action("onRequestClose")}>
        <PreLine>{lipsum}</PreLine>
      </Modal>
    </div>
  ))
  .add("with fixed width", () => (
    <Modal isOpen cardProps={{ width: "400px", floating: false }}>
      <PreLine>{lipsum}</PreLine>
    </Modal>
  ))
  .add("with custom close icon", () => (
    <Modal isOpen closeProps={{ rightIcon: "wg-close" }}>
      Hello
    </Modal>
  ));
