import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import selectorSizes from "../constants/selectorSizes";
import AmountSelectors from "./AmountSelectors";

storiesOf("Amount selectors", module)
  .add("Default", withInfo()(() => <AmountSelectors />))
  .add("With value set", withInfo()(() => <AmountSelectors value={2} />))
  .add(
    "With value set after mount",
    withInfo()(() => {
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
  )
  .add(
    "With 0.5 steps",
    withInfo()(() => <AmountSelectors value={2} step={0.5} />)
  )
  .add(
    "With 0.5 steps and step mismatch validation (browser)",
    withInfo()(() => <AmountSelectors value={2} step={0.5} enforceStep />)
  )
  .add(
    "With a max value of 3",
    withInfo()(() => <AmountSelectors max={3} value={2} step={0.5} />)
  )
  .add(
    "With onChange function",
    withInfo()(() => <AmountSelectors onChange={action("amount changed")} />)
  )
  .add("Disabled typing", withInfo()(() => <AmountSelectors disableTyping />))
  .add(
    "Small size",
    withInfo()(() => <AmountSelectors size={selectorSizes.SMALL} />)
  );
