import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "@crave/farmblocks-card";
import Button from "@crave/farmblocks-button";
import { action } from "@storybook/addon-actions";

import MoreInfo from "./MoreInfo";

storiesOf("More info", module)
  .add("Default", () => (
    <div>
      <MoreInfo text="Mouse over the icon for more info">
        Tooltip with text
      </MoreInfo>
    </div>
  ))
  .add("Without text - tooltip left aligned", () => (
    <div>
      <MoreInfo tooltipAlign="left">Tooltip left aligned with text</MoreInfo>
    </div>
  ))
  .add("Without text - tooltip right aligned", () => (
    <div style={{ marginLeft: "200px" }}>
      <MoreInfo tooltipAlign="right">Awesome tooltip</MoreInfo>
    </div>
  ))
  .add("with card", () => (
    <div>
      <MoreInfo text="Mouse over the icon for more info">
        <Card>This is a Card.</Card>
      </MoreInfo>
    </div>
  ))
  .add("with button", () => (
    <div>
      <MoreInfo text="Mouse over the icon for more info">
        <Button onClick={action("button clicked")}>This is a Button</Button>
      </MoreInfo>
    </div>
  ));
