import React from "react";
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
    <Modal isOpen>
      <p>Hello</p>
    </Modal>
  ))
  .add("Extensive Content", () => (
    <Modal isOpen onRequestClose={action("onRequestClose")}>
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
  ));
