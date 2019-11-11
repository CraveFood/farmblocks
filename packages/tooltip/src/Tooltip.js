/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import TooltipContent from "./TooltipContent";

const Container = styled.div`
  position: relative;
  display: ${props => (props.displayBlock ? "block" : "inline-block")};

  .hit-area {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .appear-enter {
    opacity: 0;
  }

  .appear-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in;
  }

  .appear-exit {
    opacity: 1;
  }

  .appear-exit-active {
    opacity: 0;
    transition: opacity 200ms ease-out;
  }

  @media only screen and (max-width: 480px) {
    .hit-area {
      min-height: 40px;
      min-width: 40px;
    }
  }
`;

const Tooltip = props => {
  const [isVisible, setIsVisible] = useState(false);

  const {
    className,
    disableTooltip,
    displayBlock,
    trigger,
    content,
    onMouseOver,
    onMouseLeave,
    ...tooltipProps
  } = props;

  return (
    <Container className={className} displayBlock={displayBlock}>
      {!disableTooltip && (
        <div
          className="hit-area"
          onMouseOver={e => {
            setIsVisible(true);
            onMouseOver?.(e);
          }}
          onMouseLeave={e => {
            setIsVisible(false);
            onMouseLeave?.(e);
          }}
        />
      )}
      {trigger}
      <CSSTransition
        in={isVisible}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="appear"
      >
        <TooltipContent className="tooltip" {...tooltipProps}>
          {content}
        </TooltipContent>
      </CSSTransition>
    </Container>
  );
};

Tooltip.propTypes = {
  disableTooltip: PropTypes.bool,
  displayBlock: PropTypes.bool,
  trigger: PropTypes.node,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  // eslint-disable-next-line react/forbid-prop-types
  tooltipProps: PropTypes.object,
  onMouseLeave: PropTypes.func,
  onMouseOver: PropTypes.func,
  className: PropTypes.string,
};

export default Tooltip;
