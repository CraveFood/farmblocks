import * as React from "react";
import { compose } from "recompose";
import formInput from "@crave/farmblocks-hoc-input";
import withMessages from "@crave/farmblocks-hoc-validation-messages";

import { Container, commonPropTypes } from "./TextInput";

const EnhancedInput = compose(withMessages, formInput);

const TextArea = EnhancedInput("textarea");

export const TextAreaInput = ({ margin, ...props }) => {
  return (
    <Container margin={margin}>
      <TextArea {...props} />
    </Container>
  );
};

TextAreaInput.propTypes = { ...commonPropTypes };

TextAreaInput.defaultProps = {
  margin: "0 0 24px 0"
};

export default TextAreaInput;
