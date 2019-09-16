/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Tooltip, { POSITIONS } from "@crave/farmblocks-tooltip";
import Text from "@crave/farmblocks-text";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

import StyledInfo from "../styledComponents/StyledInfo";

const MoreInfo = ({
  icon,
  children,
  text,
  tooltipProps,
  trigger,
  ...props
}) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <StyledInfo {...props} tooltipProps={tooltipProps}>
      <Text
        fontWeight="title"
        type={fontTypes.NEUTRAL}
        size={fontSizes.MEDIUM}
        className={`text ${tooltipVisible ? "hovered" : ""}`}
      >
        {text}
      </Text>
      <Tooltip
        trigger={trigger || <i className={icon} />}
        content={children}
        className="icon"
        onMouseOver={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
        {...tooltipProps}
      />
    </StyledInfo>
  );
};

MoreInfo.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
  trigger: PropTypes.node,
  text: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  tooltipProps: PropTypes.object,
};

MoreInfo.defaultProps = {
  icon: "wg-question",
  tooltipProps: {
    positionX: POSITIONS.X.CENTER,
  },
};

export default MoreInfo;
