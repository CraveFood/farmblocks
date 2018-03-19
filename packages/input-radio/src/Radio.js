import React from "react";
import PropTypes from "prop-types";
import Text from "@crave/farmblocks-text";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

const Radio = ({ label, ...inputProps }) => {
  const fontColor =
    (inputProps.disabled && fontTypes.SUBTLE) || fontTypes.NORMAL;
  return (
    <label>
      <input className="hidden-input" type="radio" {...inputProps} />
      <Text type={fontColor} size={fontSizes.MEDIUM}>
        {label}
      </Text>
    </label>
  );
};
Radio.propTypes = {
  label: PropTypes.string
};

export default Radio;
