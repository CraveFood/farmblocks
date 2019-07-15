import React from "react";
import { storiesOf } from "@storybook/react";
import { POSITIONS } from "@crave/farmblocks-tooltip";

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
      <MoreInfo tooltipProps={{ positionX: POSITIONS.X.LEFT }}>
        Tooltip left aligned with text
      </MoreInfo>
    </div>
  ))
  .add("Without text - tooltip right aligned", () => (
    <div style={{ marginLeft: "200px" }}>
      <MoreInfo tooltipProps={{ positionX: POSITIONS.X.LEFT }}>
        Awesome tooltip
      </MoreInfo>
    </div>
  ))
  .add("extended style", () => (
    <div>
      <MoreInfo
        css="
        .text {
          font-family: serif;
        }
        .icon {
          position: relative;
          i {visibility: hidden;}
          .hitArea {
            z-index: 1;
          }
          &::after {
            content: '🤔';
            position: absolute;
            top: 0;
          }
          &.tooltip {
            width: 250px;
            white-space: pre-line;
            text-align: center;
          }
        }
      "
        text="How much wood could a woodchuck chuck if a woodchuck could chuck wood?"
      >
        A woodchuck would chuck no amount of wood since a woodchuck can’t chuck
        wood.
      </MoreInfo>
    </div>
  ));
