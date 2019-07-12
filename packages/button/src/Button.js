import * as React from "react";
import PropTypes from "prop-types";

import buttonSizes from "./constants/buttonSizes";
import buttonTypes from "./constants/buttonTypes";
import StyledButton from "./styledComponents/Button";

// We need a class component here because some components are passing
// ref to Button
// eslint-disable-next-line react/prefer-stateless-function
export default class Button extends React.Component {
  render() {
    const {
      disabled,
      icon,
      rightIcon,
      text,
      children,
      loading,
      ...buttonProps
    } = this.props;

    // @FIXME revisit font icon assets on farmblocks
    const iconName = loading ? "wg-loading" : icon;

    const isDisabled = disabled || loading;
    const showIcon = icon || loading;
    const marginOffset = text || children ? 10 : 0;
    const buttonContent = text || children;
    const isIconOnly = buttonContent === undefined;

    return (
      <StyledButton
        disabled={isDisabled}
        isIconOnly={isIconOnly}
        displayBlock={buttonProps.fluid}
        isLoading={loading}
        {...buttonProps}
      >
        {showIcon && (
          <div className="icon left-icon" style={{ marginRight: marginOffset }}>
            <i className={iconName} />
          </div>
        )}
        {buttonContent}
        {rightIcon && (
          <div className="icon" style={{ marginLeft: marginOffset }}>
            <i className={rightIcon} />
          </div>
        )}
      </StyledButton>
    );
  }

  static defaultProps = {
    size: buttonSizes.SMALL,
    type: buttonTypes.NEUTRAL,
  };

  static propTypes = {
    activated: PropTypes.bool,
    icon: PropTypes.string,
    rightIcon: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string,
    children: PropTypes.node,
    size: PropTypes.oneOf(Object.keys(buttonSizes)),
    type: PropTypes.oneOf(Object.keys(buttonTypes)),
    fluid: PropTypes.bool,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    boxShadow: PropTypes.string,
    paddingX: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    textColor: PropTypes.string,
    // ... and all properties accepted by the html button
  };
}
