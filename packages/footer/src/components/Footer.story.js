import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Footer from "./Footer";

storiesOf("Footer", module)
  .add(
    "default",
    withInfo()(() => (
      <Footer
        helpText="Have questions about account setup?"
        helpLinkText="Get support"
        helpLinkHref="#"
        onSecondaryActionClick={action("onSecondaryActionClick")}
        secondaryActionText="Secondary Action"
        onPrimaryActionClick={action("onPrimaryActionClick")}
        primaryActionText="Primary Action"
        helpImageSrc="https://crave-whatsgood-sandbox.imgix.net/businesses/32/inventory/8fae5d32-f6d4-47bb-8062-e4e85c47788b.png"
      />
    ))
  )
  .add(
    "without link",
    withInfo()(() => (
      <Footer
        helpText="Have questions about account setup?"
        onSecondaryActionClick={action("onSecondaryActionClick")}
        secondaryActionText="Secondary Action"
        onPrimaryActionClick={action("onPrimaryActionClick")}
        primaryActionText="Primary Action"
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
        onSecondaryActionClick={action("onSecondaryActionClick")}
        secondaryActionText="Secondary Action"
        onPrimaryActionClick={action("onPrimaryActionClick")}
        primaryActionText="Primary Action"
      />
    ))
  )
  .add(
    "loading primary action",
    withInfo()(() => (
      <Footer
        helpText="Have questions about account setup?"
        helpLinkText="Get support"
        helpLinkHref="#"
        onSecondaryActionClick={action("onSecondaryActionClick")}
        secondaryActionText="Secondary Action"
        onPrimaryActionClick={action("onPrimaryActionClick")}
        primaryActionText="Primary Action"
        loadingPrimaryAction
        helpImageSrc="https://crave-whatsgood-sandbox.imgix.net/businesses/32/inventory/8fae5d32-f6d4-47bb-8062-e4e85c47788b.png"
      />
    ))
  )
  .add(
    "loading secondary action",
    withInfo()(() => (
      <Footer
        helpText="Have questions about account setup?"
        helpLinkText="Get support"
        helpLinkHref="#"
        onSecondaryActionClick={action("onSecondaryActionClick")}
        secondaryActionText="Secondary Action"
        onPrimaryActionClick={action("onPrimaryActionClick")}
        primaryActionText="Primary Action"
        loadingSecondaryAction
        helpImageSrc="https://crave-whatsgood-sandbox.imgix.net/businesses/32/inventory/8fae5d32-f6d4-47bb-8062-e4e85c47788b.png"
      />
    ))
  )
  .add(
    "primary action only",
    withInfo()(() => (
      <Footer
        helpText="Have questions about account setup?"
        helpLinkText="Get support"
        helpLinkHref="#"
        onPrimaryActionClick={action("onPrimaryActionClick")}
        primaryActionText="Primary Action"
        helpImageSrc="https://crave-whatsgood-sandbox.imgix.net/businesses/32/inventory/8fae5d32-f6d4-47bb-8062-e4e85c47788b.png"
      />
    ))
  )
  .add(
    "secondary action only",
    withInfo()(() => (
      <Footer
        helpText="Have questions about account setup?"
        helpLinkText="Get support"
        helpLinkHref="#"
        onSecondaryActionClick={action("onSecondaryActionClick")}
        secondaryActionText="Secondary Action"
        helpImageSrc="https://crave-whatsgood-sandbox.imgix.net/businesses/32/inventory/8fae5d32-f6d4-47bb-8062-e4e85c47788b.png"
      />
    ))
  )
  .add(
    "no button",
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
    "noAction",
    withInfo()(() => (
      <Footer
        helpText="Have questions about account setup?"
        helpLinkText="Get support"
        helpLinkHref="#"
        noAction
        helpImageSrc="https://crave-whatsgood-sandbox.imgix.net/businesses/32/inventory/8fae5d32-f6d4-47bb-8062-e4e85c47788b.png"
      />
    ))
  );
