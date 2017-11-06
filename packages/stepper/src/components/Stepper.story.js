import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import statusTypes from "../constants/statusTypes";

import Stepper from "./Stepper";

storiesOf("Stepper", module).add(
  "default",
  withInfo()(() => {
    const steps = [
      {
        id: "1",
        description: "Complete profile",
        status: statusTypes.COMPLETED
      },
      {
        id: "2",
        description: "Add products",
        status: statusTypes.CURRENT
      },
      {
        id: "3",
        description: "Start selling",
        status: statusTypes.PENDING
      }
    ];

    return (
      <div
        style={{
          width: "500px",
          padding: "10px 20px"
        }}
      >
        <Stepper steps={steps} onClick={action("clicked")} />
      </div>
    );
  })
);
