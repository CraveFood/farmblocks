import React from "react";
import PropTypes from "prop-types";
import Text from "@crave/farmblocks-text";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

import Label from "./styledComponents/Label";

const Radio = ({ label, ...inputProps }) => {
  const fontColor =
    (inputProps.disabled && fontTypes.SUBTLE) || fontTypes.NORMAL;
  const labelProps = {
    checked: inputProps.checked,
    disabled: inputProps.disabled
  };
  return (
    <Label {...labelProps}>
      <input className="hiddenInput" type="radio" {...inputProps} />
      <div className="visibleInput">
        <div className="checked" />
      </div>
      {label && (
        <Text title type={fontColor} size={fontSizes.MEDIUM}>
          {label}
        </Text>
      )}
    </Label>
  );
};
Radio.propTypes = {
  label: PropTypes.string
};

export default Radio;
