import * as React from "react";
import PropTypes from "prop-types";
import { fontSizes } from "@crave/farmblocks-theme";
import disabledTooltip, {
  newPropTypes
} from "@crave/farmblocks-hoc-disabled-tooltip";

import linkTypes from "../constants/linkTypes";
import StyledLink from "../styledComponents/Link";

const Container = disabledTooltip(StyledLink);

const Link = props => {
  const {
    size,
    lineHeight,
    type,
    disabled,
    tooltipText,
    tooltipAlign,
    displayBlock,
    leftIcon,
    external,
    children,
    ...linkProps
  } = props;
  const containerProps = {
    size,
    lineHeight,
    type,
    disabled,
    tooltipText,
    tooltipAlign,
    displayBlock
  };
  return (
    <Container {...containerProps}>
      {leftIcon && <i className={`${leftIcon} margin-right }`} />}
      <a {...linkProps}>{children}</a>
      {external && <i className="wg-external-link margin-left" />}
    </Container>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(Object.values(linkTypes)),
  leftIcon: PropTypes.string,
  external: PropTypes.bool,
  size: PropTypes.number,
  lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ...newPropTypes
  //... and all properties of html <a>
};

Link.defaultProps = {
  type: linkTypes.FEATURED,
  tooltipAlign: "left",
  tooltipText: "This link is disabled",
  size: fontSizes.MEDIUM,
  lineHeight: 1,
  disabled: false,
  external: false
};

export default Link;
