import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Modal, { useModal, ModalFactory } from ".";
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
      const [FirstModal, { open: openFirst, close: closeFirst }] = useModal();
      const [SecondModal, { toggle: toggleSecond }] = useModal();

      return (
        <div>
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
        </div>
      );
    };
    return <Example />;
  })
  .add("ModalFactory", () => (
    <div>
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
    </div>
  ))
  .add("Extensive Content", () => (
    <div>
      <TallComponent />
      <Modal isOpen onRequestClose={action("onRequestClose")}>
        <PreLine>{lipsum}</PreLine>
      </Modal>
    </div>
  ));
