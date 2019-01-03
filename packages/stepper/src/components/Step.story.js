import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

import Step from "./Step";
import statusTypes from "../constants/statusTypes";

const style = { margin: "20px 0" };
storiesOf("Step (private)", module)
  .add("pending", () => (
    <Step
      status={statusTypes.PENDING}
      onClick={action("clicked")}
      style={style}
    >
      Pending step
    </Step>
  ))
  .add("current", () => (
    <Step
      status={statusTypes.CURRENT}
      onClick={action("clicked")}
      style={style}
    >
      Current step
    </Step>
  ))
  .add("completed", () => (
    <Step
      index={0}
      status={statusTypes.COMPLETED}
      onClick={action("clicked")}
      style={style}
    >
      Completed step
    </Step>
  ));
