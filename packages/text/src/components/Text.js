import * as React from "react";
import PropTypes from "prop-types";
import values from "object.values";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

import Container from "../styledComponents/Text";

export default class Text extends React.Component {
  render() {
    const { children, title, ...props } = this.props;
    return (
      <Container isTitle={title} {...props}>
        {children}
      </Container>
    );
  }

  static propTypes = {
    children: PropTypes.node,
    size: PropTypes.number,
    type: PropTypes.oneOf(values(fontTypes)),
    align: PropTypes.oneOf(["left", "center", "right", "justify"]),
    lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    paragraph: PropTypes.bool,
    title: PropTypes.bool,
    letterSpacing: PropTypes.string,
    fontWeight: PropTypes.number
  };

  static defaultProps = {
    size: fontSizes.LARGE,
    type: fontTypes.NORMAL,
    align: "left",
    paragraph: false,
    title: false
  };
}
