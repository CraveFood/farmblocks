import React, { Component } from "react";
import PropTypes from "prop-types";
import Tooltip from "@crave/farmblocks-tooltip";
import Text from "@crave/farmblocks-text";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

import StyledInfo from "../styledComponents/StyledInfo";

class MoreInfo extends Component {
  state = {
    tooltipVisible: false,
  };

  showTooltip = () => {
    this.setState({
      tooltipVisible: true,
    });
  };

  hideTooltip = () => {
    this.setState({
      tooltipVisible: false,
    });
  };

  render() {
    return (
      <StyledInfo {...this.props}>
        <Text
          fontWeight="title"
          type={fontTypes.NEUTRAL}
          size={fontSizes.MEDIUM}
          className={`text ${this.state.tooltipVisible && "hovered"}`}
        >
          {this.props.text}
          <div
            className="icon"
            onMouseOver={this.showTooltip}
            onFocus={this.showTooltip}
          >
            <i className={this.props.icon} />
            <Tooltip
              className="tooltip"
              isVisible={this.state.tooltipVisible}
              align={this.props.tooltipAlign}
            >
              <div
                className="hit-area"
                onMouseOut={this.hideTooltip}
                onBlur={this.hideTooltip}
              >
                {this.props.children}
              </div>
            </Tooltip>
          </div>
        </Text>
      </StyledInfo>
    );
  }
}

MoreInfo.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
  tooltipAlign: PropTypes.oneOf(["left", "right", "center"]),
};

MoreInfo.defaultProps = {
  tooltipAlign: "center",
  icon: "wg-question",
};

export default MoreInfo;
