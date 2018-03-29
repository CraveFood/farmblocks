import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";

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
    name: "Romaine Lettuce"
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
    "custom border radius",
    withInfo()(() => (
      <DemoGrid>
        <MapBalloon
          x={400}
          y={400}
          open
          singleImage="https://picsum.photos/180/?random"
          caption="Paloma Orchards"
          size={balloonSizes.SMALL}
          borderRadius="50%"
        />
      </DemoGrid>
    ))
  )
  .add(
    "Custom pin",
    withInfo()(() => (
      <DemoGrid>
        <MapBalloon
          x={400}
          y={400}
          open
          imageSet={imageSet}
          caption="Paloma Orchards"
          pinColor={colors.CORN}
          pinSize={40}
        />
      </DemoGrid>
    ))
  )
  .add(
    "Custom opacity",
    withInfo()(() => (
      <DemoGrid>
        <MapBalloon
          x={400}
          y={400}
          open
          imageSet={imageSet}
          caption="Paloma Orchards"
          pinColor={colors.CORN}
          pinSize={40}
          opacity={0.5}
        />
      </DemoGrid>
    ))
  );
