import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Select from ".";

storiesOf("Select", "module").add(
  "Default",
  withInfo()(() => (
    <div style={{ width: "200px" }}>
      <Select
        placeholder="Select fruit"
        label="Fruit"
        items={[
          { id: "1", label: "apple" },
          { id: "2", label: "banana" },
          { id: "3", label: "pear" }
        ]}
      />
    </div>
  ))
);
