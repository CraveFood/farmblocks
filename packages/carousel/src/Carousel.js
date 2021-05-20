import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Wrapper,
  Content,
  ContentWrapper,
} from "./styledComponents/Carousel";
import Slide from "./components/Slide";
import ArrowButton from "./components/ArrowButton";
import Dots from "./components/Dots";
import useResizeWindow from "./hooks/useResizeWindow";
import useTouch from "./hooks/useTouch";

function Carousel({ slides, slidesToShow, infiniteLoop, breakpoints }) {
  const [displayNumber, setDisplayNumber] = useState(
    slidesToShow < slides.length ? slidesToShow : slides.length,
  );

  const [dotIndex, setDotIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(
    infiniteLoop && displayNumber < slides.length ? displayNumber : 0,
  );

  useResizeWindow({
    displayNumber,
    setDisplayNumber,
    setCurrentIndex,
    dotIndex,
    numberOfCards: slides.length,
    slidesToShow,
    breakpoints,
    infiniteLoop,
  });

  const totalOfCards = slides.length;
  const isRepeating = infiniteLoop && slides.length > displayNumber;
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === displayNumber || currentIndex === totalOfCards) {
        setTransitionEnabled(true);
      }
    }
  }, [currentIndex, isRepeating, displayNumber, totalOfCards]);

  function handleDotClick(index) {
    setDotIndex(index);
    setCurrentIndex(index + displayNumber);
  }

  function nextSlide() {
    if (dotIndex < totalOfCards - 1) setDotIndex((prevState) => prevState + 1);
    else if (isRepeating && dotIndex === totalOfCards - 1) {
      setDotIndex(0);
    }

    if (isRepeating || currentIndex < totalOfCards - displayNumber) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  }

  function prevSlide() {
    if (dotIndex === 0) setDotIndex(totalOfCards - 1);
    else setDotIndex((prevState) => prevState - 1);

    if (isRepeating || currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  }

  const { handleTouchStart, handleTouchMove } = useTouch({
    nextSlide,
    prevSlide,
  });

  function handleTransitionEnd() {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false);
        setCurrentIndex(totalOfCards);
      } else if (currentIndex === totalOfCards + displayNumber) {
        setTransitionEnabled(false);
        setCurrentIndex(displayNumber);
      }
    }
  }

  function renderExtraPrev() {
    const output = [];
    for (let index = 0; index < displayNumber; index += 1) {
      output.push(
        <Slide key={slides[totalOfCards - 1 - index].id}>
          {slides[totalOfCards - 1 - index].content}
        </Slide>,
      );
    }
    output.reverse();
    return output;
  }

  function renderExtraNext() {
    const output = [];
    for (let index = 0; index < displayNumber; index += 1) {
      output.push(
        <Slide key={slides[index].id}>{slides[index].content}</Slide>,
      );
    }
    return output;
  }

  return (
    <Container>
      <Wrapper>
        {(isRepeating || currentIndex > 0) && (
          <ArrowButton onClick={prevSlide} direction="left" />
        )}
        <ContentWrapper
          onTouchStart={(event) => handleTouchStart(event)}
          onTouchMove={(event) => handleTouchMove(event)}
        >
          <Content
            currentIndex={currentIndex}
            displayNumber={displayNumber}
            transitionEnabled={transitionEnabled}
            onTransitionEnd={handleTransitionEnd}
          >
            {totalOfCards > displayNumber && isRepeating && renderExtraPrev()}
            {slides.map((item) => (
              <Slide key={item.id}>{item.content}</Slide>
            ))}
            {totalOfCards > displayNumber && isRepeating && renderExtraNext()}
          </Content>
        </ContentWrapper>
        {(isRepeating || currentIndex < totalOfCards - displayNumber) && (
          <ArrowButton
            data-testid="right-arrow"
            onClick={nextSlide}
            direction="right"
          />
        )}
      </Wrapper>
      {isRepeating && (
        <Dots
          slides={slides}
          handleClick={handleDotClick}
          selectedDot={dotIndex}
        />
      )}
    </Container>
  );
}

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      content: PropTypes.node,
    }),
  ).isRequired,
  slidesToShow: PropTypes.number,
  breakpoints: PropTypes.arrayOf(PropTypes.number),
  infiniteLoop: PropTypes.bool,
};
Carousel.defaultProps = {
  slidesToShow: 3,
  breakpoints: [1, 2],
  infiniteLoop: false,
};

export default Carousel;
