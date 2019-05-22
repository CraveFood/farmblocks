import React, { useState } from "react";
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

export const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay className="overlay">
      <ConstrainedCard floating className="card">
        <ContentWrapper className="content">{children}</ContentWrapper>
      </ConstrainedCard>
    </Overlay>,
    document.body,
  );
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
