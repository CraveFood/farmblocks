import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

import Title from "./Title";

storiesOf("Text - Title", module)
  .add("default", withInfo()(() => <Title>Awesome title</Title>))
  .add(
    "SMALL size",
    withInfo()(() => <Title size={fontSizes.SMALL}>Awesome title</Title>)
  )
  .add(
    "MEDIUM size",
    withInfo()(() => <Title size={fontSizes.MEDIUM}>Awesome title</Title>)
  )
  .add(
    "LARGE size",
    withInfo()(() => <Title size={fontSizes.LARGE}>Awesome title</Title>)
  )
  .add(
    "X_LARGE size",
    withInfo()(() => <Title size={fontSizes.X_LARGE}>Awesome title</Title>)
  )
  .add(
    "HUGE size",
    withInfo()(() => <Title size={fontSizes.HUGE}>Awesome title</Title>)
  )
  .add(
    "NORMAL type",
    withInfo()(() => <Title type={fontTypes.NORMAL}>Awesome title</Title>)
  )
  .add(
    "NEUTRAL type",
    withInfo()(() => <Title type={fontTypes.NEUTRAL}>Awesome title</Title>)
  )
  .add(
    "POSITIVE type",
    withInfo()(() => <Title type={fontTypes.POSITIVE}>Awesome title</Title>)
  )
  .add(
    "NEGATIVE type",
    withInfo()(() => <Title type={fontTypes.NEGATIVE}>Awesome title</Title>)
  )
  .add(
    "FEATURED type",
    withInfo()(() => <Title type={fontTypes.FEATURED}>Awesome title</Title>)
  )
  .add(
    "SUBTLE type",
    withInfo()(() => <Title type={fontTypes.SUBTLE}>Awesome title</Title>)
  )
  .add(
    "WHITE type",
    withInfo()(() => (
      <div style={{ background: "cadetblue" }}>
        <Title type={fontTypes.WHITE}>Awesome title</Title>
      </div>
    ))
  );
