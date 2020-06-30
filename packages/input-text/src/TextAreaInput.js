import * as React from "react";
import { compose } from "recompose";
import formInput from "@crave/farmblocks-hoc-input";

import { withMargin, commonPropTypes } from "./TextInput";

const EnhancedInput = compose(withMargin, formInput);

const TextArea = EnhancedInput("textarea");

export const TextAreaInput = props => {
  return <TextArea {...props} />;
};

TextAreaInput.propTypes = { ...commonPropTypes };

TextAreaInput.defaultProps = {
  margin: "0 0 24px 0",
};

export default TextAreaInput;
