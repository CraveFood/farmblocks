import React from "react";
import PropTypes from "prop-types";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import fontSizes from "../constants/fontSizes";
import fontTypes from "../constants/fontTypes";

import Paragraph from "./Paragraph";

const text =
  "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.";

const Container = props => (
  <div style={{ width: "300px", background: props.background }}>
    {props.children}
  </div>
);
Container.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string
};
Container.defaultProps = { background: "white" };

storiesOf("Text - Paragraph", module)
  .add(
    "default - LARGE size, NORMAL type, left aligned",
    withInfo()(() => (
      <Container>
        <Paragraph>{text}</Paragraph>
      </Container>
    ))
  )
  .add(
    "center aligned",
    withInfo()(() => (
      <Container>
        <Paragraph align="center">{text}</Paragraph>
      </Container>
    ))
  )
  .add(
    "right aligned",
    withInfo()(() => (
      <Container>
        <Paragraph align="right">{text}</Paragraph>
      </Container>
    ))
  )
  .add(
    "MEDIUM size",
    withInfo()(() => (
      <Container>
        <Paragraph size={fontSizes.MEDIUM}>{text}</Paragraph>
      </Container>
    ))
  )
  .add(
    "SMALL size",
    withInfo()(() => (
      <Container>
        <Paragraph size={fontSizes.SMALL}>{text}</Paragraph>
      </Container>
    ))
  )
  .add(
    "NEUTRAL type",
    withInfo()(() => (
      <Container>
        <Paragraph type={fontTypes.NEUTRAL}>{text}</Paragraph>
      </Container>
    ))
  )
  .add(
    "WHITE type",
    withInfo()(() => (
      <Container background="cadetblue">
        <Paragraph type={fontTypes.WHITE}>{text}</Paragraph>
      </Container>
    ))
  );
