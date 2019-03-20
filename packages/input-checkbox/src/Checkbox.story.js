import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Checkbox as CheckboxComponent, Switch } from ".";

const checkboxStories = (moduleTitle, Checkbox) =>
  storiesOf(moduleTitle, module)
    .add("Default", () => <Checkbox />)
    .add("checked", () => <Checkbox checked />)
    .add("with state control", () => {
      const WithState = () => {
        const [checked, setChecked] = useState(false);

        return (
          <Checkbox
            checked={checked}
            onChange={e => {
              setChecked(e.target.checked);
              action("onChange")(e);
            }}
          />
        );
      };

      return <WithState />;
    })
    .add("with text label", () => <Checkbox label="Checkbox Label" />)

    .add("with onChange event", () => (
      <Checkbox label="Checkbox Label" onChange={action("onChange")} />
    ))
    .add("disabled", () => <Checkbox disabled checked label="Checkbox Label" />)
    .add("in a fieldset", () => (
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
          <div>
            Another field
            <input type="text" />
          </div>
        </div>
      </fieldset>
    ));

checkboxStories("Checkbox/Checkbox Input", CheckboxComponent);
checkboxStories("Checkbox/Switch Input", Switch);
