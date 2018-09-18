import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import TextInput from "@crave/farmblocks-input-text";

import FilterPopover from ".";

storiesOf("Filter Popover", module)
  .add(
    "Default",
    withInfo()(() => (
      <FilterPopover
        triggerLabel="Filter"
        formTitle="Form Title"
        formContent={
          <div>
            <TextInput label="Product" />
            <TextInput label="Owner" />
          </div>
        }
      />
    ))
  )
  .add(
    "With value set",
    withInfo()(() => (
      <FilterPopover
        hasValue
        triggerLabel="Filter"
        formTitle="Form Title"
        onFormSaveClick={action("onActionButtonClick")}
        formContent={
          <div>
            <TextInput label="Product" value="Apple" name="product" />
            <TextInput label="Owner" />
          </div>
        }
      />
    ))
  );
