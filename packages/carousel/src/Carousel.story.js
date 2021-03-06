import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

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
  .add("1 photo", () => <Carousel imageSet={imageSet.slice(0, 1)} />)

  .add("1 photo with onEnd", () => (
    <Carousel onEnd={action("slideshow end")} imageSet={imageSet.slice(0, 1)} />
  ))

  .add("2 photos", () => <Carousel imageSet={imageSet.slice(0, 2)} />)

  .add("all photos", () => <Carousel imageSet={imageSet} />)
  .add("no scale", () => <Carousel imageSet={imageSet} scale={false} />)

  .add("all photos with onChange and onEnd", () => (
    <Carousel
      onChange={action("photo changed")}
      onEnd={action("end")}
      imageSet={imageSet}
    />
  ))
  .add("partial custom config", () => (
    <Carousel
      itemConfig={{
        displayTime: 6.5,
        transitionTime: 2.5,
      }}
      imageSet={imageSet}
    />
  ))
  .add("custom config", () => (
    <Carousel
      itemConfig={{
        width: 200,
        height: 200,
        margin: 2,
        displayTime: 2,
        transitionTime: 0.5,
        border: { radius: "100%", width: "4px", color: "green" },
      }}
      imageSet={imageSet}
    />
  ))
  .add("extended style", () => (
    <Carousel
      css="
        background: lavender;
        .image {
          background-size: 50%;
          background-repeat: repeat;
        }
        .itemLabel {
          color: red;
        }
      "
      imageSet={imageSet}
    />
  ));
