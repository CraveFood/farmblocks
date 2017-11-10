import * as React from "react";
import PropTypes from "prop-types";

import Container from "../styledComponents/Caption";
import fontSizes from "../constants/fontSizes";
import fontTypes from "../constants/fontTypes";

export default class Caption extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return <Container {...props}>{children}</Container>;
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(Object.keys(fontSizes)),
    type: PropTypes.oneOf(Object.keys(fontTypes)),
    align: PropTypes.oneOf(["left", "right"])
  };

  static defaultProps = {
    size: fontSizes.LARGE,
    type: fontTypes.NORMAL,
    align: "left"
  };
}
