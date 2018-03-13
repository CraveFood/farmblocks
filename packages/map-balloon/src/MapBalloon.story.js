import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import styled from "styled-components";

import MapBalloon, { alignments, balloonSizes } from ".";

const DemoGrid = styled.div`
  position: relative;
  width: 800px;
  height: 800px;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFElEQVR4AWMgEthTT+GoQnsiMAMA+G4Eb/fCw1gAAAAASUVORK5CYII=");
`;

const products = [
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
          products={products}
          farm="Paloma Orchards"
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
          products={products}
          farm="Paloma Orchards"
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
          products={products}
          farm="Paloma Orchards"
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
          products={products}
          farm="Paloma Orchards"
          align={alignments.RIGHT}
        />
      </DemoGrid>
    ))
  )
  .add(
    "Logo",
    withInfo()(() => (
      <DemoGrid>
        <MapBalloon
          x={400}
          y={400}
          logo={"http://via.placeholder.com/180x180"}
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
          products={products}
          farm="Paloma Orchards"
          size={balloonSizes.SMALL}
        />
      </DemoGrid>
    ))
  );
