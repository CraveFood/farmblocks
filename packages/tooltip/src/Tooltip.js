import * as React from "react";
import PropTypes from "prop-types";
import values from "object.values";

import { Container, StyledTooltip } from "./styledComponents/Tooltip";
import alignments from "./constants/alignments";

export const getAutoAlign = (tooltipRef, bondariesSelector) => {
  if (tooltipRef) {
    const { right } = tooltipRef.getBoundingClientRect();

    const bondariesNode =
      bondariesSelector && tooltipRef.closest(bondariesSelector);

    const maxRight =
      (bondariesNode && bondariesNode.getBoundingClientRect().right) ||
      window.innerWidth;

    if (right >= maxRight) return alignments.RIGHT;
  }
  return alignments.LEFT;
};

class Tooltip extends React.Component {
  state = {
    align: this.props.align
  };
  componentDidMount = () => {
    const { align: originalAlign, bondariesSelector } = this.props;
    const align =
      originalAlign === alignments.AUTO
        ? getAutoAlign(this.tooltipRef, bondariesSelector)
        : originalAlign;
    this.setState({ align });
  };
  render() {
    const content = this.props.children || this.props.text;

    return (
      <Container>
        {content && (
          <StyledTooltip
            {...this.props}
            align={this.state.align}
            innerRef={element => (this.tooltipRef = element)}
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
  zIndex: PropTypes.number,
  bondariesSelector: PropTypes.string,
  hideArrow: PropTypes.bool,
  padding: PropTypes.string,
  top: PropTypes.string
};

Tooltip.defaultProps = {
  isVisible: true,
  align: alignments.LEFT,
  zIndex: 1000,
  top: "15px"
};

export default Tooltip;
