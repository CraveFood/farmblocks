import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

import Stepper from "./Stepper";

const steps = [
  "Complete profile",
  "Add bank account",
  "Connect to purchasers",
  "Add products",
  "Start selling",
];
const completedSteps = 2;
storiesOf("Stepper", module)
  .add("default", () => (
    <div
      style={{
        width: "500px",
        padding: "10px 20px",
      }}
    >
      <Stepper
        steps={steps}
        completedSteps={completedSteps}
        onClick={action("clicked")}
      />
    </div>
  ))
  .add("extended style", () => (
    <div
      style={{
        width: "500px",
        padding: "10px 20px",
      }}
    >
      <Stepper
        css="
          .step {
            border: dashed 2px blueviolet;
            &.completed .description {
              text-decoration: line-through;
            }
            &.current {
              transform: scale(1.1);
            }
          }
        "
        steps={steps}
        completedSteps={completedSteps}
        onClick={action("clicked")}
      />
    </div>
  ));
