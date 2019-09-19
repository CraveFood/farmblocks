import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import selectorSizes from "../constants/selectorSizes";
import AmountSelectors from "./AmountSelectors";

storiesOf("Amount selectors", module)
  .add("Default", () => <AmountSelectors />)
  .add("With value set", () => <AmountSelectors value={2} />)
  .add("With value set after mount", () => {
    class MyStory extends React.Component {
      state = { value: 10 };

      render() {
        return (
          <div>
            <AmountSelectors value={this.state.value} />
            <button onClick={() => this.setState({ value: Math.random() })}>
              Set Value
            </button>
          </div>
        );
      }
    }
    return <MyStory />;
  })
  .add("Disabled", () => <AmountSelectors disabled />)
  .add("With 0.5 steps", () => <AmountSelectors value={2} step={0.5} />)
  .add("With 0.5 steps and step mismatch validation (browser)", () => (
    <AmountSelectors value={2} step={0.5} enforceStep />
  ))
  .add("With a max value of 3 and min of 1", () => (
    <AmountSelectors
      max={3}
      min={1}
      value={2}
      step={0.5}
      showBoundariesMessageOnlyOnFocus
    />
  ))
  .add("With a max value of 3 and initial value = 5", () => (
    <AmountSelectors max={3} value={5} />
  ))
  .add("With a min value of 3 and initial value = 1", () => (
    <AmountSelectors min={3} value={1} />
  ))
  .add("With onChange function", () => (
    <AmountSelectors onChange={action("amount changed")} />
  ))
  .add("Disabled typing", () => <AmountSelectors disableTyping />)
  .add("Small size", () => <AmountSelectors size={selectorSizes.SMALL} />)
  .add("extended style", () => (
    <AmountSelectors
      css="
        opacity: 0.8;
        .input {
          border-color: violet;
        }
        .increaseButton {
          transform: scale(1.2);
        }
      "
    />
  ));
