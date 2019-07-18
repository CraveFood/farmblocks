import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Text from "@crave/farmblocks-text";
import MoreInfo from "@crave/farmblocks-more-info";
import { POSITIONS } from "@crave/farmblocks-tooltip";
import { colors, fontSizes } from "@crave/farmblocks-theme";

const labelColor = props => {
  if (props.focused) {
    return colors.INDIGO_MILK_CAP;
  }
  if (props.invalid) {
    return colors.STRAWBERRY;
  }
  if (props.disabled && !props.protected) {
    return colors.GREY_32;
  }
  return colors.CARBON;
};

const TextLabel = styled(Text)`
  order: 1;
  margin-bottom: 8px;
  float: left;
`;

const MoreInfoWrapper = styled(MoreInfo)`
  position: relative;
  top: -1px;
`;

const Label = ({
  className,
  children,
  moreInfoTooltipProps,
  moreInfoContent,
  ...props
}) => {
  return (
    <div className={className}>
      <TextLabel
        className="labelText"
        fontWeight="title"
        size={fontSizes.SMALL}
        lineHeight="16px"
        letterSpacing="2px"
        upper
        type={labelColor(props)}
      >
        {children}
      </TextLabel>

      {moreInfoContent && (
        <MoreInfoWrapper
          className="moreInfo"
          tooltipProps={{
            positionX: POSITIONS.X.LEFT,
            ...moreInfoTooltipProps,
          }}
        >
          {moreInfoContent}
        </MoreInfoWrapper>
      )}
    </div>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  // eslint-disable-next-line react/forbid-prop-types
  moreInfoTooltipProps: PropTypes.object,
  moreInfoContent: PropTypes.node,
  focused: PropTypes.bool,
  disabled: PropTypes.bool,
  protected: PropTypes.bool,
  invalid: PropTypes.bool,
  className: PropTypes.string,
};

export default Label;
