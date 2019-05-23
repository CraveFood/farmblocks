import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";
import Card from "@crave/farmblocks-card";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${colors.GREY_32};
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ConstrainedCard = styled(Card)`
  margin: 0 auto;
  max-height: 100%;
  width: auto;
  max-width: 100%;
`;

const ContentWrapper = styled.div`
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

export const Modal = ({
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
  parentNode: document.body,
  shouldCloseOnOverlayClick: true,
  shouldCloseOnEsc: true,
};

export const useModal = () => {
  const [isOpen, setOpen] = useState(false);
  const actions = {
    open: () => setOpen(true),
    close: () => setOpen(false),
    toggle: () => setOpen(open => !open),
  };
  const Comp = ({ onRequestClose, ...props }) => (
    <Modal
      isOpen={isOpen}
      onRequestClose={(...args) => {
        actions.close();
        onRequestClose?.(...args);
      }}
      {...props}
    />
  );

  return [Comp, actions];
};

export const ModalFactory = ({ children }) => {
  const [ModalComp, actions] = useModal();

  return children(ModalComp, actions);
};

export default Modal;
