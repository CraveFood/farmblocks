import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import Input from "@crave/farmblocks-input-text";

import FormPopover from ".";

storiesOf("Form Popover", module)
  .add("Default", withInfo()(() => <FormPopover />))
  .add("With title", withInfo()(() => <FormPopover title="My form" />))
  .add(
    "With form content and save handler",
    withInfo()(() => {
      let formData = new window.FormData();
      formData.set("fieldA", "foo");
      formData.set("fieldB", "bar");
      const content = data => (
        <div>
          <Input label="Field Label" name="fieldA" value={data.get("fieldA")} />
          <Input label="Field Label" bame="fieldB" value={data.get("fieldB")} />
        </div>
      );
      const props = {
        formData,
        content,
        onSave: action("saved"),
        title: "Action Name"
      };
      return <FormPopover {...props} />;
    })
  );
