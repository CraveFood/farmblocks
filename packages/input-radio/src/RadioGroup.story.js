import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Radio, { RadioGroup } from ".";

storiesOf("RadioGroup", module)
  .add("Default", () => (
    <RadioGroup name="radioExample">
      <Radio value="first" label="First" />
      <Radio value="second" label="Second" />
      <Radio value="third" label="Third" />
    </RadioGroup>
  ))
  .add("w/ disabled option", () => (
    <RadioGroup name="radioExample">
      <Radio value="first" label="First" />
      <Radio value="second" label="Second" />
      <Radio value="third" label="Third" disabled />
    </RadioGroup>
  ))
  .add("w/ default value", () => (
    <RadioGroup name="radioExample" defaultValue="second">
      <Radio value="first" label="First" />
      <Radio value="second" label="Second" />
      <Radio value="third" label="Third" />
    </RadioGroup>
  ))
  .add("onChange", () => (
    <RadioGroup name="radioExample" onChange={action("onChange")}>
      <Radio value="first" label="First" />
      <Radio value="second" label="Second" />
      <Radio value="third" label="Third" />
    </RadioGroup>
  ))
  .add("all disabled", () => (
    <RadioGroup name="radioExample" disabled defaultValue="third">
      <Radio value="first" label="First" />
      <Radio value="second" label="Second" />
      <Radio value="third" label="Third" />
    </RadioGroup>
  ))
  .add("extended style", () => (
    <RadioGroup
      css="
        background: cornsilk;
        padding: 16px;
        .radio {
          transition: transform .3s;
          background: antiquewhite;
          .checkedIndicator{
            position: relative;
            background: none;
            &::after {
              position: absolute;
              bottom: -100%;
              left: -20%;
              font-size: 1.2em;
              content: '👍';
              text-shadow: 0 0 1px black;
            }
          }
          &.checked {
            transform: scale(1.2);
          }
          &.disabled {
            text-decoration: line-through;
          }
        }
      "
      name="radioExample"
      defaultValue="second"
    >
      <Radio value="first" label="First" />
      <Radio value="second" label="Second" />
      <Radio value="third" label="Third" disabled />
    </RadioGroup>
  ));
