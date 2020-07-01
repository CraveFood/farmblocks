import { compose } from "recompose";
import ReactNumberFormat from "react-number-format";
import TextInput, { EnhancedInput } from "@crave/farmblocks-input-text";

const EnhancedCurrencyInput = compose(EnhancedInput)(ReactNumberFormat);

EnhancedCurrencyInput.propTypes = {
  ...ReactNumberFormat.propTypes,
  ...TextInput.propTypes,
};

EnhancedCurrencyInput.defaultProps = {
  ...ReactNumberFormat.defaultProps,
  ...TextInput.defaultProps,
  thousandSeparator: ",",
  decimalSeparator: ".",
  decimalScale: 2,
  fixedDecimalScale: true,
  allowNegative: false,
};

export default EnhancedCurrencyInput;
