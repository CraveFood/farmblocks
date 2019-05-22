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

export const Modal = ({ isOpen, parentNode, children }) => {
  if (!isOpen) return null;

  useEffect(() => {
    const originalOverflow = parentNode.style?.overflow;

    // eslint-disable-next-line no-param-reassign
    parentNode.style.overflow = "hidden";

    return () => {
      // eslint-disable-next-line no-param-reassign
      parentNode.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return ReactDOM.createPortal(
    <Overlay className="overlay">
      <ConstrainedCard floating className="card">
        <ContentWrapper className="content">{children}</ContentWrapper>
      </ConstrainedCard>
    </Overlay>,
    parentNode,
  );
};
Modal.defaultProps = {
  parentNode: document.body,
};

export const useModal = () => {
  const [isOpen, setOpen] = useState(false);
  const Comp = props => <Modal isOpen={isOpen} {...props} />;
  const actions = {
    open: () => setOpen(true),
    close: () => setOpen(false),
    toggle: () => setOpen(open => !open),
  };

  return [Comp, actions];
};

export const ModalFactory = ({ children }) => {
  const [ModalComp, actions] = useModal();

  return children(ModalComp, actions);
};

export default Modal;
