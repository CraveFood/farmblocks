import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Input from "@crave/farmblocks-input-text";

import FormWrapper from ".";

storiesOf("Form Wrapper", module)
  .add("Default", () => (
    <FormWrapper onCancel={action("onCancel")} onSave={action("onSave")}>
      <Input label="First Name" />
      <Input label="Last Name" />
    </FormWrapper>
  ))
  .add("With title", () => (
    <FormWrapper
      onCancel={action("onCancel")}
      onSave={action("onSave")}
      title="Title"
    >
      <Input label="First Name" />
      <Input label="Last Name" />
    </FormWrapper>
  ))
  .add("loading", () => (
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
  .add("extra content", () => (
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
  .add("in compact container", () => (
    <div style={{ display: "inline-block" }}>
      <FormWrapper
        onCancel={action("onCancel")}
        onSave={action("onSave")}
        title="Long Title That Should Not Touch The Cancel Button"
      >
        <Input label="First Name" />
        <Input label="Last Name" />
      </FormWrapper>
    </div>
  ))
  .add("With id", () => (
    <FormWrapper
      id="an-id"
      onCancel={action("onCancel")}
      onSave={action("onSave")}
    >
      <Input label="First Name" />
      <Input label="Last Name" />
    </FormWrapper>
  ))
  .add("extended style", () => (
    <FormWrapper
      css="
        background: gainsboro;
        .header {
          border: solid 4px maroon;
          .title {
            font-family: fantasy;
          }
          .cancel {
            transform: scaleX(-1);
          }
        }
        .body {
          margin: 40px;
        }
        .footer {
          border: solid 4px mediumslateblue;
          .save {
            opacity: .3;
          }
        }
      "
      title="Title"
      onCancel={action("onCancel")}
      onSave={action("onSave")}
    >
      <Input label="First Name" />
      <Input label="Last Name" />
    </FormWrapper>
  ));
