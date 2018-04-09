import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import { Checkbox as CheckboxComponent, Switch } from ".";

const checkboxStories = (moduleTitle, Checkbox) =>
  storiesOf(moduleTitle, "module")
    .add("Default", withInfo()(() => <Checkbox />))
    .add("checked", withInfo()(() => <Checkbox checked />))
    .add(
      "with text label",
      withInfo()(() => <Checkbox label="Checkbox Label" />)
    )
    .add(
      "with onChange event",
      withInfo()(() => (
        <Checkbox label="Checkbox Label" onChange={action("onChange")} />
      ))
    )
    .add(
      "disabled",
      withInfo()(() => (
        <Checkbox
          disabled
          tooltipText="custom disabled text"
          checked
          label="Checkbox Label"
        />
      ))
    )
    .add(
      "disabled with no tooltip",
      withInfo()(() => (
        <Checkbox disabled noTooltip checked label="Checkbox Label" />
      ))
    )
    .add(
      "in a fieldset",
      withInfo()(() => (
        <fieldset>
          <Checkbox label="Checkbox Label 1" name="foo" />
          <Checkbox disabled label="Disabled Checkbox" name="foo" />
          <Checkbox
            checked
            disabled
            label="Checked Disabled Checkbox"
            name="foo"
          />
          <Checkbox label="Checkbox Label 3" name="foo" />
          <div style={{ marginTop: 24 }}>
            <label>
              Another field
              <input type="text" />
            </label>
          </div>
        </fieldset>
      ))
    );

checkboxStories("Checkbox/Checkbox Input", CheckboxComponent);
checkboxStories("Checkbox/Switch Input", Switch);
