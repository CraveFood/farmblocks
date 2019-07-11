import * as React from "react";
import PropTypes from "prop-types";
import values from "object.values";

import { Container, StyledTooltip } from "./styledComponents/Tooltip";
import alignments from "./constants/alignments";
import positions from "./constants/positions";

export const getAutoAlign = (tooltipRef, bondariesSelector) => {
  const alignedData = {
    align: alignments.LEFT,
    position: positions.BOTTOM,
  };
  if (tooltipRef) {
    const { right, y } = tooltipRef.getBoundingClientRect();

    const bondariesNode =
      bondariesSelector && tooltipRef.closest(bondariesSelector);

    const maxRight =
      (bondariesNode && bondariesNode.getBoundingClientRect().right) ||
      window.innerWidth;

    const maxHeight =
      (bondariesNode && bondariesNode.getBoundingClientRect().y) ||
      window.innerHeight;

    if (right >= maxRight) alignedData.align = alignments.RIGHT;
    if (y >= maxHeight) alignedData.position = positions.TOP;

    return alignedData;
  }
  return alignedData;
};

class Tooltip extends React.Component {
  state = {
    align: this.props.align,
  };

  componentDidMount = () => {
    const {
      align: originalAlign,
      position: originalPosition,
      bondariesSelector,
    } = this.props;

    const alignedData = getAutoAlign(this.tooltipRef, bondariesSelector);
    const align =
      originalAlign === alignments.AUTO ? alignedData.align : originalAlign;

    const position =
      originalPosition === positions.AUTO
        ? alignedData.position
        : originalPosition;

    this.setState({ align, position });
  };

  render() {
    const content = this.props.children || this.props.text;

    return (
      <Container {...this.props}>
        {content && (
          <StyledTooltip
            {...this.props}
            align={this.state.align}
            position={this.state.position}
            ref={element => {
              this.tooltipRef = element;
            }}
          >
            {content}
          </StyledTooltip>
        )}
      </Container>
    );
  }
}

Tooltip.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
  isVisible: PropTypes.bool,
  align: PropTypes.oneOf(values(alignments)),
  position: PropTypes.oneOf(values(positions)),
  zIndex: PropTypes.number,
  bondariesSelector: PropTypes.string,
  hideArrow: PropTypes.bool,
  padding: PropTypes.string,
  offset: PropTypes.string,
  overflow: PropTypes.string,
};

Tooltip.defaultProps = {
  isVisible: true,
  align: alignments.LEFT,
  zIndex: 1000,
  offset: "15px",
  position: positions.BOTTOM,
};

export default Tooltip;
