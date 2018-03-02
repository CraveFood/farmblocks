import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import withMessages from ".";

const WithMessagesInput = withMessages(props =>
  React.createElement("input", props)
);

const WithMessagesDiv = withMessages(() => <div>I am a div</div>);

storiesOf("HOC withMessages", "module")
  .add(
    "Input",
    withInfo()(() => (
      <WithMessagesInput validationMessages={["Invalid card number"]} />
    ))
  )
  .add(
    "Div",
    withInfo()(() => <WithMessagesDiv validationMessages={["Not cool, man"]} />)
  )
  .add(
    "Input with native browser validation",
    withInfo()(() => (
      <form onSubmit={e => e.preventDefault()}>
        <WithMessagesInput
          type="email"
          placeholder="enter a valid email"
          defaultValue="invalid@mail,com"
        />

        <WithMessagesInput
          label="Required field"
          type="text"
          placeholder="Required field"
          required
        />

        <input type="submit" />
      </form>
    ))
  );
