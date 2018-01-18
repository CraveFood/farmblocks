import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import formInput from ".";

const EnhancedInput = formInput(props => React.createElement("input", props));

storiesOf("HOC formInput", "module")
  .add("html text input", withInfo()(() => <EnhancedInput type="text" />))
  .add(
    "html text input with label",
    withInfo()(() => (
      <EnhancedInput
        onChange={action("change event")}
        label="Input Label"
        type="text"
      />
    ))
  )
  .add(
    "two html inputs with label",
    withInfo()(() => (
      <div>
        <EnhancedInput label="Input Label" type="text" />
        <EnhancedInput label="Input Label" type="checkbox" />
      </div>
    ))
  )
  .add(
    "html text input with label and placeholder",
    withInfo()(() => (
      <EnhancedInput
        placeholder="a placeholder"
        label="Input Label"
        type="text"
      />
    ))
  )
  .add(
    "html text input with label and focused flag",
    withInfo()(() => <EnhancedInput focused label="Input Label" type="text" />)
  )
  .add(
    "input with custom error messages",
    withInfo()(() => (
      <EnhancedInput
        validationMessages={["Invalid card number", "another error"]}
        label="Input Label"
        type="text"
      />
    ))
  )
  .add(
    "input with native browser validation",
    withInfo()(() => (
      <form onSubmit={e => e.preventDefault()}>
        <EnhancedInput
          label="Email"
          type="email"
          placeholder="enter a valid email"
        />
        <EnhancedInput label="Required field" type="text" required />
        <input type="submit" />
      </form>
    ))
  )
  .add(
    "html disabled input with label",
    withInfo()(() => (
      <div>
        <EnhancedInput disabled label="Input Label" type="text" />
      </div>
    ))
  )
  .add(
    "html text input with icon",
    withInfo()(() => <EnhancedInput icon={"wg-meat"} type="text" />)
  )
  .add(
    "html compact text input",
    withInfo()(() => <EnhancedInput compact type="text" />)
  )
  .add("html search input", withInfo()(() => <EnhancedInput type="search" />))
  .add(
    "html search input with value",
    withInfo()(() => <EnhancedInput type="search" value="broccoli" />)
  );
