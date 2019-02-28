import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import values from "object.values";
import Text from "@crave/farmblocks-text";
import MoreInfo from "@crave/farmblocks-more-info";
import { alignments } from "@crave/farmblocks-tooltip";
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
  text-transform: uppercase;
  margin-bottom: 8px;
  color: ${labelColor};
  float: left;
`;

const MoreInfoWrapper = styled(MoreInfo)`
  position: relative;
  top: -1px;
`;

const Label = ({ children, moreInfoAlign, moreInfoContent, ...props }) => {
  return (
    <div>
      <TextLabel
        title
        size={fontSizes.SMALL}
        lineHeight="16px"
        letterSpacing="2px"
        type={labelColor(props)}
      >
        {children}
      </TextLabel>

      {moreInfoContent && (
        <MoreInfoWrapper tooltipAlign={moreInfoAlign}>
          {moreInfoContent}
        </MoreInfoWrapper>
      )}
    </div>
  );
};

Label.defaultProps = {
  moreInfoAlign: alignments.LEFT
};

Label.propTypes = {
  children: PropTypes.node,
  moreInfoAlign: PropTypes.oneOf(values(alignments)),
  moreInfoContent: PropTypes.node,
  focused: PropTypes.bool,
  disabled: PropTypes.bool,
  protected: PropTypes.bool,
  invalid: PropTypes.bool
};

export default Label;
