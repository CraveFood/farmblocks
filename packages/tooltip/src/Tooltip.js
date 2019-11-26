/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import TooltipContent from "./TooltipContent";
import Container from "./Tooltip.styled";

const Tooltip = props => {
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

  const [isVisible, setIsVisible] = useState(false);
  const tooltip = useRef();

  const hide = () => {
    setIsVisible(false);
  };

  const handleOuterClick = event => {
    if (tooltip.current?.contains(event.target)) {
      return;
    }

    if (isVisible) {
      hide();
    }
  };

  useEffect(() => {
    document.addEventListener("touch", handleOuterClick, {
      capture: true,
    });
    return () => {
      document.removeEventListener("touch", handleOuterClick, {
        capture: true,
      });
    };
  }, []);

  return (
    <Container
      ref={tooltip}
      className={className}
      displayBlock={displayBlock}
      onMouseLeave={event => {
        hide();
        onMouseLeave?.(event);
      }}
    >
      {!disableTooltip && (
        <div
          className="hit-area"
          onMouseOver={e => {
            setIsVisible(true);
            onMouseOver?.(e);
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
        <TooltipContent
          className="tooltip"
          onHideButtonClick={hide}
          {...tooltipProps}
        >
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
