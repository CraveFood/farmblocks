// @flow
import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import EmptyState from "./EmptyState";

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
    "Long Title",
    withInfo()(() => (
      <EmptyState
        title={twoLinesDescription}
        description={twoLinesDescription}
      />
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
        primaryButtonLabel="Primary Action"
        onPrimaryButtonClick={action("clicked")}
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
        primaryButtonLabel="Primary Action"
        onPrimaryButtonClick={action("clicked")}
        info={twoLinesDescription}
      />
    ))
  );
