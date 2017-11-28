import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import EmptyState from "@crave/farmblocks-empty-state";
import { cardTypes } from "./constants/cardTypes";

import Card from ".";

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
  );
