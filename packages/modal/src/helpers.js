import { useState } from "react";
import PropTypes from "prop-types";

export const useModal = ({ openAtMount = false } = {}) => {
  const [isOpen, setOpen] = useState(openAtMount);
  const actions = {
    open: () => setOpen(true),
    close: () => setOpen(false),
    toggle: () => setOpen(val => !val),
  };
  const props = { isOpen, onRequestClose: actions.close };

  return [props, actions];
};

export const ModalManager = ({ children, ...options }) =>
  children(...useModal(options)) || null;

ModalManager.propTypes = {
  children: PropTypes.func.isRequired,
};
