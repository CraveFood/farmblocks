import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

import Text from "./Text";

storiesOf("Text/Default", module)
  .add(
    "default - LARGE size, NORMAL type, left aligned",
    withInfo()(() => <Text>Awesome Text</Text>)
  )
  .add(
    "right aligned",
    withInfo()(() => <Text align="right">Awesome Text</Text>)
  )
  .add("justified", withInfo()(() => <Text align="justify">Awesome Text</Text>))
  .add("centered", withInfo()(() => <Text align="center">Awesome Text</Text>))
  .add(
    "SMALL size",
    withInfo()(() => <Text size={fontSizes.SMALL}>Awesome Text</Text>)
  )
  .add(
    "MEDIUM size",
    withInfo()(() => <Text size={fontSizes.MEDIUM}>Awesome Text</Text>)
  )
  .add(
    "LARGE size",
    withInfo()(() => <Text size={fontSizes.LARGE}>Awesome Text</Text>)
  )
  .add(
    "X_LARGE size",
    withInfo()(() => <Text size={fontSizes.X_LARGE}>Awesome Text</Text>)
  )
  .add(
    "HUGE size",
    withInfo()(() => <Text size={fontSizes.HUGE}>Awesome Text</Text>)
  )
  .add(
    "NEUTRAL type",
    withInfo()(() => <Text type={fontTypes.NEUTRAL}>Awesome Text</Text>)
  )
  .add(
    "POSITIVE type",
    withInfo()(() => <Text type={fontTypes.POSITIVE}>Awesome Text</Text>)
  )
  .add(
    "NEGATIVE type",
    withInfo()(() => <Text type={fontTypes.NEGATIVE}>Awesome Text</Text>)
  )
  .add(
    "FEATURED type",
    withInfo()(() => <Text type={fontTypes.FEATURED}>Awesome Text</Text>)
  )
  .add(
    "SUBTLE type",
    withInfo()(() => <Text type={fontTypes.SUBTLE}>Awesome Text</Text>)
  )
  .add(
    "WHITE type",
    withInfo()(() => (
      <div style={{ background: "cadetblue" }}>
        <Text type={fontTypes.WHITE}>Awesome Text</Text>
      </div>
    ))
  );
