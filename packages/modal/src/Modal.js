import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { Overlay, ConstrainedCard, ContentWrapper } from "./Modal.styled";

const Modal = ({
  isOpen,
  parentNode,
  shouldCloseOnOverlayClick,
  shouldCloseOnEsc,
  onRequestClose,
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
    <Overlay
      className="overlay"
      onClick={shouldCloseOnOverlayClick ? onRequestClose : undefined}
    >
      <ConstrainedCard floating className="card">
        <ContentWrapper className="content">{children}</ContentWrapper>
      </ConstrainedCard>
    </Overlay>,
    parentNode,
  );
};
Modal.defaultProps = {
  isOpen: false,
  parentNode: document.body,
  shouldCloseOnOverlayClick: true,
  shouldCloseOnEsc: true,
};
Modal.propTypes = {
  isOpen: PropTypes.bool,
  parentNode: PropTypes.instanceOf(HTMLElement),
  shouldCloseOnOverlayClick: PropTypes.bool,
  shouldCloseOnEsc: PropTypes.bool,
  onRequestClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
