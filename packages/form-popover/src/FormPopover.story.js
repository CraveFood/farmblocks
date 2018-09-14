import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import Input from "@crave/farmblocks-input-text";

import FormPopover from ".";

storiesOf("Form Popover", module)
  .add(
    "Default",
    withInfo()(() => (
      <FormPopover onCancel={action("onCancel")} onSave={action("onSave")}>
        <Input label="First Name" />
        <Input label="Last Name" />
      </FormPopover>
    ))
  )
  .add(
    "With title",
    withInfo()(() => (
      <FormPopover
        onCancel={action("onCancel")}
        onSave={action("onSave")}
        title="Title"
      >
        <Input label="First Name" />
        <Input label="Last Name" />
      </FormPopover>
    ))
  )
  .add(
    "loading",
    withInfo()(() => (
      <FormPopover
        onCancel={action("onCancel")}
        onSave={action("onSave")}
        title="Title"
        loading
      >
        <Input label="First Name" />
        <Input label="Last Name" />
      </FormPopover>
    ))
  )
  .add(
    "extra content",
    withInfo()(() => (
      <FormPopover
        onCancel={action("onCancel")}
        onSave={action("onSave")}
        title="Title"
        extraContent={<div>Extra content renders after save button</div>}
      >
        <Input label="First Name" />
        <Input label="Last Name" />
      </FormPopover>
    ))
  );
