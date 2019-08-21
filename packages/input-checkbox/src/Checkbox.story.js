import React, { useState } from "react";
import styled from "styled-components";
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
        <Checkbox disabled label="Disabled Checkbox" name="foo" />{" "}
        <Checkbox
          checked
          disabled
          label="Checked Disabled Checkbox"
          name="foo"
        />
        <Checkbox label="Checkbox Label 3" name="foo" />
        <Checkbox label="Checkbox Label 4" checked name="foo" />
        <Checkbox label="Checkbox" loading />
        <div style={{ marginTop: 24 }}>
          <div>
            Another field
            <input type="text" />
          </div>
        </div>
      </fieldset>
    ))
    .add("extended style", () => {
      // we can't use the styled-components' css prop here
      // because it's converted at build time by the babel plugin
      // while this `checkboxStories` generates the stories on the
      // go for each given component
      const StyledCheckbox = styled(Checkbox)`
        .visibleCheckbox {
          background: indigo;
        }
        .label {
          font-family: monospace;
        }
      `;
      return <StyledCheckbox label="Checkbox Label" />;
    })
    .add("with loading state control", () => {
      const WithState = () => {
        const [checked, setChecked] = useState(false);
        const [loading, setLoading] = useState(false);

        return (
          <Checkbox
            checked={checked}
            loading={loading}
            onChange={e => {
              setLoading(true);
              setChecked(e.target.checked);
              setTimeout(() => {
                setLoading(false);
              }, 1000);
              action("onChange")(e);
            }}
            label="Checkbox Label"
          />
        );
      };

      return <WithState />;
    });

checkboxStories("Checkbox/Checkbox Input", CheckboxComponent);
checkboxStories("Checkbox/Switch Input", Switch);
