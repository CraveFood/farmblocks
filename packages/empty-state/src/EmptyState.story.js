import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { buttonTypes } from "@crave/farmblocks-button";

import EmptyState from "./EmptyState";

const twoLinesDescription =
  "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.";

const imgSrc = "https://picsum.photos/200?image=0";

const primaryAction = {
  text: "Primary Action",
  onClick: action("onPrimaryActionClick"),
  type: buttonTypes.SECONDARY,
};

const secondaryAction = {
  text: "Secondary Action",
  onClick: action("onSecondaryActionClick"),
  type: buttonTypes.NEUTRAL,
};

storiesOf("EmptyState", module)
  .add("Default", () => (
    <EmptyState title="Empty State Title" description={twoLinesDescription} />
  ))
  .add("Long Title, inside a container", () => (
    <div style={{ width: 560, padding: "52px 0" }}>
      <EmptyState
        title={twoLinesDescription}
        description={twoLinesDescription}
      />
    </div>
  ))
  .add("With image", () => (
    <EmptyState
      imageSrc={imgSrc}
      title="Empty State Title"
      description={twoLinesDescription}
    />
  ))
  .add("With one action", () => (
    <EmptyState
      imageSrc={imgSrc}
      title="Empty State Title"
      description={twoLinesDescription}
      actions={[primaryAction]}
    />
  ))
  .add("With two actions", () => (
    <EmptyState
      imageSrc={imgSrc}
      title="Empty State Title"
      description={twoLinesDescription}
      actions={[secondaryAction, primaryAction]}
    />
  ))
  .add("With one action, inside a container", () => (
    <div style={{ width: 560, padding: "52px 0" }}>
      <EmptyState
        imageSrc={imgSrc}
        title="Empty State Title"
        description={twoLinesDescription}
        actions={[primaryAction]}
      />
    </div>
  ))
  .add("With one action and info", () => (
    <EmptyState
      imageSrc={imgSrc}
      title="Empty State Title"
      description={twoLinesDescription}
      actions={[primaryAction]}
      info={twoLinesDescription}
    />
  ))
  .add("With icon", () => (
    <EmptyState
      icon="wg-order"
      title="Empty State Title"
      description={twoLinesDescription}
    />
  ))
  .add("extended style", () => (
    <EmptyState
      css="
        border: solid 3px lightsalmon;
        .icon {
          font-size: 16px;
          color: olive;
        }
        .title {
          font-family: fantasy;
        }
        .description {
          font-family: serif;
        }
        .info {
          font-family: monospace;
        }
      "
      icon="wg-order"
      title="Empty State Title"
      description={twoLinesDescription}
      info={twoLinesDescription}
    />
  ));
