import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import styled from "styled-components";

import gridBackground from "./demoGrid.png";
import MapBalloon from ".";

const DemoGrid = styled.div`
  position: relative;
  width: 800px;
  height: 800px;
  background: url("${gridBackground}");
`;

storiesOf("Map Balloon", "module")
  .add(
    "Default",
    withInfo()(() => (
      <DemoGrid>
        <MapBalloon x={400} y={400} />
      </DemoGrid>
    ))
  )
  .add(
    "Open Balloon",
    withInfo()(() => (
      <DemoGrid>
        <MapBalloon x={400} y={400} open />
      </DemoGrid>
    ))
  );
