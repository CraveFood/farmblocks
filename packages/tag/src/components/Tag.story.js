import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import Tag, { tagTypes } from "..";

storiesOf("Tag", module)
  .add(
    "Default",
    withInfo()(() => (
      <div style={{ marginTop: "20px" }}>
        <Tag text="THIS IS A TAG" />
      </div>
    ))
  )
  .add(
    "With icon",
    withInfo()(() => (
      <div style={{ marginTop: "20px" }}>
        <Tag text="Tag with icon" icon="wg-order" />
      </div>
    ))
  )
  .add(
    "Removable with icon",
    withInfo()(() => (
      <div style={{ marginTop: "20px" }}>
        <Tag
          text="Tag with icon"
          icon="wg-order"
          onRemove={action("onRemove")}
        />
      </div>
    ))
  )
  .add(
    "Removable",
    withInfo()(() => (
      <div style={{ marginTop: "20px" }}>
        <Tag text="You can remove this tag" onRemove={action("onRemove")} />
      </div>
    ))
  )
  .add(
    "Removable with value",
    withInfo()(() => (
      <div style={{ marginTop: "20px" }}>
        <Tag onRemove={action("onRemove")} text="Removable Tag #1" value="1" />
      </div>
    ))
  )
  .add(
    "Neutral",
    withInfo()(() => (
      <div style={{ marginTop: "20px" }}>
        <Tag type={tagTypes.NEUTRAL} text="THIS IS A TAG" />
      </div>
    ))
  )
  .add(
    "Neutral removable",
    withInfo()(() => (
      <div style={{ marginTop: "20px" }}>
        <Tag
          type={tagTypes.NEUTRAL}
          text="You can remove this tag"
          onRemove={action("onRemove")}
        />
      </div>
    ))
  )
  .add(
    "Multiple tags",
    withInfo()(() => (
      <div style={{ marginTop: "20px" }}>
        <Tag
          onRemove={action("onRemove")}
          text="Aug 16, 2018"
          value="18-08-16"
        />
        <Tag
          onRemove={action("onRemove")}
          text="This is a long removable tag"
        />
        <Tag text="Neutral tag" type={tagTypes.NEUTRAL} />
        <Tag text="And that's an even bigger and wider not removable tag" />
      </div>
    ))
  );
