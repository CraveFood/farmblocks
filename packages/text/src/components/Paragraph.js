import * as React from "react";
import PropTypes from "prop-types";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

import Container from "../styledComponents/Paragraph";

export default class Paragraph extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return <Container {...props}>{children}</Container>;
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.number,
    type: PropTypes.oneOf(Object.values(fontTypes)),
    align: PropTypes.oneOf(["left", "center", "right", "justify"]),
    lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };

  static defaultProps = {
    size: fontSizes.LARGE,
    type: fontTypes.NORMAL,
    align: "left"
  };
}
