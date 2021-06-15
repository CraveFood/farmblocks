import React from "react";
import { storiesOf } from "@storybook/react";

import { MdArrowLeft, MdArrowRight } from "@crave/farmblocks-icon";

import { Carousel, Slide, useResizeWindow } from ".";

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

const leftButtonStyle = {
  icon: <MdArrowLeft size={22} />,
  style: {
    borderRadius: "0px",
  },
};
const rightButtonStyle = {
  icon: <MdArrowRight size={22} />,
  style: {
    borderRadius: "0px",
  },
};

storiesOf("Carousel", module)
  .add("1 photo", () => (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 64,
      }}
    >
      <Carousel>
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

  .add("all photos", () => {
    const AllPhotos = () => {
      const { displayNumber } = useResizeWindow({
        breakpoints: [
          {
            width: 768,
            slidesToShow: 1,
          },
          {
            width: 1200,
            slidesToShow: 3,
          },
          {
            width: 1000,
            slidesToShow: 2,
          },
        ],
        qtyOfSlidesPerSet: 4,
      });
      return (
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 64,
          }}
        >
          <Carousel qtyOfSlidesPerSet={displayNumber}>
            {imageSet.map((value) => (
              <Slide>{value}</Slide>
            ))}
          </Carousel>
        </div>
      );
    };

    return <AllPhotos />;
  })
  .add("infinite loop", () => {
    const InfinitLoop = () => {
      const { displayNumber } = useResizeWindow({
        breakpoints: [
          {
            width: 768,
            slidesToShow: 1,
          },
          {
            width: 1200,
            slidesToShow: 2,
          },
        ],
        infiniteLoop: true,
        qtyOfSlidesPerSet: 3,
        numberOfCards: imageSet.length,
        dotIndex: 0,
      });
      return (
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 64,
          }}
        >
          <Carousel infiniteLoop qtyOfSlidesPerSet={displayNumber}>
            {imageSet.map((value) => (
              <Slide>{value}</Slide>
            ))}
          </Carousel>
        </div>
      );
    };

    return <InfinitLoop />;
  })
  .add("Custom carousel", () => (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 64,
        width: 800,
        height: 800,
      }}
    >
      <Carousel
        infiniteLoop
        qtyOfSlidesPerSet={2}
        leftButtonProps={leftButtonStyle}
        rightButtonProps={rightButtonStyle}
      >
        {imageSet.map((value) => (
          <Slide borderRadius={500}>{value}</Slide>
        ))}
      </Carousel>
    </div>
  ));
