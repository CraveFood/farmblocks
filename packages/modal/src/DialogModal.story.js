import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { buttonTypes } from "@crave/farmblocks-button";

import DialogModal from "./DialogModal";

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

storiesOf("Modal/DialogModal", module)
  .add("Image + two actions", () => (
    <DialogModal
      imageSrc="https://picsum.photos/200?image=0"
      title="Dialog Modal Title"
      description="Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod."
      actions={[secondaryAction, primaryAction]}
      isOpen
      onRequestClose={action("onRequestClose")}
      cardProps={{ width: "700px" }}
    />
  ))
  .add("Icon + one action", () => (
    <DialogModal
      icon="wg-alert"
      title="Dialog Modal Title"
      description="Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod."
      actions={[primaryAction]}
      isOpen
      onRequestClose={action("onRequestClose")}
    />
  ));
