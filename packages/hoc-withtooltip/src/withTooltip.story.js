import React from "react";
import { storiesOf } from "@storybook/react";
import Tag from "@crave/farmblocks-tags";
import Card from "@crave/farmblocks-card";
import Text from "@crave/farmblocks-text";

import withTooltip from ".";

const TagWithTooltip = withTooltip(Tag);

const TextWithTooltip = withTooltip(Text);

storiesOf("HOC withTooltip", module)
  .add("Tag, tooltip with a card", () => (
    <TagWithTooltip
      text="This a tag with tooltip"
      tooltipContent={<Card>This is a Card </Card>}
    />
  ))

  .add("Tag, tooltip with text", () => (
    <TagWithTooltip
      text="This a tag with tooltip"
      tooltipContent="Tooltip custom text"
    />
  ))

  .add("Text, tooltip with text", () => (
    <TextWithTooltip tooltipContent="Tooltip custom text">
      Farmblocks-text
    </TextWithTooltip>
  ))

  .add("Text, tooltip disabled", () => (
    <TextWithTooltip disableTooltip tooltipContent="Tooltip custom text">
      Farmblocks-text
    </TextWithTooltip>
  ))

  .add("extended style", () => (
    <TagWithTooltip
      css="
        padding: 16px;
        background: moccasin;
        .wrapped {
          background: yellowgreen;
        }
        .tooltip {
          background: beige;
        }
      "
      text="This a tag with tooltip"
      tooltipContent="Tooltip custom text"
    />
  ));
