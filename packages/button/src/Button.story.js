import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styled from "styled-components";
import { MdSettings, SmChevronDown } from "@crave/farmblocks-icon";

import {
  PrimaryButton,
  SecondaryButton,
  NeutralButton,
  PositiveButton,
  NegativeButton,
  GhostButton,
} from "./index";

const FlexContainer = styled.div`
  display: flex;
  > * {
    margin-right: 40px;
  }

  font-family: lato;
`;

const GridContainer = styled.div`
  display: grid;

  row-gap: 24px;
`;

const RowTitles = () => (
  <GridContainer css="> * {align-self: center;}">
    <div />
    <div>Primary</div>
    <div>Neutral (Default)</div>
    <div>Secondary</div>
    <div>Positive</div>
    <div>Negative</div>
    <div>Ghost</div>
    <div>Loading</div>
    <div>Disabled</div>
  </GridContainer>
);

// eslint-disable-next-line
const getStories = ({ title, ...props }) => (
  <GridContainer>
    <span>{title}</span>

    <PrimaryButton
      onClick={action("buttonClicked")}
      text="Primary"
      {...props}
    />
    <NeutralButton
      onClick={action("buttonClicked")}
      text="Neutral"
      {...props}
    />
    <SecondaryButton
      onClick={action("buttonClicked")}
      text="Secondary"
      {...props}
    />
    <NegativeButton
      onClick={action("buttonClicked")}
      text="Negative"
      {...props}
    />
    <PositiveButton
      onClick={action("buttonClicked")}
      text="Positive"
      {...props}
    />
    <GhostButton onClick={action("buttonClicked")} text="Ghost" {...props} />
    <PrimaryButton loading text="loading" {...props} />
    <PrimaryButton disabled text="Disabled" {...props} />
  </GridContainer>
);

const CommonStory = props => (
  <FlexContainer>
    <RowTitles />
    {getStories({ ...props, title: "Default" })}
    {getStories({ ...props, title: "Hover", hovered: true })}
    {getStories({ ...props, title: "Active", active: true })}
    {getStories({ ...props, title: "Focus", focused: true })}
  </FlexContainer>
);

storiesOf("Form|Button/All variants with default size", module)
  .add("Default", () => <CommonStory />)
  .add("Left icon", () => <CommonStory icon={<MdSettings size={22} />} />)
  .add("Right icon", () => (
    <CommonStory rightIcon={<SmChevronDown size={20} />} />
  ))
  .add("Left and Right icon", () => (
    <CommonStory
      icon={<MdSettings size={22} />}
      rightIcon={<SmChevronDown size={20} />}
    />
  ))
  .add("Icon only", () => (
    <CommonStory icon={<MdSettings size={22} />} text="" />
  ));

storiesOf("Form|Button/All variants with small size", module)
  .add("Default", () => <CommonStory small />)
  .add("Left icon", () => <CommonStory small icon={<MdSettings size={22} />} />)
  .add("Right icon", () => (
    <CommonStory small rightIcon={<SmChevronDown size={20} />} />
  ))
  .add("Left and Right icon", () => (
    <CommonStory
      small
      icon={<MdSettings size={22} />}
      rightIcon={<SmChevronDown size={20} />}
    />
  ))
  .add("Icon only", () => (
    <CommonStory small icon={<MdSettings size={22} />} text="" />
  ));
