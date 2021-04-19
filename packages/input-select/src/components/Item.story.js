import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import Item from "./Item";

const imgSrc = "https://picsum.photos/100?image=0";
const StyledWrapper = styled.div`
  width: 300px;
`;

const Wrapper = (props) => <StyledWrapper {...props} />;

storiesOf("Select Input/Item", module)
  .addDecorator((storyFn) => <Wrapper>{storyFn()}</Wrapper>)
  .add("text only", () => <Item label="Hello" />)
  .add("withID", () => <Item label="Hello" id="Select-item-withId" />)
  .add("with image", () => <Item label="Hello" image={imgSrc} />)
  .add("selected text only", () => <Item label="Hello" selected />)
  .add("selected with image", () => (
    <Item label="Hello" image={imgSrc} selected />
  ))
  .add("with checkbox", () => <Item checkbox label="Hello" />)
  .add("selected with checkbox", () => <Item selected checkbox label="Hello" />)
  .add("with checkbox + image", () => (
    <Item checkbox image={imgSrc} label="Hello" />
  ))
  .add("selected with checkbox + image", () => (
    <Item selected checkbox image={imgSrc} label="Hello" />
  ));
