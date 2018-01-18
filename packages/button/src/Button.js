import * as React from "react";
import PropTypes from "prop-types";
import disabledTooltip, {
  disabledTooltipProps
} from "@crave/farmblocks-hoc-disabled-tooltip";

import buttonSizes from "./constants/buttonSizes";
import buttonTypes from "./constants/buttonTypes";
import StyledButton from "./styledComponents/Button";

const EnhancedButton = disabledTooltip(StyledButton);

const Button = props => {
  const { disabled, icon, rightIcon, text, children, ...buttonProps } = props;

  // @FIXME revisit font icon assets on farmblocks
  const iconName = buttonProps.loading ? "wg-loading" : icon;

  const isDisabled = disabled || buttonProps.loading;
  const showIcon = icon || buttonProps.loading;
  const marginOffset = text || children ? 10 : 0;
  const buttonContent = text || children;
  const isIconOnly = buttonContent === undefined;

  return (
    <EnhancedButton
      disabled={isDisabled}
      isIconOnly={isIconOnly}
      displayBlock={buttonProps.fluid}
      {...buttonProps}
    >
      {showIcon && (
        <div className="icon" style={{ marginRight: marginOffset }}>
          <i className={iconName} />
        </div>
      )}
      {buttonContent}
      {rightIcon && (
        <div className="icon" style={{ marginLeft: marginOffset }}>
          <i className={rightIcon} />
        </div>
      )}
    </EnhancedButton>
  );
};

Button.defaultProps = {
  size: buttonSizes.SMALL,
  type: buttonTypes.NEUTRAL,
  tooltipText: "This action is disabled"
};

Button.propTypes = {
  activated: PropTypes.bool,
  icon: PropTypes.string,
  rightIcon: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.keys(buttonSizes)),
  type: PropTypes.oneOf(Object.keys(buttonTypes)),
  fluid: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  ...disabledTooltipProps
  //... and all properties accepted by the html button
};

export default Button;
