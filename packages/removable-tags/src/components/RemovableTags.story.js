import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import RemovableTags from "./RemovableTags";

storiesOf("Removable-tags", "module")
  .add(
    "Default",
    withInfo()(() => (
      <div style={{ marginTop: "20px" }}>
        <RemovableTags onClose={action("tag clicked")} text="THIS IS A TAG" />
      </div>
    ))
  )
  .add(
    "Multiple tags",
    withInfo()(() => (
      <div style={{ marginTop: "20px" }}>
        <RemovableTags onClose={action("tag clicked")} text="Aug 16, 2018 " />
        <RemovableTags
          onClose={action("tag clicked")}
          text="This is a long removable tag"
        />
        <RemovableTags
          onClose={action("tag clicked")}
          text="And that's an even bigger and wider removable tag"
        />
      </div>
    ))
  );
