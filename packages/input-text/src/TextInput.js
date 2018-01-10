import * as React from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import disabledTooltip, {
  newPropTypes as disabledTooltipPropTypes
} from "@crave/farmblocks-hoc-disabled-tooltip";
import formInput, {
  newPropTypes as inputPropTypes
} from "@crave/farmblocks-hoc-input";

import Container from "./styledComponents/TextInput";
const EnhancedInput = compose(disabledTooltip, formInput)("input");

const TextInput = props => (
  <Container>
    <EnhancedInput {...props} displayBlock />
  </Container>
);

TextInput.propTypes = {
  ...disabledTooltipPropTypes,
  ...inputPropTypes,

  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool
  // and any other properties to forward to the html input element...
};

TextInput.defaultProps = {
  type: "text",
  tooltipText: "This field is disabled."
};

export default TextInput;
