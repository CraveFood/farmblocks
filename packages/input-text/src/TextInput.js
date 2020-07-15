import { compose } from "recompose";
import formInput, { formInputProps } from "@crave/farmblocks-hoc-input";

import protectedValue, { protectedValueProps } from "./protectedValue";

export const EnhancedInput = compose(protectedValue, formInput);

const TextInput = EnhancedInput("input");

TextInput.propTypes = {
  ...formInputProps,
  ...protectedValueProps,
};

export default TextInput;
