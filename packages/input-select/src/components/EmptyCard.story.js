import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import EmptyCard from "./EmptyCard";

storiesOf("Select Input (private)", "module")
  .add("Empty card", withInfo()(() => <EmptyCard />))
  .add(
    "Empty with custom message",
    withInfo()(() => <EmptyCard noResultsMessage="Custom message" />)
  );
