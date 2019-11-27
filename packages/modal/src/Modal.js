import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { useTransition } from "react-spring";
import Button, { buttonSizes } from "@crave/farmblocks-button";
import Text, { fontSizes } from "@crave/farmblocks-text";
import { MdRemove } from "@crave/farmblocks-icon";

import {
  Wrapper,
  Overlay,
  CardWrapper,
  ConstrainedCard,
  ContentWrapper,
  Section,
  HeaderWrapper,
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
  showCloseButton,
  children,
  cardProps,
  closeButtonProps,
  className,
  verticalAlign,
  zIndex,
  header,
  headerProps,
  footer,
  footerProps,
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
      zIndex,
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    trail: 1,
    unique: true,
  });
  const slide = useTransition(isOpen, null, {
    from: { transform: "translate3D(0, 50px, 0)" },
    enter: { transform: "translate3D(0, 0, 0)" },
    leave: { transform: "translate3D(0, 50px, 0)" },
    unique: true,
  });

  return ReactDOM.createPortal(
    fade.map(
      ({ item: fadeItem, key: fadeKey, props: fadeStyle }) =>
        fadeItem && (
          <Wrapper
            className={className}
            key={fadeKey}
            style={fadeStyle}
            p={[1, 1, 5]}
            pb={[2, 2, 5]}
            justifyContent={verticalAlign}
          >
            <Overlay
              data-testid="modal-overlay"
              className="overlay"
              onClick={shouldCloseOnOverlayClick ? onRequestClose : undefined}
            />
            {slide.map(
              ({ item: slideItem, key: slideKey, props: slideStyle }) =>
                slideItem && (
                  <CardWrapper key={slideKey} style={slideStyle}>
                    <ConstrainedCard
                      floating
                      className="card"
                      p={0}
                      {...cardProps}
                    >
                      {(header || showCloseButton) && (
                        <Section className="header" header {...headerProps}>
                          <HeaderWrapper>{header}</HeaderWrapper>
                          {showCloseButton && (
                            <Button
                              className="closeButton"
                              icon={<MdRemove size={24} />}
                              size={buttonSizes.SMALL}
                              onClick={onRequestClose}
                              data-testid="modal-close-icon"
                              {...closeButtonProps}
                            />
                          )}
                        </Section>
                      )}

                      <ContentWrapper className="content">
                        {children}
                      </ContentWrapper>
                      {footer && (
                        <Section className="footer" {...footerProps}>
                          {footer}
                        </Section>
                      )}
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
  showCloseButton: true,
  verticalAlign: ["flex-end", "flex-start"],
  zIndex: 1500,
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  parentNode: PropTypes.instanceOf(HTMLElement),
  shouldCloseOnOverlayClick: PropTypes.bool,
  shouldCloseOnEsc: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  onRequestClose: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  children: PropTypes.node,
  header: PropTypes.node,
  headerProps: PropTypes.object,
  footer: PropTypes.node,
  footerProps: PropTypes.object,
  cardProps: PropTypes.shape(ConstrainedCard.propTypes),
  closeButtonProps: PropTypes.shape(Button.propTypes),
  className: PropTypes.string,
  verticalAlign: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  zIndex: PropTypes.number,
};

export const ModalTitle = props => (
  <Text fontWeight="title" size={fontSizes.HUGE} {...props} />
);

export default Modal;
