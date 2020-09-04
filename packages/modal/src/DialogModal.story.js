import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { buttonVariants } from "@crave/farmblocks-button";
import { MdAlert, MdQuestion } from "@crave/farmblocks-icon";

import { DialogModal, useModal } from ".";

const primaryAction = {
  text: "Primary Action",
  onClick: action("onPrimaryActionClick"),
  variant: buttonVariants.PRIMARY,
};

const neutralAction = {
  text: "Neutral Action",
  onClick: action("onNeutralActionClick"),
  variant: buttonVariants.NEUTRAL,
};

storiesOf("Modal/DialogModal", module)
  .add("Image + two actions", () => (
    <DialogModal
      imageSrc="https://picsum.photos/200?image=0"
      title="Dialog Modal Title"
      description="Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod."
      actions={[neutralAction, primaryAction]}
      isOpen
      onRequestClose={action("onRequestClose")}
      cardProps={{ width: "700px" }}
    />
  ))
  .add("Icon + one action", () => (
    <DialogModal
      icon={<MdAlert />}
      title="Dialog Modal Title"
      description="Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod."
      actions={[primaryAction]}
      isOpen
      onRequestClose={action("onRequestClose")}
    />
  ))
  .add("With state", () => {
    const Example = () => {
      const [modalProps, { open, close }] = useModal();
      const cancel = () => {
        action("Cancelled")();
        close();
      };
      const confirm = () => {
        action("Done")();
        close();
      };

      return (
        <div>
          <button onClick={open}>Do Something</button>
          <DialogModal
            {...modalProps}
            icon={<MdQuestion />}
            title="Do the thing?"
            description="Once it's done, there's no way back."
            actions={[
              {
                text: "Don't do",
                onClick: cancel,
                variant: buttonVariants.NEUTRAL,
              },
              {
                text: "Do it!",
                onClick: confirm,
                variant: buttonVariants.PRIMARY,
              },
            ]}
            onRequestClose={cancel}
          />
        </div>
      );
    };
    return <Example />;
  });
