import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import Text, { fontTypes } from "@crave/farmblocks-text";

import Icon from "./Icon";
import VerticalCenter from "./VerticalCenter";

const Caption = ({ text, theme, iconClass }) => (
  <VerticalCenter>
    <Icon>
      <Text type={fontTypes.NEUTRAL} size={theme.captionSize}>
        <i className={iconClass} />
      </Text>
    </Icon>
    <Text title type={fontTypes.NEUTRAL} size={theme.captionSize}>
      {text}
    </Text>
  </VerticalCenter>
);
Caption.propTypes = {
  text: PropTypes.string,
  iconClass: PropTypes.string,
  theme: PropTypes.shape({
    captionSize: PropTypes.number.isRequired
  }).isRequired
};
Caption.defaultProps = {
  iconClass: "wg-purveyor"
};

export default withTheme(Caption);
