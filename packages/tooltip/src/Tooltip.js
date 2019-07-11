import React, { useRef } from "react";
import PropTypes from "prop-types";
import values from "object.values";

import { Container, StyledTooltip } from "./styledComponents/Tooltip";
import alignments from "./constants/alignments";
import positions from "./constants/positions";
import useAutoAlign from "./useAutoAlign";

const Tooltip = ({
  children,
  text,
  align: originalAlign,
  position: originalPosition,
  boundariesSelector,
  ...props
}) => {
  const content = children || text;

  const tooltipRef = useRef(null);

  const { align, position } = useAutoAlign({
    originalAlign,
    originalPosition,
    boundariesSelector,
    tooltipRef,
  });

  return (
    <Container {...props}>
      {content && (
        <StyledTooltip
          {...props}
          align={align}
          position={position}
          ref={tooltipRef}
        >
          {content}
        </StyledTooltip>
      )}
    </Container>
  );
};

Tooltip.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
  isVisible: PropTypes.bool,
  align: PropTypes.oneOf(values(alignments)),
  position: PropTypes.oneOf(values(positions)),
  zIndex: PropTypes.number,
  boundariesSelector: PropTypes.string,
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
