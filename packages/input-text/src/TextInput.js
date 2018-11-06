import * as React from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import styled from "styled-components";
import ReactInputMask from "react-input-mask";
import formInput, { formInputProps } from "@crave/farmblocks-hoc-input";
import withMessages, {
  withMessagesProps
} from "@crave/farmblocks-hoc-validation-messages";

import protectedValue, { protectedValueProps } from "./protectedValue";
export const EnhancedInput = compose(withMessages, protectedValue, formInput);

const RegularInput = EnhancedInput("input");
const MaskedInput = EnhancedInput(ReactInputMask);

export const commonPropTypes = {
  ...formInputProps,
  ...withMessagesProps,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,

  margin: PropTypes.string
  // and any other properties to forward to the html input element...
};

export const Container = styled.div`
  font-family: Lato, sans-serif;
  margin: ${({ margin }) => margin};
`;

const TextInput = ({ margin, ...props }) => {
  const Input = props.mask ? MaskedInput : RegularInput;

  return (
    <Container margin={margin}>
      <Input {...props} />
    </Container>
  );
};

TextInput.propTypes = {
  mask: PropTypes.string,
  ...protectedValueProps,
  ...commonPropTypes
};

TextInput.defaultProps = {
  type: "text",
  margin: "0 0 24px 0"
};

export default TextInput;
