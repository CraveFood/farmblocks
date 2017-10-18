// @flow
import * as React from "react";
import Tooltip from "@crave/farmblocks-tooltip";

import type { ButtonType } from "./constants/buttonTypes";
import { SMALL, LARGE } from "./constants/sizeTypes";
import { PRIMARY } from "./constants/buttonTypes";
import Container from "./styledComponents/Container";
import StyledButton from "./styledComponents/Button";

type Props = {
  activated?: boolean,
  icon?: string,
  onClick?: Function,
  text?: string,
  children?: React.Node,
  size: SMALL | LARGE,
  type: ButtonType,
  fluid?: boolean,
  disabled?: boolean,
  loading?: boolean,
  tabIndex?: number
};
type State = {
  showTooltip: boolean
};

class Button extends React.Component<Props, State> {
  static defaultProps = {
    size: SMALL,
    type: PRIMARY
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

  render(): React.Node {
    // @FIXME revisit font icon assets on farmblocks
    const icon = this.props.loading ? "wg-loading" : this.props.icon;

    const disabled = this.props.disabled || this.props.loading;
    const showIcon = this.props.icon || this.props.loading;
    const marginOffset = this.props.text !== undefined ? 10 : 0;

    return (
      <Container fluid={this.props.fluid}>
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

export default Button;
