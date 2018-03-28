import * as React from "react";
import PropTypes from "prop-types";
import values from "object.values";

import { Container, StyledTooltip } from "./styledComponents/Tooltip";
import alignments from "./constants/alignments";

export const getAutoAlign = bodyWidth => containerRef => {
  if (containerRef) {
    const { x } = containerRef.getBoundingClientRect(); // Position of the element on viewport
    const halfViewport = bodyWidth / 2;
    if (x > halfViewport) return alignments.RIGHT;
  }
  return alignments.LEFT;
};

class Tooltip extends React.Component {
  state = {
    align: this.props.align
  };
  componentDidMount = () => {
    const align =
      this.props.align === alignments.AUTO
        ? getAutoAlign(document.body.clientWidth)(this.containerRef)
        : this.props.align;
    this.setState({ align });
  };
  render() {
    const content = this.props.children || this.props.text;

    return (
      <Container>
        <div ref={element => (this.containerRef = element)}>
          {content && (
            <StyledTooltip {...this.props} align={this.state.align}>
              {content}
            </StyledTooltip>
          )}
        </div>
      </Container>
    );
  }
}

Tooltip.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
  isVisible: PropTypes.bool,
  align: PropTypes.oneOf(values(alignments)),
  zIndex: PropTypes.number
};

Tooltip.defaultProps = {
  isVisible: true,
  align: alignments.LEFT,
  zIndex: 1000
};

export default Tooltip;
