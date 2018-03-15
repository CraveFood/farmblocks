import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Tooltip from "@crave/farmblocks-tooltip";
import Text from "@crave/farmblocks-text";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

import StyledInfo from "./styledComponent/StyledInfo";

class MoreInfo extends Component {
  state = {
    showTooltip: false
  };

  showTooltip = this.showTooltip.bind(this);
  hideTooltip = this.hideTooltip.bind(this);
  handleClickOutside = this.handleClickOutside.bind(this);

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside);
  }

  showTooltip() {
    this.setState({
      showTooltip: true
    });
  }

  hideTooltip() {
    this.setState({
      showTooltip: false
    });
  }

  handleClickOutside(event) {
    if (this.container && !this.container.contains(event.target)) {
      this.hideTooltip();
    }
  }

  render() {
    return (
      <StyledInfo {...this.props}>
        <Text
          title
          type={fontTypes.NEUTRAL}
          size={fontSizes.MEDIUM}
          className={this.state.showTooltip && "hovered"}
        >
          {this.props.text}
          <div
            className="icon"
            onMouseOver={this.showTooltip}
            ref={container => (this.container = container)}
          >
            <i className={this.props.icon} />
            <Tooltip
              className="tooltip"
              isVisible={this.state.showTooltip}
              align={this.props.tooltipAlign}
            >
              {this.props.children}
            </Tooltip>
          </div>
        </Text>
      </StyledInfo>
    );
  }
}

MoreInfo.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
  tooltipAlign: PropTypes.oneOf(["left", "right", "center"])
};

MoreInfo.defaultProps = {
  tooltipAlign: "center"
};

export default MoreInfo;
