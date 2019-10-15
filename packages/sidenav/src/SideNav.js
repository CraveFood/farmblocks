import React from "react";
import PropTypes from "prop-types";
import { colors } from "@crave/farmblocks-theme";

import { PUSH, FULLWIDTH, OVERLAY } from "./constants/variants";
import { Sidebar } from "./SideNav.styled";
import { NavToggle, NavClose } from "./NavButton";
import useScrollLock from "./utils/useScrollLock";

const SideNav = React.memo(({ children, ...props }) => {
  const { highlightColor, variant, expanded, zIndex } = props;
  return (
    <Sidebar {...props}>
      {React.Children.map(
        children,
        child =>
          child &&
          React.cloneElement(child, {
            highlightColor,
            variant,
            expanded,
            zIndex,
          }),
      )}
    </Sidebar>
  );
});

export const SideNavWithButtons = ({
  children,
  onToggle,
  onClose,
  ...props
}) => {
  useScrollLock({
    condition: props.expanded && props.variant === FULLWIDTH,
    element: document.body,
  });

  return (
    <>
      {onToggle && (
        <NavToggle {...props} onClick={onToggle} active={!props.expanded} />
      )}
      <SideNav {...props}>
        {onClose && <NavClose onClick={onClose} />}
        {children}
      </SideNav>
    </>
  );
};

SideNav.defaultProps = {
  background: colors.SUGAR,
  zIndex: 100,
  offsetTop: "0",
  collapsedWidth: "56px",
  expandedWidth: "270px",
  variant: PUSH,
  expanded: true,
};

SideNav.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
  zIndex: PropTypes.number,
  offsetTop: PropTypes.string,
  collapsedWidth: PropTypes.string,
  expandedWidth: PropTypes.string,
  expanded: PropTypes.bool,
  variant: PropTypes.oneOf([PUSH, FULLWIDTH, OVERLAY]),
};

SideNavWithButtons.defaultProps = {
  ...SideNav.defaultProps,
};

SideNavWithButtons.propTypes = {
  ...SideNav.propTypes,
  highlightColor: PropTypes.string,
};

export default SideNav;
