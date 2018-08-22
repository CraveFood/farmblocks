import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import EmptyState from "@crave/farmblocks-empty-state";
import Footer from "@crave/farmblocks-footer";
import Button from "@crave/farmblocks-button";

import Card, { cardTypes } from ".";

storiesOf("Card", module)
  .add("Default", withInfo()(() => <Card />))
  .add("Floating", withInfo()(() => <Card floating />))
  .add("Type Neutral", withInfo()(() => <Card type={cardTypes.NEUTRAL} />))
  .add("Type Featured", withInfo()(() => <Card type={cardTypes.FEATURED} />))
  .add(
    "Type Featured with 300px width",
    withInfo()(() => <Card width="300px" type={cardTypes.FEATURED} />)
  )
  .add(
    "Floating with content (Empty State) and 560px width",
    withInfo()(() => (
      <Card floating width="560px">
        <EmptyState title="My Card Title" description="My card description" />
      </Card>
    ))
  )
  .add(
    "Floating with content and 40px padding and 1136px width",
    withInfo()(() => (
      <Card floating padding="40px" width="1136px">
        <EmptyState title="My Card Title" description="My card description" />
      </Card>
    ))
  )
  .add(
    "With content (footer and empty state) and 1136px width",
    withInfo()(() => (
      <Card padding="0" width="1136px">
        <EmptyState title="My Card Title" description="My card description" />
        <Footer
          helpText="Have questions about account setup?"
          helpLinkText="Get support"
          helpLinkHref="#"
          helpImageSrc="https://crave-whatsgood-sandbox.imgix.net/businesses/32/inventory/8fae5d32-f6d4-47bb-8062-e4e85c47788b.png"
        />
      </Card>
    ))
  )
  .add(
    "With overflow visible",
    withInfo()(() => (
      <Card overflow="visible">
        <Button text="Hover me to show tooltip" disabled />
      </Card>
    ))
  );
