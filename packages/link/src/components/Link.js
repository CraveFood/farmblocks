import * as React from "react";
import PropTypes from "prop-types";
import values from "object.values";
import { fontSizes } from "@crave/farmblocks-theme";
import disabledTooltip, {
  disabledTooltipProps
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
    rightIcon,
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

  const componentType = linkProps.href ? "a" : "span";

  return (
    <Container {...containerProps}>
      {leftIcon && <i className={`${leftIcon} margin-right }`} />}
      {React.createElement(componentType, { ...linkProps }, children)}
      {rightIcon && <i className={`${rightIcon} margin-left }`} />}
      {external && <i className="wg-external-link margin-left" />}
    </Container>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(values(linkTypes)),
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  external: PropTypes.bool,
  size: PropTypes.number,
  lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func,
  ...disabledTooltipProps
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
