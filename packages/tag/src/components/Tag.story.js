import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import Tag from "./Tag";

storiesOf("Removable-tags", "module")
  .add(
    "Default",
    withInfo()(() => (
      <div style={{ marginTop: "20px" }}>
        <Tag onRemove={action("onRemove")} text="THIS IS A TAG" />
      </div>
    ))
  )
  .add(
    "Not removable",
    withInfo()(() => (
      <div style={{ marginTop: "20px" }}>
        <Tag text="You can't remove this tag" />
      </div>
    ))
  )
  .add(
    "Multiple tags",
    withInfo()(() => (
      <div style={{ marginTop: "20px" }}>
        <Tag onRemove={action("onRemove")} text="Aug 16, 2018 " />
        <Tag
          onRemove={action("onRemove")}
          text="This is a long removable tag"
        />
        <Tag
          onRemove={action("onRemove")}
          text="And that's an even bigger and wider removable tag"
        />
      </div>
    ))
  );
