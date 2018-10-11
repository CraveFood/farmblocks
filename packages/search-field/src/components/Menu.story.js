import React from "react";
import { storiesOf, action } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { colors } from "@crave/farmblocks-theme";
import styled from "styled-components";
import Text, { fontSizes } from "@crave/farmblocks-text";
import Link, { linkTypes } from "@crave/farmblocks-link";

import Menu from "./Menu";

const Wrapper = styled.div`
  width: 400px;
`;

const image = "https://picsum.photos/100";
const items = [
  { value: "1", label: "Apple", image },
  { value: "2", label: "Banana", image },
  { value: "3", label: "Pear", image }
];

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 8px;
  background: ${colors.SUGAR};
  .icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px;
    border: solid 1px ${colors.GREY_16};
    border-radius: 12px;
    font-size: 12px;
  }
  .link {
    display: block;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <Text className="icon">
      <i className="wg-question" />
    </Text>
    <Text size={fontSizes.SMALL}>
      Can’t find a farmers market?
      <Text size={fontSizes.NORMAL}>
        <Link type={linkTypes.NEUTRAL} className="link">
          Contact Support?
        </Link>
      </Text>
    </Text>
  </FooterWrapper>
);

storiesOf("Search Field/Menu (Private)", module)
  .addDecorator(storyFn => <Wrapper>{storyFn()}</Wrapper>)
  .add("Default", withInfo()(() => <Menu items={items} />))
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
    withInfo()(() => <Menu footer={<Footer />} items={[]} />)
  );
