/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { POSITIONS } from "@crave/farmblocks-tooltip";
import Text from "@crave/farmblocks-text";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";
import withTooltip from "@crave/farmblocks-hoc-withtooltip";

import StyledInfo from "../styledComponents/StyledInfo";

const DivWithTooltip = withTooltip("div");

const MoreInfo = ({ icon, children, text, tooltipProps, ...props }) => {
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
        <DivWithTooltip
          tooltipContent={children}
          tooltipProps={tooltipProps}
          className="icon"
          onMouseOver={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
        >
          <i className={icon} />
        </DivWithTooltip>
      </Text>
    </StyledInfo>
  );
};

MoreInfo.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
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
