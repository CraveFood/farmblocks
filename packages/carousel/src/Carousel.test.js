import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Carousel, Slide } from ".";

describe("Carousel", () => {
  const imageSet = [
    <img src="https://picsum.photos/640/?image=1080" alt="Organic Pepper" />,
    <img src="https://picsum.photos/640/?image=824" alt="Tomato" />,
    <img src="https://picsum.photos/640/?image=889" alt="Grapefruit" />,
  ];

  const makeSut = ({ ...props }) => {
    render(
      <Carousel {...props}>
        {imageSet.map((value) => (
          <Slide>{value}</Slide>
        ))}
      </Carousel>,
    );
  };

  it("should render component without arrows and dots", () => {
    const initialValues = {
      qtyOfSlidesPerSet: imageSet.length,
    };
    makeSut(initialValues);

    expect(screen.queryByTestId("left-arrow")).not.toBeInTheDocument();
    expect(screen.queryByTestId("right-arrow")).not.toBeInTheDocument();
    expect(screen.queryByTestId("dots-container")).not.toBeInTheDocument();
  });
  it("should render component with arrows", () => {
    const initialValues = {
      qtyOfSlidesPerSet: imageSet.length - 1,
    };
    makeSut(initialValues);

    // check if proper elements are renderer
    const rightArrow = screen.queryByTestId("right-arrow");

    expect(screen.queryByTestId("left-arrow")).not.toBeInTheDocument();
    expect(screen.queryByTestId("dots-container")).not.toBeInTheDocument();
    expect(rightArrow).toBeInTheDocument();

    // click o right arrow
    userEvent.click(rightArrow);

    // check if proper elements are renderer
    expect(rightArrow).not.toBeInTheDocument();
    expect(screen.queryByTestId("left-arrow")).toBeInTheDocument();
  });

  it("should render component with infinite scroll", () => {
    const initialValues = {
      qtyOfSlidesPerSet: 2,
      infiniteLoop: true,
    };
    makeSut(initialValues);

    // check if proper elements are renderer
    const rightArrow = screen.queryByTestId("right-arrow");
    const leftArrow = screen.queryByTestId("left-arrow");
    const dotsContainer = screen.queryByTestId("dots-container");

    expect(dotsContainer.children[0].classList.contains("active")).toBe(true);
    expect(rightArrow).toBeInTheDocument();
    expect(leftArrow).toBeInTheDocument();

    // click on last Dot
    userEvent.click(dotsContainer.children[2]);

    // check if active dot has changed and arrows are still in screen
    expect(rightArrow).toBeInTheDocument();
    expect(leftArrow).toBeInTheDocument();
    expect(dotsContainer.children[0].classList.contains("active")).toBe(false);
    expect(dotsContainer.children[2].classList.contains("active")).toBe(true);

    // click on next
    userEvent.click(rightArrow);

    // check if active dot has go back to first position
    expect(rightArrow).toBeInTheDocument();
    expect(leftArrow).toBeInTheDocument();
    expect(dotsContainer.children[2].classList.contains("active")).toBe(false);
    expect(dotsContainer.children[0].classList.contains("active")).toBe(true);
  });
});
