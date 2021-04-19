import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";

const labelColor = (props) => {
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

const Label = styled.label`
  font-family: Lato, sans-serif;

  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: ${labelColor};
`;

Label.propTypes = {
  focused: PropTypes.bool,
  disabled: PropTypes.bool,
  protected: PropTypes.bool,
  invalid: PropTypes.bool,
};

export default Label;
