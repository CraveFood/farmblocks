import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { buttonTypes } from "@crave/farmblocks-button";

import EmptyState from "./EmptyState";

const twoLinesDescription =
  "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.";

const imgSrc = "https://picsum.photos/200";

const primaryAction = {
  text: "Primary Action",
  onClick: action("onPrimaryActionClick"),
  type: buttonTypes.SECONDARY
};

const secondaryAction = {
  text: "Secondary Action",
  onClick: action("onSecondaryActionClick"),
  type: buttonTypes.NEUTRAL
};

storiesOf("EmptyState", module)
  .add(
    "Default",
    withInfo()(() => (
      <EmptyState title="Empty State Title" description={twoLinesDescription} />
    ))
  )
  .add(
    "Long Title, inside a container",
    withInfo()(() => (
      <div style={{ width: 560, padding: "52px 0" }}>
        <EmptyState
          title={twoLinesDescription}
          description={twoLinesDescription}
        />
      </div>
    ))
  )
  .add(
    "With image",
    withInfo()(() => (
      <EmptyState
        imageSrc={imgSrc}
        title="Empty State Title"
        description={twoLinesDescription}
      />
    ))
  )
  .add(
    "With one action",
    withInfo()(() => (
      <EmptyState
        imageSrc={imgSrc}
        title="Empty State Title"
        description={twoLinesDescription}
        actions={[primaryAction]}
      />
    ))
  )
  .add(
    "With two actions",
    withInfo()(() => (
      <EmptyState
        imageSrc={imgSrc}
        title="Empty State Title"
        description={twoLinesDescription}
        actions={[secondaryAction, primaryAction]}
      />
    ))
  )
  .add(
    "With one action, inside a container",
    withInfo()(() => (
      <div style={{ width: 560, padding: "52px 0" }}>
        <EmptyState
          imageSrc={imgSrc}
          title="Empty State Title"
          description={twoLinesDescription}
          actions={[primaryAction]}
        />
      </div>
    ))
  )
  .add(
    "With one action and info",
    withInfo()(() => (
      <EmptyState
        imageSrc={imgSrc}
        title="Empty State Title"
        description={twoLinesDescription}
        actions={[primaryAction]}
        info={twoLinesDescription}
      />
    ))
  )
  .add(
    "With icon",
    withInfo()(() => (
      <EmptyState
        icon="wg-order"
        title="Empty State Title"
        description={twoLinesDescription}
      />
    ))
  );
