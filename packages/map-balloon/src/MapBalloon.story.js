import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";

import MapBalloon, { alignments } from ".";

const bgImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFElEQVR4AWMgEthTT+GoQnsiMAMA+G4Eb/fCw1gAAAAASUVORK5CYII=";
const StyledDemoGrid = styled.div`
  position: relative;
  width: 800px;
  height: 800px;
  background: #ccc url(${bgImage});
`;

const DemoGrid = props => <StyledDemoGrid {...props} />;

const imageSet = [
  {
    image: "https://picsum.photos/640/?random",
    name: "Romaine Lettuce"
  }
];

storiesOf("Map Balloon", module)
  .add("Default", () => (
    <DemoGrid>
      <MapBalloon
        x={400}
        y={400}
        imageSet={imageSet}
        caption="Paloma Orchards"
      />
    </DemoGrid>
  ))
  .add("Open Balloon", () => (
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
  .add("Animated", () => {
    class AlternateOpen extends React.Component {
      state = { open: true };
      componentDidMount() {
        this.interval = window.setInterval(
          () => this.setState(prevState => ({ open: !prevState.open })),
          2000
        );
      }
      componentWillUnmount = () => {
        window.clearInterval(this.interval);
      };

      render() {
        return (
          <DemoGrid>
            <MapBalloon
              x={400}
              y={400}
              open={this.state.open}
              imageSet={imageSet}
              caption="Paloma Orchards"
              animated
            />
          </DemoGrid>
        );
      }
    }
    return <AlternateOpen />;
  })
  .add("Open Balloon at Right", () => (
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
  .add("Single Image", () => (
    <DemoGrid>
      <MapBalloon
        x={400}
        y={400}
        singleImage={"https://picsum.photos/180/?random"}
      />
    </DemoGrid>
  ))
  .add("custom sizes", () => (
    <DemoGrid>
      <MapBalloon
        x={400}
        y={400}
        open
        imageSet={imageSet}
        caption="Paloma Orchards"
        balloonSize={350}
        captionSize={30}
        imageTextSize={30}
      />
    </DemoGrid>
  ))
  .add("custom border radius", () => (
    <DemoGrid>
      <MapBalloon
        x={400}
        y={400}
        open
        singleImage="https://picsum.photos/180/?random"
        caption="Paloma Orchards"
        borderRadius="50%"
      />
    </DemoGrid>
  ))
  .add("Custom pin", () => (
    <DemoGrid>
      <MapBalloon
        x={400}
        y={400}
        open
        imageSet={imageSet}
        caption="Paloma Orchards"
        pinColor="black"
        pinSize={30}
      />
    </DemoGrid>
  ))
  .add("Custom opacity", () => (
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
  .add("imageSet without name", () => (
    <DemoGrid>
      <MapBalloon
        x={400}
        y={400}
        open
        imageSet={[{ image: "https://picsum.photos/640/?random" }]}
        caption="Paloma Orchards"
      />
    </DemoGrid>
  ))
  .add("Interactive", () => (
    <DemoGrid>
      <MapBalloon
        onPinClick={action("onPinClick")}
        onBalloonClick={action("onBalloonClick")}
        value="paloma-orchards"
        pinColor="FireBrick"
        pinHighlightColor="FireBrick"
        x={400}
        y={400}
        imageSet={imageSet}
        caption="Paloma Orchards"
      />
    </DemoGrid>
  ))
  .add("Interactive open", () => (
    <DemoGrid>
      <MapBalloon
        open
        onPinClick={action("onPinClick")}
        onBalloonClick={action("onBalloonClick")}
        value="paloma-orchards"
        pinColor="FireBrick"
        x={400}
        y={400}
        imageSet={imageSet}
        caption="Paloma Orchards"
      />
    </DemoGrid>
  ))
  .add(
    "Interactive toggle",
    () => {
      class ToggleOpen extends React.Component {
        state = { open: false };
        handlePinClick = () =>
          this.setState(prevState => ({ open: !prevState.open }));
        render() {
          return (
            <MapBalloon
              open={this.state.open}
              onPinClick={this.handlePinClick}
              onBalloonClick={action("onBalloonClick")}
              value="paloma-orchards"
              pinColor="DarkBlue"
              pinHighlightColor="DodgerBlue"
              animated
              x={400}
              y={400}
              imageSet={imageSet}
              caption="Paloma Orchards"
            />
          );
        }
      }
      return (
        <DemoGrid>
          <ToggleOpen />
        </DemoGrid>
      );
    },
    {
      info: `MapBalloon is a stateless component, it won't open automatically on pin click. This story is just for animation tests.`
    }
  );
