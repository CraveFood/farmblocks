import * as React from "react";
import PropTypes from "prop-types";
import wrapDisplayName from "recompose/wrapDisplayName";
import withTooltip from "@crave/farmblocks-hoc-withtooltip";

export const disabledTooltipProps = {
  displayBlock: PropTypes.bool,
  disabled: PropTypes.bool,
  noTooltip: PropTypes.bool,
  tooltipAlign: PropTypes.oneOf(["left", "right"]),
  tooltipText: PropTypes.string,
  onMouseLeave: PropTypes.func,
  onMouseOver: PropTypes.func
};

function disabledTooltip(wrappedComponentType) {
  const WrappedComponent = props =>
    React.createElement(wrappedComponentType, props);

  const WrappedComponentWithTooltip = withTooltip(WrappedComponent);

  const Component = ({ noTooltip, tooltipText, ...wrappedComponentProps }) => (
    <WrappedComponentWithTooltip
      disableTooltip={!wrappedComponentProps.disabled || noTooltip}
      tooltipContent={tooltipText}
      {...wrappedComponentProps}
    />
  );

  Component.displayName = wrapDisplayName(
    wrappedComponentType,
    "disabledTooltip"
  );

  Component.propTypes = {
    ...WrappedComponent.propTypes,
    ...disabledTooltipProps
  };

  Component.defaultProps = {
    ...WrappedComponent.defaultProps,
    displayBlock: false,
    disabled: false,
    noTooltip: false,
    onMouseOver: () => null,
    onMouseLeave: () => null,
    tooltipAlign: "left",
    tooltipText: "This field is disabled."
  };

  return Component;
}
export default disabledTooltip;
