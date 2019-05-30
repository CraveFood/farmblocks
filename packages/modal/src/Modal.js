import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { useTransition, animated } from "react-spring";
import Link from "@crave/farmblocks-link";

import {
  Wrapper,
  Overlay,
  ConstrainedCard,
  ContentWrapper,
  Header,
} from "./Modal.styled";
import { useESCKey, useScrollLock } from "./Modal.hooks";

const Modal = ({
  isOpen,
  parentNode,
  shouldCloseOnOverlayClick,
  shouldCloseOnEsc,
  onRequestClose,
  showCloseButton,
  children,
  cardProps,
  closeProps,
  className,
  verticalAlign,
}) => {
  if (!parentNode) return null;

  useESCKey({
    condition: shouldCloseOnEsc && isOpen,
    element: parentNode,
    listener: onRequestClose,
  });
  useScrollLock({
    condition: isOpen,
    element: parentNode,
  });

  const fade = useTransition(isOpen, null, {
    from: {
      opacity: 0,
      position:
        parentNode === Modal.defaultProps.parentNode ? "fixed" : "absolute",
      justifyContent: verticalAlign,
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  const slide = useTransition(isOpen, null, {
    from: { transform: "translate3D(0, 50px, 0)", maxHeight: "100%" },
    enter: { transform: "translate3D(0, 0px, 0)" },
    leave: { transform: "translate3D(0, -100px, 0)" },
    unique: true,
  });

  return ReactDOM.createPortal(
    fade.map(
      ({ item: fadeItem, key: fadeKey, props: fadeStyle }) =>
        fadeItem && (
          <Wrapper className={className} key={fadeKey} style={fadeStyle}>
            <Overlay
              data-testid="modal-overlay"
              className="overlay"
              onClick={shouldCloseOnOverlayClick ? onRequestClose : undefined}
            />
            {slide.map(
              ({ item: slideItem, key: slideKey, props: slideStyle }) =>
                slideItem && (
                  <animated.div key={slideKey} style={slideStyle}>
                    <ConstrainedCard floating className="card" {...cardProps}>
                      {showCloseButton && (
                        <Header className="header">
                          <Link
                            className="close"
                            rightIcon="wg-close-int"
                            onClick={onRequestClose}
                            data-testid="modal-close-button"
                            {...closeProps}
                          />
                        </Header>
                      )}
                      <ContentWrapper className="content">
                        {children}
                      </ContentWrapper>
                    </ConstrainedCard>
                  </animated.div>
                ),
            )}
          </Wrapper>
        ),
    ),
    parentNode,
  );
};
Modal.defaultProps = {
  isOpen: false,
  parentNode: document.body,
  shouldCloseOnOverlayClick: true,
  shouldCloseOnEsc: true,
  showCloseButton: true,
  verticalAlign: "flex-start",
};
Modal.propTypes = {
  isOpen: PropTypes.bool,
  parentNode: PropTypes.instanceOf(HTMLElement),
  shouldCloseOnOverlayClick: PropTypes.bool,
  shouldCloseOnEsc: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  onRequestClose: PropTypes.func,
  children: PropTypes.node,
  cardProps: PropTypes.shape(ConstrainedCard.propTypes),
  closeProps: PropTypes.shape(Link.propTypes),
  className: PropTypes.string,
  verticalAlign: PropTypes.oneOf(["flex-start", "center", "flex-end"]),
};

export default Modal;
