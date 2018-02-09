import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import EmptyState from "@crave/farmblocks-empty-state";

const twoLinesDescription =
  "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.";

const imgSrc =
  "https://sourcewhatsgood.com/assets/images/utility_images/gallery-third-about-a518a29f64.jpg";

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
    "With primary button",
    withInfo()(() => (
      <EmptyState
        imageSrc={imgSrc}
        title="Empty State Title"
        description={twoLinesDescription}
        primaryActionText="Primary Action"
        onPrimaryActionClick={action("onPrimaryActionClick")}
      />
    ))
  )
  .add(
    "With primary button, inside a container",
    withInfo()(() => (
      <div style={{ width: 560, padding: "52px 0" }}>
        <EmptyState
          imageSrc={imgSrc}
          title="Empty State Title"
          description={twoLinesDescription}
          primaryActionText="Primary Action"
          onPrimaryActionClick={action("onPrimaryActionClick")}
        />
      </div>
    ))
  )
  .add(
    "With primary and secondary buttons",
    withInfo()(() => (
      <EmptyState
        imageSrc={imgSrc}
        title="Empty State Title"
        description={twoLinesDescription}
        primaryActionText="Primary Action"
        onPrimaryActionClick={action("onPrimaryActionClick")}
        secondaryActionText="Secondary Action"
        onSecondaryActionClick={action("onSecondaryActionClick")}
      />
    ))
  )
  .add(
    "With secondary button only",
    withInfo()(() => (
      <EmptyState
        imageSrc={imgSrc}
        title="Empty State Title"
        description={twoLinesDescription}
        secondaryActionText="Secondary Action"
        onSecondaryActionClick={action("onSecondaryActionClick")}
      />
    ))
  )
  .add(
    "With primary button and info",
    withInfo()(() => (
      <EmptyState
        imageSrc={imgSrc}
        title="Empty State Title"
        description={twoLinesDescription}
        primaryActionText="Primary Action"
        onPrimaryActionClick={action("onPrimaryActionClick")}
        info={twoLinesDescription}
      />
    ))
  );
