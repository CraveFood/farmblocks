import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Tag from "@crave/farmblocks-tags";

import HocWithTooltip from ".";

const EnhancedTag = HocWithTooltip(Tag);

storiesOf("HOC-withTooltip", module).add(
  "Tag with tooltip",
  withInfo()(() => <EnhancedTag text="This is an enhanced tag" />)
);
