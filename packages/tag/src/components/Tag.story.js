import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Tag, { tagTypes } from "..";

storiesOf("Tag", module)
  .add("Default", () => (
    <div style={{ marginTop: "20px" }}>
      <Tag text="THIS IS A TAG" />
    </div>
  ))
  .add("Empty tag", () => (
    <div style={{ marginTop: "20px" }}>
      <Tag />
    </div>
  ))
  .add("With children", () => (
    <div style={{ marginTop: "20px" }}>
      <Tag>
        <div style={{ width: "auto" }}>
          <img
            src="https://picsum.photos/200?image=0"
            style={{ width: "8px" }}
            alt="picsum"
          />
        </div>
      </Tag>
    </div>
  ))
  .add("Disabled", () => (
    <div style={{ marginTop: "20px" }}>
      <Tag disabled text="THIS IS A TAG" />
    </div>
  ))
  .add("With icon", () => (
    <div style={{ marginTop: "20px" }}>
      <Tag text="Tag with icon" icon="wg-order" />
    </div>
  ))
  .add("Removable with icon", () => (
    <div style={{ marginTop: "20px" }}>
      <Tag text="Tag with icon" icon="wg-order" onRemove={action("onRemove")} />
    </div>
  ))
  .add("Removable", () => (
    <div style={{ marginTop: "20px" }}>
      <Tag text="You can remove this tag" onRemove={action("onRemove")} />
    </div>
  ))
  .add("Removable disabled", () => (
    <div style={{ marginTop: "20px" }}>
      <Tag
        disabled
        text="You can remove this tag. NOT!"
        onRemove={action("onRemove")}
      />
    </div>
  ))
  .add("Removable with value", () => (
    <div style={{ marginTop: "20px" }}>
      <Tag onRemove={action("onRemove")} text="Removable Tag #1" value="1" />
    </div>
  ))
  .add("Neutral", () => (
    <div style={{ marginTop: "20px" }}>
      <Tag type={tagTypes.NEUTRAL} text="THIS IS A TAG" />
    </div>
  ))
  .add("Neutral removable", () => (
    <div style={{ marginTop: "20px" }}>
      <Tag
        type={tagTypes.NEUTRAL}
        text="You can remove this tag"
        onRemove={action("onRemove")}
      />
    </div>
  ))
  .add("Multiple tags", () => (
    <div style={{ marginTop: "20px" }}>
      <Tag onRemove={action("onRemove")} text="Aug 16, 2018" value="18-08-16" />
      <Tag onRemove={action("onRemove")} text="This is a long removable tag" />
      <Tag text="Neutral tag" type={tagTypes.NEUTRAL} />
      <Tag disabled text="Disabled tag" />
      <Tag onRemove={action("onRemove")} disabled text="Disabled removable" />
      <Tag text="And that's an even bigger and wider not removable tag" />
    </div>
  ))
  .add("Disabled Size", () => (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      Those two should have the same width
      <Tag onRemove={action("onRemove")} disabled text="THIS IS A TAG" />
      <Tag onRemove={action("onRemove")} text="THIS IS A TAG" />
    </div>
  ));
