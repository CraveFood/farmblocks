import * as React from "react";
import PropTypes from "prop-types";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

import Container from "../styledComponents/Title";

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
    size: PropTypes.oneOf(Object.values(fontSizes)),
    type: PropTypes.oneOf(Object.values(fontTypes))
  };

  static defaultProps = {
    size: fontSizes.LARGE,
    type: fontTypes.NORMAL
  };
}
