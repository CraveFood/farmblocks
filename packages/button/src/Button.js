import * as React from "react";
import PropTypes from "prop-types";
import { withAnimation, MdLoading } from "@crave/farmblocks-icon";

import StyledButton from "./styledComponents/Button";
import buttonVariants from "./constants/buttonVariants";

const LoadingIcon = withAnimation(MdLoading);

const Button = React.forwardRef(
  (
    {
      disabled,
      icon,
      rightIcon,
      text,
      children,
      loading,
      active,
      focused,
      hovered,
      ...buttonProps
    },
    ref,
  ) => {
    const leftIcon = loading ? (
      <LoadingIcon size={22} data-testid="loading" />
    ) : (
      icon
    );

    const isDisabled = disabled || loading;
    const buttonContent = text || children;
    const iconOffset = buttonContent ? 8 : 0;

    const paddingX = buttonContent ? 16 : 4;
    const paddingY = 4;

    const classNames = `${active ? "active" : ""} ${focused ? "focused" : ""} ${
      hovered ? "hovered" : ""
    }`;

    return (
      <StyledButton
        disabled={isDisabled}
        paddingX={paddingX}
        paddingY={paddingY}
        ref={ref}
        type="button"
        {...buttonProps}
        className={`${buttonProps.className} ${classNames}`}
        iconOnly={!buttonContent}
      >
        {leftIcon && (
          <div
            className="icon left-icon"
            style={{ transform: `translateX(-${iconOffset}px)` }}
          >
            {leftIcon}
          </div>
        )}

        <span>{buttonContent}</span>

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
  variant: PropTypes.oneOf(Object.keys(buttonVariants)),
  small: PropTypes.bool,
  active: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  icon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
  text: PropTypes.string,
  children: PropTypes.node,
  fluid: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  // ... and all properties accepted by the html button
};

Button.defaultProps = {
  variant: buttonVariants.NEUTRAL,
};

export default Button;

export const PrimaryButton = props => (
  <Button {...props} variant={buttonVariants.PRIMARY} />
);
export const NeutralButton = props => (
  <Button {...props} variant={buttonVariants.NEUTRAL} />
);
export const SecondaryButton = props => (
  <Button {...props} variant={buttonVariants.SECONDARY} />
);
export const PositiveButton = props => (
  <Button {...props} variant={buttonVariants.POSITIVE} />
);
export const NegativeButton = props => (
  <Button {...props} variant={buttonVariants.NEGATIVE} />
);
export const GhostButton = props => (
  <Button {...props} variant={buttonVariants.GHOST} />
);
