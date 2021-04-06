import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import TextInput from "@crave/farmblocks-input-text";

import FilterPopover from ".";

storiesOf("Filter Popover", module)
  .add("Default", () => (
    <FilterPopover
      triggerLabel="Filter"
      formTitle="Form Title"
      onOutsideClick={action("onOutsideClick")}
      formContent={
        <div>
          <TextInput label="Product" />
          <TextInput label="Owner" />
        </div>
      }
    />
  ))
  .add("With value set", () => (
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
  .add("With value set and custom Cancel label and handler", () => (
    <FilterPopover
      hasValue
      triggerLabel="Filter"
      formTitle="Form Title"
      onFormSaveClick={action("onActionButtonClick")}
      formCancelLabel="Custom label"
      onFormCancelClick={action("onFormCancelClick")}
      formContent={
        <div>
          <TextInput label="Product" value="Apple" name="product" />
          <TextInput label="Owner" />
        </div>
      }
    />
  ))
  .add("zIndex", () => (
    <>
      <FilterPopover
        tooltipProps={{ zIndex: 2 }}
        triggerLabel="Filter"
        formTitle="Form Title"
        formContent={
          <div>
            <TextInput label="Product" />
            <TextInput label="Owner" />
          </div>
        }
      />
      <div
        style={{
          height: 150,
          background: "gainsboro",
          zIndex: 1,
          position: "relative",
          opacity: 0.5,
        }}
      >
        Under
      </div>
      <div
        style={{
          height: 150,
          background: "gainsboro",
          zIndex: 3,
          position: "relative",
          opacity: 0.5,
        }}
      >
        Over
      </div>
    </>
  ))
  .add("formContent as a function", () => (
    <FilterPopover
      triggerLabel="Filter"
      formTitle="Form Title"
      formContent={dismiss => (
        <button onClick={() => dismiss()}>Click to dismiss</button>
      )}
    />
  ))
  .add("extended style", () => (
    <FilterPopover
      css={`
        background: lightcyan;
        padding: 16px;
        .trigger {
          transform: rotate(0.5turn);
        }
        .formWrapper {
          background: lavender;
        }
      `}
      triggerLabel="Filter"
      formTitle="Form Title"
      formContent={
        <div>
          <TextInput label="Product" />
          <TextInput label="Owner" />
        </div>
      }
    />
  ));
