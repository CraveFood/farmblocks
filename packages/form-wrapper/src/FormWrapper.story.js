import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import Input from "@crave/farmblocks-input-text";

import FormWrapper from ".";

storiesOf("Form Wrapper", module)
  .add(
    "Default",
    withInfo()(() => (
      <FormWrapper onCancel={action("onCancel")} onSave={action("onSave")}>
        <Input label="First Name" />
        <Input label="Last Name" />
      </FormWrapper>
    ))
  )
  .add(
    "With title",
    withInfo()(() => (
      <FormWrapper
        onCancel={action("onCancel")}
        onSave={action("onSave")}
        title="Title"
      >
        <Input label="First Name" />
        <Input label="Last Name" />
      </FormWrapper>
    ))
  )
  .add(
    "loading",
    withInfo()(() => (
      <FormWrapper
        onCancel={action("onCancel")}
        onSave={action("onSave")}
        title="Title"
        loading
      >
        <Input label="First Name" />
        <Input label="Last Name" />
      </FormWrapper>
    ))
  )
  .add(
    "extra content",
    withInfo()(() => (
      <FormWrapper
        onCancel={action("onCancel")}
        onSave={action("onSave")}
        title="Title"
        extraContent={<div>Extra content renders after save button</div>}
      >
        <Input label="First Name" />
        <Input label="Last Name" />
      </FormWrapper>
    ))
  );
