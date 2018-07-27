import * as React from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import ReactInputMask from "react-input-mask";
import disabledTooltip, {
  disabledTooltipProps
} from "@crave/farmblocks-hoc-disabled-tooltip";
import formInput, { formInputProps } from "@crave/farmblocks-hoc-input";
import withMessages, {
  withMessagesProps
} from "@crave/farmblocks-hoc-validation-messages";

import Container from "./styledComponents/TextInput";
import protectedValue, { protectedValueProps } from "./protectedValue";
const EnhancedInput = compose(
  disabledTooltip,
  withMessages,
  protectedValue,
  formInput
);

const RegularInput = EnhancedInput("input");
const MaskedInput = EnhancedInput(ReactInputMask);

const TextInput = props => {
  const Input = props.mask ? MaskedInput : RegularInput;

  return (
    <Container>
      <Input {...props} displayBlock />
    </Container>
  );
};

TextInput.propTypes = {
  ...disabledTooltipProps,
  ...formInputProps,
  ...protectedValueProps,
  ...withMessagesProps,

  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  mask: PropTypes.string
  // and any other properties to forward to the html input element...
};

TextInput.defaultProps = {
  type: "text",
  tooltipText: "This field is disabled."
};

export default TextInput;
