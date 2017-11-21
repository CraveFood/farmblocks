// @flow
import * as React from "react";
import PropTypes from "prop-types";
import Tooltip from "@crave/farmblocks-tooltip";

import buttonSizes from "./constants/buttonSizes";
import buttonTypes from "./constants/buttonTypes";
import Container from "./styledComponents/Container";
import StyledButton from "./styledComponents/Button";

// @FIXME type anotating as Object while #22 dont gets fixed
type Props = Object;
type State = Object;
class Button extends React.Component<Props, State> {
  static defaultProps = {
    size: buttonSizes.SMALL,
    type: buttonTypes.NEUTRAL
  };

  mouseOver: Function;
  mouseLeaves: Function;

  constructor(props: Props) {
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
    const marginOffset = this.props.text !== undefined ? 10 : 0;
    const { className, ...props } = this.props;

    return (
      <Container fluid={this.props.fluid} className={className}>
        {this.props.disabled && (
          <div
            className="hit-box-container"
            onMouseOver={this.mouseOver}
            onMouseLeave={this.mouseLeaves}
          />
        )}
        <StyledButton {...props} disabled={disabled}>
          {showIcon && (
            <div className="icon" style={{ marginRight: marginOffset }}>
              <i className={icon} />
            </div>
          )}{" "}
          {this.props.text || this.props.children}
        </StyledButton>
        <Tooltip
          text="This action is disabled."
          isVisible={this.state.showTooltip}
        />
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

Button.propTypes = {
  activated: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.keys(buttonSizes)),
  type: PropTypes.oneOf(Object.keys(buttonTypes)),
  fluid: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  tabIndex: PropTypes.number,
  className: PropTypes.string
};

export default Button;
