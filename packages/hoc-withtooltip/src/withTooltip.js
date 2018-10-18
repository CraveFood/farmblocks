import * as React from "react";
import Tooltip, { alignments } from "@crave/farmblocks-tooltip";
import wrapDisplayName from "recompose/wrapDisplayName";
import PropTypes from "prop-types";
import styled from "styled-components";
import values from "object.values";

const Container = styled.div`
  position: relative;
  display: ${props => (props.displayBlock ? "block" : "inline-block")};

  .hitArea {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

const withTooltip = WrappedComponent => {
  return class extends React.Component {
    state = {
      tooltipVisible: false
    };

    onMouseOver = event => {
      this.setState({ tooltipVisible: true });
      return this.props.onMouseOver && this.props.onMouseOver(event);
    };

    onMouseLeave = event => {
      this.setState({ tooltipVisible: false });
      return this.props.onMouseLeave && this.props.onMouseLeave(event);
    };

    render() {
      const {
        disableTooltip,
        tooltipContent,
        tooltipAlign,
        zIndex,
        bondariesSelector,
        hideArrow,
        padding,
        top,
        overflow,
        displayBlock,
        ...wrappedComponentProps
      } = this.props;

      const mouseEvents = {
        onMouseOver: this.onMouseOver,
        onMouseLeave: this.onMouseLeave
      };

      return (
        <Container displayBlock={displayBlock}>
          {!disableTooltip && <div className="hitArea" {...mouseEvents} />}
          <WrappedComponent {...wrappedComponentProps} />

          <Tooltip
            isVisible={this.state.tooltipVisible && !disableTooltip}
            align={tooltipAlign}
            zIndex={zIndex}
            bondariesSelector={bondariesSelector}
            hideArrow={hideArrow}
            padding={padding}
            top={top}
            overflow={overflow}
          >
            {tooltipContent}
          </Tooltip>
        </Container>
      );
    }

    static displayName = wrapDisplayName(WrappedComponent, "withTooltip");

    static propTypes = {
      disableTooltip: PropTypes.bool,
      tooltipContent: PropTypes.oneOfType(PropTypes.string, PropTypes.node),
      align: PropTypes.oneOf(values(alignments)),
      zIndex: PropTypes.number,
      bondariesSelector: PropTypes.string,
      hideArrow: PropTypes.bool,
      padding: PropTypes.string,
      top: PropTypes.string,
      overflow: PropTypes.string,
      onMouseLeave: PropTypes.func,
      onMouseOver: PropTypes.func,
      ...WrappedComponent.propTypes
    };

    static defaultProps = {
      ...WrappedComponent.defaultProps
    };
  };
};

export default withTooltip;
