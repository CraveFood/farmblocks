import React, { useRef } from "react";
import PropTypes from "prop-types";
import values from "object.values";

import { Container, StyledTooltip } from "./TooltipContent.styled";
import POSITIONS from "./constants/positions";
import useAutoAlign from "./useAutoAlign";

const Tooltip = ({
  children,
  text,
  positionX: originalPositionX,
  positionY: originalPositionY,
  ...props
}) => {
  const content = children || text;

  const tooltipRef = useRef(null);

  const { positionX, positionY, triggerHeight, ready } = useAutoAlign({
    originalPositionX,
    originalPositionY,
    tooltipRef,
    isVisible: props.isVisible,
    offset: props.offset,
  });

  return (
    <Container {...props}>
      {content && (
        <StyledTooltip
          {...props}
          isVisible={ready}
          positionX={positionX}
          positionY={positionY}
          ref={tooltipRef}
          triggerHeight={triggerHeight}
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
  positionX: PropTypes.oneOf(values(POSITIONS.X)),
  positionY: PropTypes.oneOf(values(POSITIONS.Y)),
  zIndex: PropTypes.number,
  hideArrow: PropTypes.bool,
  padding: PropTypes.string,
  offset: PropTypes.string,
  overflow: PropTypes.string,
  fullScreenBreakpoint: PropTypes.string,
};

Tooltip.defaultProps = {
  isVisible: true,
  positionX: POSITIONS.X.LEFT,
  zIndex: 1000,
  offset: "15px",
  positionY: POSITIONS.Y.BOTTOM,
};

export default Tooltip;
