import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import styled from "styled-components";

import MapBalloon, { alignments, balloonSizes } from ".";

const DemoGrid = styled.div`
  position: relative;
  width: 800px;
  height: 800px;
  background: #ccc
    url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFElEQVR4AWMgEthTT+GoQnsiMAMA+G4Eb/fCw1gAAAAASUVORK5CYII=");
`;

const imageSet = [
  {
    image: "https://picsum.photos/640/?random",
    text: "Romaine Lettuce"
  }
];

storiesOf("Map Balloon", "module")
  .add(
    "Default",
    withInfo()(() => (
      <DemoGrid>
        <MapBalloon
          x={400}
          y={400}
          imageSet={imageSet}
          caption="Paloma Orchards"
        />
      </DemoGrid>
    ))
  )
  .add(
    "Open Balloon",
    withInfo()(() => (
      <DemoGrid>
        <MapBalloon
          x={400}
          y={400}
          open
          imageSet={imageSet}
          caption="Paloma Orchards"
        />
      </DemoGrid>
    ))
  )
  .add(
    "Animated",
    withInfo()(() => (
      <DemoGrid>
        <MapBalloon
          x={400}
          y={400}
          open
          imageSet={imageSet}
          caption="Paloma Orchards"
          animated
        />
      </DemoGrid>
    ))
  )
  .add(
    "Open Balloon at Right",
    withInfo()(() => (
      <DemoGrid>
        <MapBalloon
          x={400}
          y={400}
          open
          imageSet={imageSet}
          caption="Paloma Orchards"
          align={alignments.RIGHT}
        />
      </DemoGrid>
    ))
  )
  .add(
    "Single Image",
    withInfo()(() => (
      <DemoGrid>
        <MapBalloon
          x={400}
          y={400}
          singleImage={"https://picsum.photos/180/?random"}
        />
      </DemoGrid>
    ))
  )
  .add(
    "size: SMALL",
    withInfo()(() => (
      <DemoGrid>
        <MapBalloon
          x={400}
          y={400}
          open
          imageSet={imageSet}
          caption="Paloma Orchards"
          size={balloonSizes.SMALL}
        />
      </DemoGrid>
    ))
  )
  .add(
    "Custom Icon",
    withInfo()(() => (
      <DemoGrid>
        <MapBalloon
          x={400}
          y={400}
          open
          imageSet={imageSet}
          caption="Paloma Orchards"
          iconClass="wg-place"
        />
      </DemoGrid>
    ))
  );
