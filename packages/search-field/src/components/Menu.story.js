import React from "react";
import { storiesOf, action } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import styled from "styled-components";

import Menu from "./Menu";

const Wrapper = styled.div`width: 400px;`;

const image = "https://picsum.photos/100";
const items = [
  { value: "1", label: "Apple", image },
  { value: "2", label: "Banana", image },
  { value: "3", label: "Pear", image }
];

storiesOf("Search Field/Menu (Private)", module)
  .addDecorator(storyFn => <Wrapper>{storyFn()}</Wrapper>)
  .add("Default", withInfo()(() => <Menu items={items} />))
  .add(
    "onMenuMouseDown",
    withInfo()(() => (
      <Menu onMenuMouseDown={action("onMenuMouseDown")} items={items} />
    ))
  )
  .add(
    "onItemClick",
    withInfo()(() => <Menu onItemClick={action("onItemClick")} items={items} />)
  )
  .add(
    "with empty items",
    withInfo("This should render nothing")(() => <Menu items={[]} />)
  )
  .add(
    "footer only",
    withInfo()(() => <Menu footer={<p>a footer</p>} items={[]} />)
  );
