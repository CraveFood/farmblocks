import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

import Stepper from "./Stepper";

storiesOf("Stepper", module).add("default", () => {
  const steps = [
    "Complete profile",
    "Add bank account",
    "Connect to purchasers",
    "Add products",
    "Start selling"
  ];
  const completedSteps = 2;

  return (
    <div
      style={{
        width: "500px",
        padding: "10px 20px"
      }}
    >
      <Stepper
        steps={steps}
        completedSteps={completedSteps}
        onClick={action("clicked")}
      />
    </div>
  );
});
