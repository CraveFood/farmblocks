import * as React from "react";
import PropTypes from "prop-types";

import Container from "../styledComponents/Title";
import fontSizes from "../constants/fontSizes";
import fontTypes from "../constants/fontTypes";

export default class Title extends React.Component {
  render() {
    return (
      <Container size={this.props.size} type={this.props.type}>
        {this.props.children}
      </Container>
    );
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(Object.keys(fontSizes)),
    type: PropTypes.oneOf(Object.keys(fontTypes))
  };

  static defaultProps = {
    size: fontSizes.LARGE,
    type: fontTypes.NORMAL
  };
}
