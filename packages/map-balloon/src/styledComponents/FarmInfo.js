import React from "react";
import PropTypes from "prop-types";
import Text, { fontSizes, fontTypes } from "@crave/farmblocks-text";

import Icon from "./Icon";
import VerticalCenter from "./VerticalCenter";

const FarmInfo = ({ name }) => (
  <VerticalCenter>
    <Icon>
      <Text type={fontTypes.NEUTRAL} size={fontSizes.HUGE}>
        <i className="wg-purveyor" />
      </Text>
    </Icon>
    <Text title type={fontTypes.NEUTRAL} size={fontSizes.HUGE}>
      {name}
    </Text>
  </VerticalCenter>
);
FarmInfo.propTypes = {
  name: PropTypes.string
};

export default FarmInfo;
