import React from "react";
import { storiesOf } from "@storybook/react";

import { Carousel, Slide } from ".";

const imageSet = [
  <img src="https://picsum.photos/640/?image=1080" alt="Organic Pepper" />,
  <img src="https://picsum.photos/640/?image=824" alt="Tomato" />,
  <img src="https://picsum.photos/640/?image=889" alt="Grapefruit" />,
  <img src="https://picsum.photos/640/?image=674" alt="Tomato" />,
  <img src="https://picsum.photos/640/?image=292" alt="Tomato" />,
  <img src="https://picsum.photos/640/?image=517" alt="Tomato" />,
  <img src="https://picsum.photos/640/?image=627" alt="Tomato" />,
  <img src="https://picsum.photos/640/?image=75" alt="Tomato" />,
  <img src="https://picsum.photos/640/?image=766" alt="Romaine Lettuce" />,
];

storiesOf("Carousel", module)
  .add("1 photo", () => (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 64,
      }}
    >
      <Carousel qtyOfSlidesPerSet={1}>
        <Slide>{imageSet[0]}</Slide>
      </Carousel>
    </div>
  ))

  .add("2 photos", () => (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 64,
      }}
    >
      <Carousel qtyOfSlidesPerSet={2}>
        <Slide>{imageSet[0]}</Slide>
        <Slide>{imageSet[1]}</Slide>
      </Carousel>
    </div>
  ))

  .add("all photos", () => (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 64,
      }}
    >
      <Carousel infiniteLoop={false} qtyOfSlidesPerSet={4}>
        {imageSet.map((value) => (
          <Slide>{value}</Slide>
        ))}
      </Carousel>
    </div>
  ))
  .add("infinite loop", () => (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 64,
      }}
    >
      <Carousel infiniteLoop qtyOfSlidesPerSet={[3, 2, 1]}>
        {imageSet.map((value) => (
          <Slide>{value}</Slide>
        ))}
      </Carousel>
    </div>
  ));
