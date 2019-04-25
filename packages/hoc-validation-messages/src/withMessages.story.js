import React from "react";
import { storiesOf } from "@storybook/react";

import withMessages from ".";

const WithMessagesInput = withMessages(props =>
  React.createElement("input", props),
);

const WithMessagesDiv = withMessages(props => <div {...props}>I am a div</div>);

storiesOf("HOC withMessages", module)
  .add("Input", () => (
    <WithMessagesInput validationMessages={["Invalid card number"]} />
  ))
  .add("Div", () => <WithMessagesDiv validationMessages={["Not cool, man"]} />)
  .add("Input with native browser validation", () => (
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
  .add("extended style", () => (
    <WithMessagesDiv
      css="
        .wrapped {
          background: oldlace;
        }
        .messagesContainer {
          background: honeydew;
          padding: 16px;
          .messageWrapper {
            border: solid 1px cornflowerblue;
            .icon {
              transform: scale(2)
            }
            .text {
              text-decoration: line-through;
            }
          }
        }
      "
      validationMessages={["Not cool, man"]}
    />
  ));
