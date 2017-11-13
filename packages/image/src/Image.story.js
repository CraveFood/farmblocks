import React from "react";
import { storiesOf } from "@storybook/react";

import thumbnailSizes from "./constants/thumbnailSizes";
import badgeSizes from "./constants/badgeSizes";
import imageTypes from "./constants/types";
import Image from ".";

storiesOf("Image", module)
  .add("default", () => <Image src="" />)
  .add("thumbnail", () => <Image src="" type={imageTypes.THUMBNAIL} />)
  .add("badge", () => <Image src="" type={imageTypes.BADGE} />)
  .add("thumbnails", () => (
    <ul>
      <li>
        <Image
          src=""
          type={imageTypes.THUMBNAIL}
          size={thumbnailSizes.EXTRA_SMALL}
        />
      </li>
      <li>
        <Image src="" type={imageTypes.THUMBNAIL} size={thumbnailSizes.SMALL} />
      </li>
      <li>
        <Image
          src=""
          type={imageTypes.THUMBNAIL}
          size={thumbnailSizes.MEDIUM}
        />
      </li>
      <li>
        <Image src="" type={imageTypes.THUMBNAIL} size={thumbnailSizes.LARGE} />
      </li>
      <li>
        <Image
          src=""
          type={imageTypes.THUMBNAIL}
          size={thumbnailSizes.EXTRA_LARGE}
        />
      </li>
    </ul>
  ))
  .add("badges", () => (
    <ul>
      <li>
        <Image src="" type={imageTypes.BADGE} size={badgeSizes.EXTRA_SMALL} />
      </li>
      <li>
        <Image src="" type={imageTypes.BADGE} size={badgeSizes.SMALL} />
      </li>
      <li>
        <Image src="" type={imageTypes.BADGE} size={badgeSizes.MEDIUM} />
      </li>
      <li>
        <Image src="" type={imageTypes.BADGE} size={badgeSizes.LARGE} />
      </li>
    </ul>
  ));
