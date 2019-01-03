import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import CurrencyInput from ".";

storiesOf("Currency Input", module)
  .add("Default", () => <CurrencyInput onChange={action("onChange")} />)
  .add("With value", () => (
    <CurrencyInput value={987654321} onChange={action("onChange")} />
  ))
  .add("With Prefix", () => (
    <CurrencyInput prefix="$" onChange={action("onChange")} />
  ))
  .add("With Suffix", () => (
    <CurrencyInput suffix="KG" onChange={action("onChange")} />
  ))
  .add("With Prefix and Suffix", () => (
    <CurrencyInput prefix="$" suffix="KG" onChange={action("onChange")} />
  ))
  .add("With custom separators", () => (
    <CurrencyInput
      decimalSeparator=","
      thousandSeparator="."
      onChange={action("onChange")}
    />
  ))
  .add("With custom decimal precision", () => (
    <CurrencyInput decimalScale={4} onChange={action("onChange")} />
  ))
  .add("Allow negative", () => (
    <CurrencyInput allowNegative onChange={action("onChange")} />
  ))
  .add("Disabled", () => <CurrencyInput disabled />)
  .add("With Validation Messages", () => (
    <CurrencyInput
      validationMessages={["You need to fill this field."]}
      onChange={action("onChange")}
    />
  ))
  .add("Custom margin of 50px", () => (
    <CurrencyInput margin="50px" onChange={action("onChange")} />
  ));
