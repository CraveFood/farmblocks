import React from "react";
import { storiesOf } from "@storybook/react";

import thumbnailSizes from "./constants/thumbnailSizes";
import badgeSizes from "./constants/badgeSizes";
import fitModes from "./constants/fitModes";
import Image from ".";

const imgSrc = "https://picsum.photos/512";

storiesOf("Image", module)
  .add("default", () => <Image src={imgSrc} />)
  .add("thumbnail", () => <Image src={imgSrc} />)
  .add("custom dimensions and border", () => (
    <Image
      src={imgSrc}
      width="800px"
      height="400px"
      border={{
        radius: "16px",
        width: "4px",
        color: "rgba(255, 255, 255, 0.56)",
      }}
    />
  ))
  .add("badge", () => <Image src={imgSrc} badge />)
  .add("thumbnail (small)", () => (
    <div>
      <Image src={imgSrc} size={thumbnailSizes.SMALL} />
    </div>
  ))
  .add("thumbnail (medium)", () => (
    <div>
      <Image src={imgSrc} size={thumbnailSizes.MEDIUM} />
    </div>
  ))
  .add("thumbnail (large)", () => (
    <div>
      <Image src={imgSrc} size={thumbnailSizes.LARGE} />
    </div>
  ))
  .add("thumbnail (extra large)", () => (
    <div>
      <Image src={imgSrc} size={thumbnailSizes.X_LARGE} />
    </div>
  ))
  .add("thumbnail (huge)", () => (
    <div>
      <Image src={imgSrc} size={thumbnailSizes.HUGE} />
    </div>
  ))
  .add("badge (extra small)", () => (
    <div>
      <Image src={imgSrc} badge size={badgeSizes.X_SMALL} />
    </div>
  ))
  .add("badge (small)", () => (
    <div>
      <Image src={imgSrc} badge size={badgeSizes.SMALL} />
    </div>
  ))
  .add("badge (medium)", () => (
    <div>
      <Image src={imgSrc} badge size={badgeSizes.MEDIUM} />
    </div>
  ))
  .add("badge (large)", () => (
    <div>
      <Image src={imgSrc} badge size={badgeSizes.LARGE} />
    </div>
  ))
  .add("fit (cover)", () => (
    <div>
      <Image src={imgSrc} fit={fitModes.COVER} />
    </div>
  ))
  .add("fit (contain)", () => (
    <div>
      <Image src={imgSrc} fit={fitModes.CONTAIN} />
    </div>
  ))
  .add("custom css", () => (
    <Image
      src={imgSrc}
      size={300}
      css={{ opacity: 0.5, border: "dotted 5px red" }}
    />
  ));
