import * as React from "react";
import PropTypes from "prop-types";
import values from "object.values";

import { Container, StyledTooltip } from "./styledComponents/Tooltip";
import alignments from "./constants/alignments";

const Tooltip = props => {
  const content = props.children || props.text;
  return (
    <Container>
      {content && <StyledTooltip {...props}>{content}</StyledTooltip>}
    </Container>
  );
};

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
