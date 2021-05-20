import React from "react";
import { storiesOf } from "@storybook/react";

import Carousel from ".";

const imageSet = [
  {
    id: "organic-pepper",
    content: (
      <img src="https://picsum.photos/640/?image=1080" alt="Organic Pepper" />
    ),
  },
  {
    id: "tomato",
    content: <img src="https://picsum.photos/640/?image=824" alt="Tomato" />,
  },

  {
    id: "grapefruit",
    content: (
      <img src="https://picsum.photos/640/?image=889" alt="Grapefruit" />
    ),
  },
  {
    id: "tomato-2",
    content: <img src="https://picsum.photos/640/?image=674" alt="Tomato" />,
  },
  {
    id: "tomato-3",
    content: <img src="https://picsum.photos/640/?image=292" alt="Tomato" />,
  },
  {
    id: "tomato-4",
    content: <img src="https://picsum.photos/640/?image=517" alt="Tomato" />,
  },
  {
    id: "tomato-5",
    content: <img src="https://picsum.photos/640/?image=627" alt="Tomato" />,
  },
  {
    id: "tomato-6",
    content: <img src="https://picsum.photos/640/?image=75" alt="Tomato" />,
  },
  {
    id: "romaine-lettuce",
    content: (
      <img src="https://picsum.photos/640/?image=766" alt="Romaine Lettuce" />
    ),
  },
];

storiesOf("Carousel", module)
  .add("1 photo", () => (
    <Carousel
      slides={imageSet.slice(0, 1)}
      infiniteLoop={false}
      slidesToShow={1}
    />
  ))

  .add("2 photos", () => (
    <Carousel
      slides={imageSet.slice(0, 2)}
      infiniteLoop={false}
      slidesToShow={2}
    />
  ))

  .add("all photos", () => (
    <Carousel slides={imageSet} infiniteLoop={false} slidesToShow={3} />
  ))
  .add("infinite loop", () => (
    <Carousel slides={imageSet} infiniteLoop slidesToShow={3} />
  ));
