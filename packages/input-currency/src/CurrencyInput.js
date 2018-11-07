import { compose, renameProp } from "recompose";
import CurrencyInput from "react-currency-input";
import TextInput, {
  EnhancedInput,
  withMargin
} from "@crave/farmblocks-input-text";

const EnhancedCurrencyInput = compose(
  withMargin,
  EnhancedInput,
  renameProp("onChange", "onChangeEvent")
)(CurrencyInput);

EnhancedCurrencyInput.propTypes = {
  ...CurrencyInput.propTypes,
  ...TextInput.propTypes
};

EnhancedCurrencyInput.defaultProps = {
  ...CurrencyInput.defaultProps,
  ...TextInput.defaultProps
};

export default EnhancedCurrencyInput;
