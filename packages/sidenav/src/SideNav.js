import React from "react";
import PropTypes from "prop-types";
import { useScrollLock } from "@crave/farmblocks-modal";
import { colors } from "@crave/farmblocks-theme";

import { FULLSCREEN, PUSH, OVERLAY } from "./constants/variants";
import SideBar from "./components/SideBar";
import { ToggleButton, CloseButton } from "./components/NavButton";

const SideNav = ({ render, onToggle, onClose, ...props }) => {
  const { highlightColor, variant, expanded, zIndex } = props;

  useScrollLock({
    condition: props.expanded && props.variant === FULLSCREEN,
    element: document.body,
  });

  return (
    <>
      {onToggle && (
        <ToggleButton
          zIndex={zIndex}
          variant={variant}
          highlightColor={highlightColor}
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
          <CloseButton
            variant={variant}
            highlightColor={highlightColor}
            expanded={expanded}
            onClick={onClose}
            data-testid="close-navbar"
          />
        )}
        {render({ highlightColor, variant })}
      </SideBar>
    </>
  );
};

SideNav.defaultProps = {
  backgroundColor: colors.SUGAR,
  zIndex: 100,
  offsetTop: "0",
  collapsedWidth: "56px",
  expandedWidth: "270px",
  variant: PUSH,
  expanded: true,
};

SideNav.propTypes = {
  render: PropTypes.func,
  backgroundColor: PropTypes.string,
  offsetTop: PropTypes.string,
  collapsedWidth: PropTypes.string,
  expandedWidth: PropTypes.string,
  expanded: PropTypes.bool,
  variant: PropTypes.oneOf([PUSH, FULLSCREEN, OVERLAY]),
  highlightColor: PropTypes.string,
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onToggle: PropTypes.func,
  onClose: PropTypes.func,
};

export default SideNav;
