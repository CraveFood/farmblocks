import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Link from "@crave/farmblocks-link";

import {
  Wrapper,
  Overlay,
  ConstrainedCard,
  ContentWrapper,
  Header,
} from "./Modal.styled";

const Modal = ({
  isOpen,
  parentNode,
  shouldCloseOnOverlayClick,
  shouldCloseOnEsc,
  onRequestClose,
  showCloseButton,
  children,
}) => {
  if (!isOpen) return null;

  const handleKeyDown = event => {
    if (shouldCloseOnEsc && event.key === "Escape") {
      onRequestClose?.(event);
    }
  };

  useEffect(() => {
    const originalOverflow = parentNode.style?.overflow;

    // eslint-disable-next-line no-param-reassign
    parentNode.style.overflow = "hidden";

    parentNode.addEventListener("keydown", handleKeyDown);

    return () => {
      // eslint-disable-next-line no-param-reassign
      parentNode.style.overflow = originalOverflow;

      parentNode.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return ReactDOM.createPortal(
    <Wrapper>
      <Overlay
        className="overlay"
        onClick={shouldCloseOnOverlayClick ? onRequestClose : undefined}
      />
      <ConstrainedCard floating className="card">
        {showCloseButton && (
          <Header className="header">
            <Link
              className="close"
              rightIcon="wg-close-int"
              onClick={onRequestClose}
            />
          </Header>
        )}
        <ContentWrapper className="content">{children}</ContentWrapper>
      </ConstrainedCard>
    </Wrapper>,
    parentNode,
  );
};
Modal.defaultProps = {
  isOpen: false,
  parentNode: document.body,
  shouldCloseOnOverlayClick: true,
  shouldCloseOnEsc: true,
  showCloseButton: true,
};
Modal.propTypes = {
  isOpen: PropTypes.bool,
  parentNode: PropTypes.instanceOf(HTMLElement),
  shouldCloseOnOverlayClick: PropTypes.bool,
  shouldCloseOnEsc: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  onRequestClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
