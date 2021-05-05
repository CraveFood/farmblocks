import React from "react";
import { storiesOf } from "@storybook/react";

import Carousel from ".";

const imageSet = [
  {
    image: "https://picsum.photos/640/?image=1080",
    name: "Organic Pepper",
  },
  {
    image: "https://picsum.photos/640/?image=824",
    name: "Tomato",
  },
  {
    image: "https://picsum.photos/640/?image=889",
    name: "Grapefruit",
  },
  {
    image: "https://picsum.photos/640/?image=674",
    name: "Tomato",
  },
  {
    image: "https://picsum.photos/640/?image=292",
    name: "Tomato",
  },
  {
    image: "https://picsum.photos/640/?image=517",
    name: "Tomato",
  },
  {
    image: "https://picsum.photos/640/?image=627",
    name: "Tomato",
  },
  {
    image: "https://picsum.photos/640/?image=75",
    name: "Tomato",
  },
  {
    image: "https://picsum.photos/640/?image=766",
    name: "Romaine Lettuce",
  },
];

storiesOf("Carousel", module)
  .add("1 photo", () => (
    <Carousel
      imageSet={imageSet.slice(0, 1)}
      infiniteLoop={false}
      slidesToShow={1}
    />
  ))

  .add("2 photos", () => (
    <Carousel
      imageSet={imageSet.slice(0, 2)}
      infiniteLoop={false}
      slidesToShow={2}
    />
  ))

  .add("all photos", () => (
    <Carousel imageSet={imageSet} infiniteLoop={false} slidesToShow={3} />
  ))
  .add("infinite loop", () => (
    <Carousel imageSet={imageSet} infiniteLoop slidesToShow={3} />
  ));
