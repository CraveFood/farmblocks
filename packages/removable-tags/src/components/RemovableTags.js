import React, { Component } from "react";
import PropTypes from "prop-types";

import StyledTag from "./styledComponent/StyledTag";

class RemovableTags extends Component {
  state = {
    isVisible: true
  };
  onRemoveHandler = this.onRemoveHandler.bind(this);

  onRemoveHandler() {
    this.setState({ isVisible: false });
    this.props.onRemove();
  }

  render() {
    if (!this.state.isVisible) {
      return null;
    }
    return (
      <StyledTag {...this.props}>
        {this.props.text}
        {this.props.removable && (
          <div className="icon" onClick={this.onRemoveHandler}>
            <i className="wg-close" />
          </div>
        )}
      </StyledTag>
    );
  }
}

RemovableTags.propTypes = {
  text: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
  removable: PropTypes.bool
};

RemovableTags.defaultProps = {
  onRemove: () => null,
  removable: true
};

export default RemovableTags;
