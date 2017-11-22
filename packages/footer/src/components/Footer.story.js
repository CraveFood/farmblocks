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
      />
    ))
  );
