import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import CurrencyInput from ".";

storiesOf("Currency Input", module)
  .add(
    "Default",
    withInfo()(() => <CurrencyInput onChange={action("onChange")} />)
  )
  .add(
    "With value",
    withInfo()(() => (
      <CurrencyInput value={987654321} onChange={action("onChange")} />
    ))
  )
  .add(
    "With Prefix",
    withInfo()(() => <CurrencyInput prefix="$" onChange={action("onChange")} />)
  )
  .add(
    "With Suffix",
    withInfo()(() => (
      <CurrencyInput suffix="KG" onChange={action("onChange")} />
    ))
  )
  .add(
    "With Prefix and Suffix",
    withInfo()(() => (
      <CurrencyInput prefix="$" suffix="KG" onChange={action("onChange")} />
    ))
  )
  .add(
    "With custom separators",
    withInfo()(() => (
      <CurrencyInput
        decimalSeparator=","
        thousandSeparator="."
        onChange={action("onChange")}
      />
    ))
  )
  .add(
    "With custom decimal precision",
    withInfo()(() => (
      <CurrencyInput decimalScale={4} onChange={action("onChange")} />
    ))
  )
  .add(
    "Allow negative",
    withInfo()(() => (
      <CurrencyInput allowNegative onChange={action("onChange")} />
    ))
  )
  .add("Disabled", withInfo()(() => <CurrencyInput disabled />))
  .add(
    "With Validation Messages",
    withInfo()(() => (
      <CurrencyInput
        validationMessages={["You need to fill this field."]}
        onChange={action("onChange")}
      />
    ))
  )
  .add(
    "Custom margin of 50px",
    withInfo()(() => (
      <CurrencyInput margin="50px" onChange={action("onChange")} />
    ))
  );
