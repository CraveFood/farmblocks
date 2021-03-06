import React from "react";
import PropTypes from "prop-types";

import { PUSH, FULLSCREEN, OVERLAY } from "../../constants/variants";
import StyledPageWrapper, { Overlay } from "./PageWrapper.styled";

const PageWrapper = React.memo(({ overlayProps, ...props }) => (
  <>
    {props.variant === OVERLAY && props.expanded && (
      <Overlay data-testid="overlay-pageWrapper" {...overlayProps} />
    )}
    <StyledPageWrapper data-testid="pageWrapper-navbar" {...props} />
  </>
));

PageWrapper.defaultProps = {
  expanded: false,
  offsetTop: "0",
  collapsedWidth: "56px",
  expandedWidth: "270px",
  variant: PUSH,
};

PageWrapper.propTypes = {
  children: PropTypes.node,
  /**
   Sidebar state value (collapsed/extended)
  */
  expanded: PropTypes.bool,
  /**
   The "margin-top" style value. e.g. used to add offset gap of a top bar
  */
  offsetTop: PropTypes.string,
  /**
    PUSH= sidebar offset("margin-left") on collapsed state(!expanded)
  */
  collapsedWidth: PropTypes.string,
  /**
    PUSH= sidebar offset("margin-left") on expanded state(expanded)
  */
  expandedWidth: PropTypes.string,
  /**
   The sidebar style
  */
  variant: PropTypes.oneOf([PUSH, FULLSCREEN, OVERLAY]),
  /**
   Props passed to overlay component
  */
  overlayProps: PropTypes.object, // eslint-disable-line
};

export default PageWrapper;
