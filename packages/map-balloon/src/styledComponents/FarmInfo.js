import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import Text, { fontTypes } from "@crave/farmblocks-text";

import Icon from "./Icon";
import VerticalCenter from "./VerticalCenter";

const FarmInfo = ({ name, theme }) => (
  <VerticalCenter>
    <Icon>
      <Text type={fontTypes.NEUTRAL} size={theme.iconSize}>
        <i className="wg-purveyor" />
      </Text>
    </Icon>
    <Text title type={fontTypes.NEUTRAL} size={theme.iconSize}>
      {name}
    </Text>
  </VerticalCenter>
);
FarmInfo.propTypes = {
  name: PropTypes.string,
  theme: PropTypes.shape({
    iconSize: PropTypes.number.isRequired
  }).isRequired
};

export default withTheme(FarmInfo);
