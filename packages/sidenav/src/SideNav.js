import React from "react";
import PropTypes from "prop-types";
import { colors } from "@crave/farmblocks-theme";
import { useScrollLock } from "@crave/farmblocks-modal";

import { PUSH, FULLSCREEN, OVERLAY } from "./constants/variants";
import { Sidebar } from "./SideNav.styled";
import { NavToggle, NavClose } from "./NavButton";

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
    condition: props.expanded && props.variant === FULLSCREEN,
    element: document.body,
  });

  return (
    <>
      {onToggle && (
        <NavToggle
          {...props}
          onClick={onToggle}
          active={!props.expanded}
          data-testid="toggle-navbar"
        />
      )}
      <SideNav
        data-testid={`navbar-${props.expanded ? "expanded" : "collapsed"}`}
        {...props}
      >
        {onClose && <NavClose onClick={onClose} data-testid="close-navbar" />}
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
  /**
   The following props will be injected on all SideNav childrens: [highlightColor, variant, expanded, zIndex]
  */
  children: PropTypes.node,
  /**
   Background color of the navBar
  */
  background: PropTypes.string,
  /**
   The "top" style value. e.g. used to add offset gap of a top bar
   */
  offsetTop: PropTypes.string,
  /**
   PUSH= width on collapsed state(!expanded), OVERLAY/FULLSCREEN= always "0px"
   */
  collapsedWidth: PropTypes.string,
  /**
   PUSH/OVERLAY= width on expanded state(expanded), FULLSCREEN= always "100%"
   */
  expandedWidth: PropTypes.string,
  /**
   Sidebar state value (collapsed/expanded)
   */
  expanded: PropTypes.bool,
  /**
   The sidebar style
   */
  variant: PropTypes.oneOf([PUSH, FULLSCREEN, OVERLAY]),
  /**
   "Active" color for Icon, lef-border and background (transparentized) 
   */
  highlightColor: PropTypes.string,
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SideNavWithButtons.defaultProps = {
  ...SideNav.defaultProps,
};

SideNavWithButtons.propTypes = {
  ...SideNav.propTypes,
};

export default SideNav;
