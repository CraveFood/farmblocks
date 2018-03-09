import React, { Component } from "react";
import PropTypes from "prop-types";

import StyledTag from "./styledComponent/StyledTag";

class RemovableTags extends Component {
  state = {
    isVisible: true
  };
  onCloseHandler = this.onCloseHandler.bind(this);

  onCloseHandler() {
    this.setState({ isVisible: false });
    this.props.onClose();
  }

  render() {
    if (!this.state.isVisible) {
      return null;
    }
    return (
      <StyledTag>
        {this.props.text}
        <div className="icon" onClick={this.onCloseHandler}>
          <i className="wg-close" />
        </div>
      </StyledTag>
    );
  }
}

RemovableTags.propTypes = {
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func
};

RemovableTags.defaultProps = {
  onClose: () => null
};

export default RemovableTags;
