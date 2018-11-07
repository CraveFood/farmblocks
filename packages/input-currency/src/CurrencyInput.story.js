import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import CurrencyInput from ".";

storiesOf("Currency Input", module)
  .add("Default", withInfo()(() => <CurrencyInput />))
  .add("With Prefix", withInfo()(() => <CurrencyInput prefix="$" />))
  .add("With Suffix", withInfo()(() => <CurrencyInput suffix="KG" />))
  .add(
    "With Prefix and Suffix",
    withInfo()(() => <CurrencyInput prefix="$" suffix="KG" />)
  )
  .add(
    "With custom separators",
    withInfo()(() => (
      <CurrencyInput decimalSeparator="," thousandSeparator="." />
    ))
  )
  .add(
    "With custom decimal precision",
    withInfo()(() => <CurrencyInput precision={4} />)
  )
  .add("Allow negative", withInfo()(() => <CurrencyInput allowNegative />))
  .add("Disabled", withInfo()(() => <CurrencyInput disabled />))
  .add(
    "With Validation Messages",
    withInfo()(() => (
      <CurrencyInput validationMessages={["You need to fill this field."]} />
    ))
  )
  .add(
    "Custom margin of 50px",
    withInfo()(() => <CurrencyInput margin="50px" />)
  );
