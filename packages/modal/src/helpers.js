import { useState } from "react";
import PropTypes from "prop-types";

export const useModal = () => {
  const [isOpen, setOpen] = useState(false);
  const actions = {
    open: () => setOpen(true),
    close: () => setOpen(false),
    toggle: () => setOpen(val => !val),
  };
  const props = { isOpen, onRequestClose: actions.close };

  return [props, actions];
};

export const ModalManager = ({ children }) => children(...useModal()) || null;

ModalManager.propTypes = {
  children: PropTypes.func.isRequired,
};
