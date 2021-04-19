import { useState, useMemo } from "react";
import PropTypes from "prop-types";

export const useModal = ({ openAtMount = false } = {}) => {
  const [isOpen, setOpen] = useState(openAtMount);
  const actions = useMemo(
    () => ({
      open: () => setOpen(true),
      close: () => setOpen(false),
      toggle: () => setOpen((val) => !val),
    }),

    [setOpen],
  );
  const props = useMemo(() => ({ isOpen, onRequestClose: actions.close }), [
    isOpen,
    actions,
  ]);

  return [props, actions];
};

export const ModalManager = ({ children, ...options }) =>
  children(...useModal(options)) || null;

ModalManager.propTypes = {
  children: PropTypes.func.isRequired,
};
