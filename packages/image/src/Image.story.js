import React from "react";
import { storiesOf } from "@storybook/react";

import thumbnailSizes from "./constants/thumbnailSizes";
import badgeSizes from "./constants/badgeSizes";
import fitModes from "./constants/fitModes";
import Image from ".";

const imgSrcs = {
  squared: "https://picsum.photos/512?image=66",
  horizontal: "https://picsum.photos/400/200?image=1",
  vertical: "https://picsum.photos/200/400?image=1011",
  small: "https://picsum.photos/56?image=111",
};

const RenderImage = ({
  src = imgSrcs.squared, // eslint-disable-line
  size = thumbnailSizes.X_LARGE, // eslint-disable-line
  ...props
}) => <Image src={src} size={size} {...props} />;

const Group = (props) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
    }}
    {...props}
  />
);

storiesOf("Image", module)
  .add("image size values", () => (
    <Group>
      <div style={{ padding: "16px 0 16px 0", fontWeight: "bold" }}>
        Badge sizes
      </div>
      <div style={{ display: "flex" }}>
        {Object.keys(badgeSizes)
          .reverse()
          .map((size) => (
            <div style={{ marginRight: "36px" }}>
              <div>{`${size} - ${badgeSizes[size]}px`}</div>
              <RenderImage size={badgeSizes[size]} badge />
            </div>
          ))}
      </div>
      <div style={{ padding: "16px 0 16px 0", fontWeight: "bold" }}>
        Thumbnail sizes
      </div>
      <div style={{ display: "flex" }}>
        {Object.keys(thumbnailSizes)
          .reverse()
          .map((size) => (
            <div style={{ marginRight: "36px" }}>
              <div>{`${size} - ${thumbnailSizes[size]}px`}</div>
              <RenderImage size={thumbnailSizes[size]} />
            </div>
          ))}
      </div>
    </Group>
  ))
  .add("with box shadow", () => (
    <Group>
      <div style={{ padding: "16px 0 16px 0", fontWeight: "bold" }}>
        Badge sizes
      </div>
      <div style={{ display: "flex" }}>
        {Object.keys(badgeSizes)
          .reverse()
          .map((size) => (
            <div style={{ marginRight: "36px" }}>
              <div>{`${size} - ${badgeSizes[size]}px`}</div>
              <RenderImage size={badgeSizes[size]} badge withBoxShadow />
            </div>
          ))}
      </div>
      <div style={{ padding: "16px 0 16px 0", fontWeight: "bold" }}>
        Thumbnail sizes
      </div>
      <div style={{ display: "flex" }}>
        {Object.keys(thumbnailSizes)
          .reverse()
          .map((size) => (
            <div style={{ marginRight: "36px" }}>
              <div>{`${size} - ${thumbnailSizes[size]}px`}</div>
              <RenderImage size={thumbnailSizes[size]} withBoxShadow />
            </div>
          ))}
      </div>
    </Group>
  ))
  .add("image fit values", () => (
    <Group>
      {Object.keys(imgSrcs).map((src) => (
        <>
          <div style={{ padding: "16px 0 16px 0", fontWeight: "bold" }}>
            {src} image
          </div>
          <div style={{ display: "flex" }}>
            {Object.keys(fitModes).map((mode) => (
              <div style={{ paddingRight: "28px" }}>
                <div>{`${fitModes[mode]}`}</div>
                <RenderImage fit={fitModes[mode]} src={imgSrcs[src]} />
              </div>
            ))}
          </div>
        </>
      ))}
    </Group>
  ))
  .add("custom dimensions", () => {
    const width = 800;
    const height = 400;
    return (
      <>
        <div>{`width - ${width}px / height - ${height}px`}</div>
        <RenderImage width={width} height={height} />
      </>
    );
  })
  .add("custom borderRadius", () => {
    const borderRadius = "35px";
    return (
      <>
        <div>{`border-radius - ${borderRadius}`}</div>
        <RenderImage borderRadius={borderRadius} />
      </>
    );
  })
  .add("custom css", () => (
    <RenderImage size={300} css={{ opacity: 0.5, border: "dotted 5px red" }} />
  ));
