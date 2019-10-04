import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { fontSizes } from "@crave/farmblocks-theme";
import { POSITIONS } from "@crave/farmblocks-tooltip";

import formInput from ".";

const EnhancedInput = formInput(props => React.createElement("input", props));
const TextArea = formInput("textarea");

storiesOf("HOC formInput", module)
  .add("html text input", () => <EnhancedInput type="text" />)
  .add("html text input with label", () => (
    <EnhancedInput
      onChange={action("change event")}
      label="Input Label"
      type="text"
    />
  ))
  .add("html text input with input.onChange and input.value ", () => (
    <EnhancedInput
      input={{
        onChange: action("input.onChange"),
        value: "input.value",
      }}
      label="Input Label"
      type="text"
    />
  ))
  .add("two html inputs with label", () => (
    <div>
      <EnhancedInput label="Input Label" type="text" />
      <EnhancedInput label="Input Label" type="checkbox" />
    </div>
  ))
  .add("html text input with label and placeholder", () => (
    <EnhancedInput
      placeholder="a placeholder"
      label="Input Label"
      type="text"
    />
  ))
  .add("html text input with label and active flag", () => (
    <EnhancedInput active label="Input Label" type="text" />
  ))
  .add("html text input with label and focused flag", () => (
    <EnhancedInput focused label="Input Label" type="text" />
  ))
  .add("invalid input", () => (
    <EnhancedInput label="Input Label" type="text" invalid />
  ))
  .add("html disabled input with label", () => (
    <div>
      <EnhancedInput
        disabled
        label="Input Label"
        type="text"
        value="Disabled field"
      />
    </div>
  ))
  .add("input with fontSize property SMALL", () => (
    <EnhancedInput fontSize={fontSizes.SMALL} />
  ))
  .add("html search input", () => <EnhancedInput type="search" />)
  .add("html search input with value", () => (
    <EnhancedInput type="search" value="broccoli" />
  ))
  .add("small html search input with value", () => (
    <EnhancedInput type="search" fontSize={fontSizes.SMALL} value="broccoli" />
  ))
  .add("html search input with custom clear icon", () => (
    <EnhancedInput type="search" value="broccoli" clearIcon="wg-close" />
  ))
  .add("html input with clear button", () => <EnhancedInput clearable />)
  .add("html text input with combobox role", () => (
    <div style={{ width: "300px" }}>
      <EnhancedInput role="combobox" placeholder="Select value" />
    </div>
  ))
  .add("disabled html text input with combobox role", () => (
    <div style={{ width: "300px" }}>
      <EnhancedInput role="combobox" disabled placeholder="Select value" />
    </div>
  ))
  .add("html text input with combobox readonly role", () => (
    <div style={{ width: "300px" }}>
      <EnhancedInput role="combobox" placeholder="Select value" readOnly />
    </div>
  ))
  .add("html input with leftIcon", () => (
    <EnhancedInput leftIcon="wg-order" value="foo bar" />
  ))
  .add("small html input with leftIcon", () => (
    <EnhancedInput
      leftIcon="wg-order"
      fontSize={fontSizes.SMALL}
      value="foo bar"
    />
  ))
  .add("with label and more info", () => (
    <EnhancedInput
      onChange={action("change event")}
      label="this is a regular label"
      moreInfoContent="this is a more info text"
      moreInfoTooltipProps={{ positionX: POSITIONS.X.CENTER }}
      type="text"
    />
  ))
  .add("with prefix", () => (
    <div>
      <EnhancedInput type="text" prefix="$" label="Default" />
      <EnhancedInput type="text" prefix="$" label="Active" active />
      <EnhancedInput type="text" prefix="$" label="Focused on Mount" focused />
      <EnhancedInput type="text" prefix="$" label="Disabled" disabled />
      <EnhancedInput type="text" prefix="$" label="Invalid" invalid />
      <EnhancedInput type="search" prefix="$" label="Search" />
      <EnhancedInput
        type="text"
        prefix="$"
        label="Small"
        fontSize={fontSizes.SMALL}
      />
    </div>
  ))
  .add("with suffix", () => (
    <div>
      <EnhancedInput type="text" suffix="CS" label="Default" />
      <EnhancedInput type="text" suffix="CS" label="Active" active />
      <EnhancedInput type="text" suffix="CS" label="Focused on Mount" focused />
      <EnhancedInput type="text" suffix="CS" label="Disabled" disabled />
      <EnhancedInput type="text" suffix="CS" label="Invalid" invalid />
      <EnhancedInput type="search" suffix="CS" label="Search" />
      <EnhancedInput
        type="text"
        suffix="CS"
        label="Small"
        fontSize={fontSizes.SMALL}
      />
    </div>
  ))
  .add("with prefix and suffix", () => (
    <div>
      <EnhancedInput type="text" prefix="$" suffix="CS" label="Default" />
      <EnhancedInput type="text" prefix="$" suffix="CS" label="Active" active />
      <EnhancedInput
        type="text"
        prefix="$"
        suffix="CS"
        label="Focused on Mount"
        focused
      />
      <EnhancedInput
        type="text"
        prefix="$"
        suffix="CS"
        label="Disabled"
        disabled
      />
      <EnhancedInput
        type="text"
        prefix="$"
        suffix="CS"
        label="Invalid"
        invalid
      />
      <EnhancedInput type="search" prefix="$" suffix="CS" label="Search" />
      <EnhancedInput
        type="text"
        prefix="$"
        suffix="CS"
        label="Small"
        fontSize={fontSizes.SMALL}
      />
    </div>
  ))
  .add("small container", () => (
    <div style={{ width: 150 }}>
      <EnhancedInput type="text" label="Default" />
      <EnhancedInput type="text" prefix="$" label="Prefix" />
      <EnhancedInput type="text" suffix="CS" label="Suffix" />
      <EnhancedInput type="text" prefix="$" suffix="CS" label="Both" />
    </div>
  ))
  .add("autoControlFocusedStyle = false", () => (
    <div>
      <EnhancedInput
        onFocus={action("onFocus - always focused")}
        onBlur={action("onBlur - always focused")}
        label="Always focused"
        type="text"
        focused
        autoControlFocusedStyle={false}
      />

      <EnhancedInput
        onFocus={action("onFocus - never focused")}
        onBlur={action("onBlur - never focused")}
        label="Never focused"
        type="text"
        autoControlFocusedStyle={false}
      />
    </div>
  ))
  .add("html textarea", () => <TextArea rows="4" />)
  .add("extended style", () => (
    <EnhancedInput
      css="
        background: ivory;
        padding: 10px;
        .label {
          background: mistyrose;
          .labelText {
            font-family: fantasy;
          }
        }
        .wrapped {
          text-align: right;
        }
      "
      type="text"
      value="aligned right"
      label="Input Label"
    />
  ));
