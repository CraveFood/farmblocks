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
  })
  .add(
    "With zIndex",
    () => (
      <>
        <div style={{ width: 300, height: 100, background: "yellow" }}>
          Behind
        </div>
        <Modal isOpen zIndex={2}>
          <PreLine>{lipsum}</PreLine>
        </Modal>
        <div
          style={{
            zIndex: 3,
            position: "fixed",
            top: 0,
            right: 0,
            width: 300,
            height: 100,
            background: "yellow",
          }}
        >
          Above
        </div>
      </>
    ),
    // The info addon wraps the content in a div with z-index: 0;
    // This usually don't affect the stories but it's a problem
    // for this one because the modal is rendered with a portal.
    { info: { disable: true } },
  );
