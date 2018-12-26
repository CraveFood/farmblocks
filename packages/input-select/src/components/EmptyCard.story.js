import React from "react";
import { storiesOf } from "@storybook/react";

import EmptyCard from "./EmptyCard";

storiesOf("Select Input (private)", module)
  .add("Empty card", () => <EmptyCard />)
  .add("Empty with custom message", () => (
    <EmptyCard noResultsMessage="Custom message" />
  ));
