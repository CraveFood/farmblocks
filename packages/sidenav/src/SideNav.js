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
    condition: props.expanded && props.variant !== PUSH,
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
  highlightColor: colors.RED_ORANGE,
  zIndex: 100,
  offsetTop: "0",
  collapsedWidth: "56px",
  expandedWidth: "270px",
  variant: PUSH,
  expanded: true,
};

SideNav.propTypes = {
  /**
    Render the sidebar content, passing as args the following props: highlightColor, variant.
 */
  render: PropTypes.func,
  /**
    Sidebar background color.
 */
  backgroundColor: PropTypes.string,
  /**
    Top spacing gap.
 */
  offsetTop: PropTypes.string,
  /**
    Width on expanded `false` state. (only applied on "push" || "overlay" variant)
  */
  collapsedWidth: PropTypes.string,
  /**
    Width on expanded `true` state. (only applied on "push" variant)
  */
  expandedWidth: PropTypes.string,
  /**
    Whether the sidebar is expanded or collapsed.
  */
  expanded: PropTypes.bool,
  /**
    Style variant.
  */
  variant: PropTypes.oneOf([PUSH, FULLSCREEN, OVERLAY]),
  /**
    Color used to highlight active/hover nav item and close button.
  */
  highlightColor: PropTypes.string,
  /**
    The sidebar z-index
  */
  zIndex: PropTypes.number,
  /**
    Passing this prop will render a hamburguer button on the page top/left corner, that will trigger this function on click.
  */
  onToggle: PropTypes.func,
  /**
    Passing this prop will render a close button on the sidebar top/right corner when expanded. (only applied on "fullScreen" ||
  */
  onClose: PropTypes.func,
};

export default SideNav;
