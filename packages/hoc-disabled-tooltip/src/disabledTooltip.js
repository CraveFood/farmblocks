import * as React from "react";
import PropTypes from "prop-types";
import wrapDisplayName from "recompose/wrapDisplayName";
import Tooltip from "@crave/farmblocks-tooltip";

import Wrapper from "./styledComponents/Wrapper";

function disabledTooltip(wrappedComponentType) {
  const WrappedComponent = props =>
    React.createElement(wrappedComponentType, props);
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showTooltip: false
      };
      this.onMouseOver = this.onMouseOver.bind(this);
      this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseOver(event) {
      this.setState({ showTooltip: true });
      return this.props.onMouseOver(event);
    }

    onMouseLeave(event) {
      this.setState({ showTooltip: false });
      return this.props.onMouseLeave(event);
    }

    render() {
      const {
        displayBlock,
        tooltipAlign,
        tooltipText,
        ...wrappedComponentProps
      } = this.props;
      const wrapperProps = { displayBlock };
      const hitAreaProps = {
        onMouseOver: this.onMouseOver,
        onMouseLeave: this.onMouseLeave
      };
      return (
        <Wrapper {...wrapperProps}>
          <div className="hitWrapper">
            <WrappedComponent {...wrappedComponentProps} />
            {this.props.disabled && <div className="hit" {...hitAreaProps} />}
          </div>
          {this.props.disabled &&
            this.state.showTooltip && (
              <div>
                <Tooltip text={tooltipText} align={tooltipAlign} />
              </div>
            )}
        </Wrapper>
      );
    }

    static displayName = wrapDisplayName(
      wrappedComponentType,
      "disabledTooltip"
    );

    static propTypes = {
      ...WrappedComponent.propTypes,
      displayBlock: PropTypes.bool,
      disabled: PropTypes.bool,
      tooltipAlign: PropTypes.oneOf(["left", "right"]),
      tooltipText: PropTypes.string,
      onMouseLeave: PropTypes.func,
      onMouseOver: PropTypes.func
    };

    static defaultProps = {
      ...WrappedComponent.defaultProps,
      displayBlock: false,
      disabled: false,
      onMouseOver: () => null,
      onMouseLeave: () => null,
      tooltipAlign: "left",
      tooltipText: "This field is disabled."
    };
  };
}

export default disabledTooltip;
