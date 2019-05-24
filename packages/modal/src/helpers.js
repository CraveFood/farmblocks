import React, { useState } from "react";
import PropTypes from "prop-types";

import Modal from "./Modal";

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
  Comp.propTypes = Modal.propTypes;

  return [Comp, actions];
};

export const ModalFactory = ({ children }) => children(...useModal());
ModalFactory.propTypes = {
  children: PropTypes.func.isRequired,
};
