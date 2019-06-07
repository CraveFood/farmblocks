import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { useTransition } from "react-spring";
import Link from "@crave/farmblocks-link";

import {
  Wrapper,
  Overlay,
  CardWrapper,
  ConstrainedCard,
  ContentWrapper,
  Header,
} from "./Modal.styled";
import { useESCKey, useScrollLock, useChangeCallback } from "./Modal.hooks";

const Modal = ({
  isOpen,
  parentNode,
  shouldCloseOnOverlayClick,
  shouldCloseOnEsc,
  onRequestClose,
  onOpen,
  onClose,
  showCloseIcon,
  children,
  cardProps,
  closeProps,
  className,
  verticalAlign,
  zIndex,
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
  useChangeCallback({
    initialValue: Modal.defaultProps.isOpen,
    currentValue: isOpen,
    onChange: isOpen ? onOpen : onClose,
  });

  const fade = useTransition(isOpen, null, {
    from: {
      opacity: 0,
      position:
        parentNode === Modal.defaultProps.parentNode ? "fixed" : "absolute",
      justifyContent: verticalAlign,
      zIndex,
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    unique: true,
  });
  const slide = useTransition(isOpen, null, {
    from: { transform: "translate3D(0, 50px, 0)" },
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
                  <CardWrapper key={slideKey} style={slideStyle}>
                    <ConstrainedCard floating className="card" {...cardProps}>
                      {showCloseIcon && (
                        <Header className="header">
                          <Link
                            className="close"
                            rightIcon="wg-close-int"
                            onClick={onRequestClose}
                            data-testid="modal-close-icon"
                            {...closeProps}
                          />
                        </Header>
                      )}
                      <ContentWrapper className="content">
                        {children}
                      </ContentWrapper>
                    </ConstrainedCard>
                  </CardWrapper>
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
  showCloseIcon: true,
  verticalAlign: "flex-start",
  zIndex: 1500,
};
Modal.propTypes = {
  isOpen: PropTypes.bool,
  parentNode: PropTypes.instanceOf(HTMLElement),
  shouldCloseOnOverlayClick: PropTypes.bool,
  shouldCloseOnEsc: PropTypes.bool,
  showCloseIcon: PropTypes.bool,
  onRequestClose: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  children: PropTypes.node,
  cardProps: PropTypes.shape(ConstrainedCard.propTypes),
  closeProps: PropTypes.shape(Link.propTypes),
  className: PropTypes.string,
  verticalAlign: PropTypes.oneOf(["flex-start", "center", "flex-end"]),
  zIndex: PropTypes.number,
};

export default Modal;
