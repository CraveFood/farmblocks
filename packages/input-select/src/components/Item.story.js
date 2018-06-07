import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import styled from "styled-components";

import Item from "./Item";

const imgSrc = "https://picsum.photos/100";
const Wrapper = styled.div`width: 300px;`;

storiesOf("Select Input/Item", "module")
  .addDecorator(storyFn => <Wrapper>{storyFn()}</Wrapper>)
  .add("text only", withInfo()(() => <Item label="Hello" />))
  .add("with image", withInfo()(() => <Item label="Hello" image={imgSrc} />))
  .add("selected text only", withInfo()(() => <Item label="Hello" selected />))
  .add(
    "selected with image",
    withInfo()(() => <Item label="Hello" image={imgSrc} selected />)
  );
