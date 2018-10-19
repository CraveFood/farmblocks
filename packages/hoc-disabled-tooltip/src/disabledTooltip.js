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
  return class extends React.Component {
    render() {
      const { noTooltip, tooltipText, ...wrappedComponentProps } = this.props;

      return (
        <WrappedComponentWithTooltip
          disableTooltip={!this.props.disabled || noTooltip}
          tooltipContent={tooltipText}
          {...wrappedComponentProps}
        />
      );
    }

    static displayName = wrapDisplayName(
      wrappedComponentType,
      "disabledTooltip"
    );

    static propTypes = {
      ...WrappedComponent.propTypes,
      ...disabledTooltipProps
    };

    static defaultProps = {
      ...WrappedComponent.defaultProps,
      displayBlock: false,
      disabled: false,
      noTooltip: false,
      onMouseOver: () => null,
      onMouseLeave: () => null,
      tooltipAlign: "left",
      tooltipText: "This field is disabled."
    };
  };
}
export default disabledTooltip;
