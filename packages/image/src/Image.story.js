import React from "react";
import { storiesOf } from "@storybook/react";

import thumbnailSizes from "./constants/thumbnailSizes";
import badgeSizes from "./constants/badgeSizes";
import fitModes from "./constants/fitModes";
import Image from ".";
import { withInfo } from "@storybook/addon-info";

const imgSrc =
  "https://sourcewhatsgood.com/assets/images/utility_images/gallery-third-about-a518a29f64.jpg";

storiesOf("Image", module)
  .add("default", withInfo()(() => <Image src={imgSrc} />))
  .add("thumbnail", withInfo()(() => <Image src={imgSrc} />))
  .add("badge", withInfo()(() => <Image src={imgSrc} badge />))
  .add(
    "thumbnail (small)",
    withInfo()(() => (
      <div>
        <Image src={imgSrc} size={thumbnailSizes.SMALL} />
      </div>
    ))
  )
  .add(
    "thumbnail (medium)",
    withInfo()(() => (
      <div>
        <Image src={imgSrc} size={thumbnailSizes.MEDIUM} />
      </div>
    ))
  )
  .add(
    "thumbnail (large)",
    withInfo()(() => (
      <div>
        <Image src={imgSrc} size={thumbnailSizes.LARGE} />
      </div>
    ))
  )
  .add(
    "thumbnail (extra large)",
    withInfo()(() => (
      <div>
        <Image src={imgSrc} size={thumbnailSizes.X_LARGE} />
      </div>
    ))
  )
  .add(
    "thumbnail (huge)",
    withInfo()(() => (
      <div>
        <Image src={imgSrc} size={thumbnailSizes.HUGE} />
      </div>
    ))
  )
  .add(
    "badge (extra small)",
    withInfo()(() => (
      <div>
        <Image src={imgSrc} badge size={badgeSizes.X_SMALL} />
      </div>
    ))
  )
  .add(
    "badge (small)",
    withInfo()(() => (
      <div>
        <Image src={imgSrc} badge size={badgeSizes.SMALL} />
      </div>
    ))
  )
  .add(
    "badge (medium)",
    withInfo()(() => (
      <div>
        <Image src={imgSrc} badge size={badgeSizes.MEDIUM} />
      </div>
    ))
  )
  .add(
    "badge (large)",
    withInfo()(() => (
      <div>
        <Image src={imgSrc} badge size={badgeSizes.LARGE} />
      </div>
    ))
  )
  .add(
    "fit (cover)",
    withInfo()(() => (
      <div>
        <Image src={imgSrc} fit={fitModes.COVER} />
      </div>
    ))
  )
  .add(
    "fit (contain)",
    withInfo()(() => (
      <div>
        <Image src={imgSrc} fit={fitModes.CONTAIN} />
      </div>
    ))
  );
