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
        <RemovableTags onRemove={action("tag removed")} text="THIS IS A TAG" />
      </div>
    ))
  )
  .add(
    "Not removable",
    withInfo()(() => (
      <div style={{ marginTop: "20px" }}>
        <RemovableTags text="You can't remove this tag" removable={false} />
      </div>
    ))
  )
  .add(
    "Multiple tags",
    withInfo()(() => (
      <div style={{ marginTop: "20px" }}>
        <RemovableTags onRemove={action("tag removed")} text="Aug 16, 2018 " />
        <RemovableTags
          onRemove={action("tag removed")}
          text="This is a long removable tag"
        />
        <RemovableTags
          onRemove={action("tag removed")}
          text="And that's an even bigger and wider removable tag"
        />
      </div>
    ))
  );
