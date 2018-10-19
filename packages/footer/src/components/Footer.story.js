import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Button, { buttonTypes, buttonSizes } from "@crave/farmblocks-button";

import Footer from "./Footer";

storiesOf("Footer", module)
  .add(
    "without actions",
    withInfo()(() => (
      <Footer
        helpText="Have questions about account setup?"
        helpLinkText="Get support"
        helpLinkHref="#"
        helpImageSrc="https://crave-whatsgood-sandbox.imgix.net/businesses/32/inventory/8fae5d32-f6d4-47bb-8062-e4e85c47788b.png"
      />
    ))
  )
  .add(
    "with one action",
    withInfo()(() => (
      <Footer
        helpText="Have questions about account setup?"
        helpLinkText="Get support"
        onHelpLinkClick={action("onHelpLinkClick")}
        actions={[
          <Button onClick={action("onSaveClick")} text="Save" key="save" />
        ]}
        helpImageSrc="https://crave-whatsgood-sandbox.imgix.net/businesses/32/inventory/8fae5d32-f6d4-47bb-8062-e4e85c47788b.png"
      />
    ))
  )
  .add(
    "with two actions",
    withInfo()(() => (
      <Footer
        helpText="Have questions about account setup?"
        helpLinkText="Get support"
        onHelpLinkClick={action("onHelpLinkClick")}
        actions={[
          <Button
            onClick={action("onCancelClick")}
            text="Cancel"
            key="cancel"
            size={buttonSizes.MEDIUM}
          />,
          <Button
            onClick={action("onSaveClick")}
            text="Save"
            type={buttonTypes.PRIMARY}
            key="save"
            size={buttonSizes.MEDIUM}
          />
        ]}
        helpImageSrc="https://crave-whatsgood-sandbox.imgix.net/businesses/32/inventory/8fae5d32-f6d4-47bb-8062-e4e85c47788b.png"
      />
    ))
  )
  .add(
    "without link",
    withInfo()(() => (
      <Footer
        helpText="Have questions about account setup?"
        actions={[
          <Button onClick={action("onSaveClick")} text="Save" key="save" />
        ]}
        helpImageSrc="https://crave-whatsgood-sandbox.imgix.net/businesses/32/inventory/8fae5d32-f6d4-47bb-8062-e4e85c47788b.png"
      />
    ))
  )
  .add(
    "without image",
    withInfo()(() => (
      <Footer
        helpText="Have questions about account setup?"
        helpLinkText="Get support"
        helpLinkHref="#"
        actions={[
          <Button onClick={action("onSaveClick")} text="Save" key="save" />
        ]}
      />
    ))
  )
  .add(
    "custom font size",
    withInfo()(() => (
      <Footer
        helpText="Have questions about account setup?"
        helpLinkText="Get support"
        helpLinkHref="#"
        helpImageSrc="https://crave-whatsgood-sandbox.imgix.net/businesses/32/inventory/8fae5d32-f6d4-47bb-8062-e4e85c47788b.png"
        helpFontSize={12}
      />
    ))
  );
