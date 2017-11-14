import * as React from "react";
import PropTypes from "prop-types";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

import Container from "../styledComponents/Caption";

export default class Caption extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return <Container {...props}>{children}</Container>;
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(Object.values(fontSizes)),
    type: PropTypes.oneOf(Object.values(fontTypes)),
    align: PropTypes.oneOf(["left", "right"])
  };

  static defaultProps = {
    size: fontSizes.LARGE,
    type: fontTypes.NORMAL,
    align: "left"
  };
}
