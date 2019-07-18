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
  boundariesSelector,
  ...props
}) => {
  const content = children || text;

  const tooltipRef = useRef(null);

  const { positionX, positionY, triggerHeight, ready } = useAutoAlign({
    originalPositionX,
    originalPositionY,
    boundariesSelector,
    tooltipRef,
    isVisible: props.isVisible,
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
  boundariesSelector: PropTypes.string,
  hideArrow: PropTypes.bool,
  padding: PropTypes.string,
  offset: PropTypes.string,
  overflow: PropTypes.string,
};

Tooltip.defaultProps = {
  isVisible: true,
  positionX: POSITIONS.X.LEFT,
  zIndex: 1000,
  offset: "15px",
  positionY: POSITIONS.Y.BOTTOM,
};

export default Tooltip;
