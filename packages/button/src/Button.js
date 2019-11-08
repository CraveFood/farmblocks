import * as React from "react";
import PropTypes from "prop-types";
import { withAnimation, MdLoading } from "@crave/farmblocks-icon";

import buttonSizes from "./constants/buttonSizes";
import buttonTypes from "./constants/buttonTypes";
import StyledButton from "./styledComponents/Button";

const LoadingIcon = withAnimation(MdLoading);

const Button = React.forwardRef(
  (
    { disabled, icon, rightIcon, text, children, loading, ...buttonProps },
    ref,
  ) => {
    const leftIcon = loading ? <LoadingIcon data-testid="loading" /> : icon;

    const isDisabled = disabled || loading;
    const showIcon = icon || loading;
    const iconOffset = text || children ? 6 : 0;
    const buttonContent = text || children;
    const isIconOnly = buttonContent === undefined;

    return (
      <StyledButton
        disabled={isDisabled}
        isIconOnly={isIconOnly}
        displayBlock={buttonProps.fluid}
        isLoading={loading}
        ref={ref}
        {...buttonProps}
      >
        {showIcon && (
          <div
            className="icon left-icon"
            style={{ transform: `translateX(-${iconOffset}px)` }}
          >
            {leftIcon}
          </div>
        )}
        {buttonContent}
        {rightIcon && (
          <div
            className="icon right-icon"
            style={{ transform: `translateX(${iconOffset}px)` }}
          >
            {rightIcon}
          </div>
        )}
      </StyledButton>
    );
  },
);

Button.propTypes = {
  activated: PropTypes.bool,
  icon: PropTypes.node,
  rightIcon: PropTypes.node,
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

Button.defaultProps = {
  size: buttonSizes.SMALL,
  type: buttonTypes.NEUTRAL,
};

export default Button;
