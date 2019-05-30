import React, { useState, useRef } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Modal from ".";
import lipsum from "./lipsum";

const PreLine = styled.p`
  white-space: pre-line;
`;

storiesOf("Modal", module)
  .add("Default", () => (
    <Modal
      isOpen
      onOpen={action("onOpen")}
      onRequestClose={action("onRequestClose")}
    >
      <p>Hello</p>
    </Modal>
  ))
  .add("Center aligned", () => (
    <Modal isOpen verticalAlign="center">
      <p>Hello</p>
    </Modal>
  ))
  .add("Extensive Content", () => (
    <Modal isOpen>
      <PreLine>{lipsum}</PreLine>
    </Modal>
  ))
  .add("With cardProps", () => (
    <Modal isOpen cardProps={{ width: "400px", floating: false }}>
      <PreLine>{lipsum}</PreLine>
    </Modal>
  ))
  .add("With custom close icon", () => (
    <Modal isOpen closeProps={{ rightIcon: "wg-close" }}>
      Hello
    </Modal>
  ))
  .add("With custom parentNode", () => {
    const Parent = styled.div`
      border: dashed 2px gray;
      width: 600px;
      height: 400px;
      padding: 10px;
      margin: 40px;
      position: relative;
    `;
    const Example = () => {
      const [isOpen, setIsOpen] = useState(false);
      const parentRef = useRef(null);

      return (
        <div>
          <button onClick={() => setIsOpen(true)}>Open Modal</button>
          <Modal
            parentNode={parentRef.current}
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
          >
            Hello.
          </Modal>

          {/*
            This  wouldn't work if we didn't have a state for isOpen.
            That's because refs don't trigger a new render, so the
            parentRef.current would stay as the initial value (null).

            An alternate solution is to use a callback ref:
            https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
          */}
          <Parent ref={parentRef}>The Modal will render here</Parent>
        </div>
      );
    };
    return <Example />;
  });
