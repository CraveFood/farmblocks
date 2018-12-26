import React from "react";
import { storiesOf, action } from "@storybook/react";
import styled from "styled-components";

import ScrollBox from "./ScrollBox";

const Wrapper = styled.div`
  width: 400px;
`;

const Content = styled.div`
  height: 5000px;
  background-image: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );
`;

storiesOf("Search Field/ScrollBox (Private)", module)
  .addDecorator(storyFn => <Wrapper>{storyFn()}</Wrapper>)
  .add("Default", () => (
    <ScrollBox>
      <Content />
    </ScrollBox>
  ))
  .add("with number maxHeight", () => (
    <ScrollBox maxHeight={100}>
      <Content />
    </ScrollBox>
  ))
  .add("with string maxHeight", () => (
    <ScrollBox maxHeight="50vh">
      <Content />
    </ScrollBox>
  ))
  .add("onReachEnd", () => (
    <ScrollBox onReachEnd={action("onReachEnd")} maxHeight="50vh">
      <Content />
    </ScrollBox>
  ));
