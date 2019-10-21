import React from "react";
import PropTypes from "prop-types";
import { colors } from "@crave/farmblocks-theme";

import { PUSH, FULLSCREEN, OVERLAY } from "../../constants/variants";
import SideBarStyled from "./SideBar.styled";
import NavItem from "../NavItem";
import { CloseButton } from "../NavButton";
import matchComponent from "../../utils/componentMatcher";

export const SideBarBase = props => <SideBarStyled {...props} />;

const SideBar = React.memo(({ children, ...props }) => {
  const { highlightColor, variant, expanded, zIndex } = props;
  const isNavItem = matchComponent(NavItem);
  const isCloseButton = matchComponent(CloseButton);

  return (
    <SideBarStyled {...props}>
      {React.Children.map(children, child =>
        isNavItem(child) || isCloseButton(child)
          ? React.cloneElement(child, {
              highlightColor,
              variant,
              expanded,
              zIndex,
            })
          : child,
      )}
    </SideBarStyled>
  );
});

SideBar.defaultProps = {
  background: colors.SUGAR,
  zIndex: 100,
  offsetTop: "0",
  collapsedWidth: "56px",
  expandedWidth: "270px",
  variant: PUSH,
  expanded: true,
};

SideBar.propTypes = {
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
   SideBar state value (collapsed/expanded)
   */
  expanded: PropTypes.bool,
  /**
   The SideBar style
   */
  variant: PropTypes.oneOf([PUSH, FULLSCREEN, OVERLAY]),
  /**
   "Active" color for Icon, lef-border and background (transparentized) 
   */
  highlightColor: PropTypes.string,
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SideBarBase.defaultProps = {};
export default SideBar;
