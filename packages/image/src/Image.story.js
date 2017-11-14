import React from "react";
import { storiesOf } from "@storybook/react";

import thumbnailSizes from "./constants/thumbnailSizes";
import badgeSizes from "./constants/badgeSizes";
import imageTypes from "./constants/types";
import Image from ".";
import { withInfo } from "@storybook/addon-info";

const imgSrc =
  "https://sourcewhatsgood.com/assets/images/utility_images/gallery-third-about-a518a29f64.jpg";

storiesOf("Image", module)
  .add("default", () => <Image src={imgSrc} />)
  .add("thumbnail", () => <Image src={imgSrc} type={imageTypes.THUMBNAIL} />)
  .add("badge", () => <Image src={imgSrc} type={imageTypes.BADGE} />)
  .add(
    "thumbnail (extra small)",
    withInfo()(() => (
      <div>
        <Image
          src={imgSrc}
          type={imageTypes.THUMBNAIL}
          size={thumbnailSizes.EXTRA_SMALL}
        />
      </div>
    ))
  )
  .add(
    "thumbnail (small)",
    withInfo()(() => (
      <div>
        <Image
          src={imgSrc}
          type={imageTypes.THUMBNAIL}
          size={thumbnailSizes.SMALL}
        />
      </div>
    ))
  )
  .add(
    "thumbnail (medium)",
    withInfo()(() => (
      <div>
        <Image
          src={imgSrc}
          type={imageTypes.THUMBNAIL}
          size={thumbnailSizes.MEDIUM}
        />
      </div>
    ))
  )
  .add(
    "thumbnail (large)",
    withInfo()(() => (
      <div>
        <Image
          src={imgSrc}
          type={imageTypes.THUMBNAIL}
          size={thumbnailSizes.LARGE}
        />
      </div>
    ))
  )
  .add(
    "thumbnail (extra large)",
    withInfo()(() => (
      <div>
        <Image
          src={imgSrc}
          type={imageTypes.THUMBNAIL}
          size={thumbnailSizes.EXTRA_LARGE}
        />
      </div>
    ))
  )
  .add(
    "badge (extra small)",
    withInfo()(() => (
      <div>
        <Image
          src={imgSrc}
          type={imageTypes.BADGE}
          size={badgeSizes.EXTRA_SMALL}
        />
      </div>
    ))
  )
  .add(
    "badge (small)",
    withInfo()(() => (
      <div>
        <Image src={imgSrc} type={imageTypes.BADGE} size={badgeSizes.SMALL} />
      </div>
    ))
  )
  .add(
    "badge (medium)",
    withInfo()(() => (
      <div>
        <Image src={imgSrc} type={imageTypes.BADGE} size={badgeSizes.MEDIUM} />
      </div>
    ))
  )
  .add(
    "badge (large)",
    withInfo()(() => (
      <div>
        <Image src={imgSrc} type={imageTypes.BADGE} size={badgeSizes.LARGE} />
      </div>
    ))
  );
