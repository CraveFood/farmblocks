/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Tooltip, { POSITIONS } from "@crave/farmblocks-tooltip";
import Text from "@crave/farmblocks-text";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";
import { MdQuestion } from "@crave/farmblocks-icon";

import StyledInfo from "../styledComponents/StyledInfo";

const MoreInfo = ({ children, text, tooltipProps, trigger, ...props }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <StyledInfo {...props} tooltipProps={tooltipProps}>
      <Text fontWeight="title" type={fontTypes.NEUTRAL} size={fontSizes.MEDIUM}>
        <span className={`text ${tooltipVisible ? "hovered" : ""}`}>
          {text}
        </span>
        <Tooltip
          trigger={trigger}
          content={children}
          className="icon"
          onMouseOver={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
          {...tooltipProps}
        />
      </Text>
    </StyledInfo>
  );
};

MoreInfo.propTypes = {
  children: PropTypes.node.isRequired,
  trigger: PropTypes.node,
  text: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  tooltipProps: PropTypes.object,
};

MoreInfo.defaultProps = {
  trigger: <MdQuestion />,
  tooltipProps: {
    positionX: POSITIONS.X.CENTER,
  },
};

export default MoreInfo;
