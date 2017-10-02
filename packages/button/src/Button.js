import React, { Component } from "react";
import PropTypes from "prop-types";

import { SMALL, LARGE } from "./constants/SizeTypes";
import {
  PRIMARY,
  SECONDARY,
  NEGATIVE,
  NEUTRAL,
  NEUTRAL_OFF,
  CLOSED,
  REQUEST
} from "./constants/ButtonTypes";
import Container from "./styledComponents/Container";
import StyledButton from "./styledComponents/Button";
// @FIXME add tooltip
// import Tooltip from './Tooltip';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTooltip: false
    };

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeaves = this.mouseLeaves.bind(this);
  }

  render() {
    // @FIXME revisit font icon assets on farmblocks
    const icon = this.props.loading ? "wg-loading" : this.props.icon;

    const disabled = this.props.disabled || this.props.loading;
    const showIcon = this.props.icon || this.props.loading;
    const marginOffset = !!this.props.text ? 10 : 0;

    return (
      <Container>
        {this.props.disabled && (
          <div
            className="hit-box-container"
            onMouseOver={this.mouseOver}
            onMouseLeave={this.mouseLeaves}
          />
        )}
        <StyledButton {...this.props} disabled={disabled}>
          {showIcon && (
            <div className="icon" style={{ marginRight: marginOffset }}>
              <i className={icon} />
            </div>
          )}{" "}
          {this.props.text || this.props.children}
        </StyledButton>
        {
          // <Tooltip text='This action is disabled.'
          // isVisible={this.state.showTooltip}/>
        }
      </Container>
    );
  }

  mouseOver() {
    if (this.props.disabled) {
      this.setState({
        showTooltip: true
      });
    }
  }

  mouseLeaves() {
    if (this.props.disabled) {
      this.setState({
        showTooltip: false
      });
    }
  }
}

Button.defaultProps = {
  size: SMALL,
  type: PRIMARY
};

Button.propTypes = {
  activated: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  size: PropTypes.oneOf([SMALL, LARGE]),
  type: PropTypes.oneOf([
    PRIMARY,
    SECONDARY,
    NEGATIVE,
    NEUTRAL,
    NEUTRAL_OFF,
    CLOSED,
    REQUEST
  ]),
  fluid: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  tabIndex: PropTypes.number
};

export default Button;
