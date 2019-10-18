import React from "react";
import PropTypes from "prop-types";
import { useScrollLock } from "@crave/farmblocks-modal";

import { FULLSCREEN } from "./constants/variants";
import SideBar from "./components/SideBar";
import { ToggleButton, CloseButton } from "./components/NavButton";

const SideNav = ({ children, onToggle, onClose, ...props }) => {
  useScrollLock({
    condition: props.expanded && props.variant === FULLSCREEN,
    element: document.body,
  });

  return (
    <>
      {onToggle && (
        <ToggleButton
          {...props}
          onClick={onToggle}
          active={!props.expanded}
          data-testid="toggle-navbar"
        />
      )}
      <SideBar
        data-testid={`navbar-${props.expanded ? "expanded" : "collapsed"}`}
        {...props}
      >
        {onClose && (
          <CloseButton onClick={onClose} data-testid="close-navbar" />
        )}
        {children}
      </SideBar>
    </>
  );
};

SideNav.defaultProps = {
  ...SideBar.defaultProps,
};

SideNav.propTypes = {
  ...SideBar.propTypes,
  onToggle: PropTypes.func,
  onClose: PropTypes.func,
};

export default SideNav;
