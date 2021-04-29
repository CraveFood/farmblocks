import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Wrapper,
  Content,
  ContentWrapper,
} from "./styledComponents/Carousel";

import ArrowButton from "./components/ArrowButton";
import Dots from "./components/Dots";

const getWidth = () => window.innerWidth;

function Carousel({ imageSet, slidesToShow, infiniteLoop }) {
  const [displayNumber, setDisplayNumber] = useState(
    slidesToShow < imageSet.length ? slidesToShow : imageSet.length,
  );

  const [dotIndex, setDotIndex] = useState(0);

  const [totalOfCards, setTotalOfCards] = useState(imageSet.length);
  const [touchPosition, setTouchPosition] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(
    infiniteLoop && displayNumber < imageSet.length ? displayNumber : 0,
  );

  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && imageSet.length > displayNumber,
  );
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const [screendWidth, setScreenWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setScreenWidth(window.innerWidth);
  }

  function handleResize() {
    const screenSize = getWidth();
    if (screenSize < 768) {
      setDisplayNumber(1);
      setCurrentIndex(dotIndex + 1 < imageSet.length ? dotIndex + 1 : 0);
    } else if (displayNumber < imageSet.length) {
      if (screenSize < 1200) {
        setDisplayNumber(2);
        setCurrentIndex(imageSet.length > 2 ? dotIndex + 2 : 0);
      } else if (slidesToShow > 2 && imageSet.length >= slidesToShow) {
        setDisplayNumber(slidesToShow);
        setCurrentIndex(dotIndex + slidesToShow);
      } else {
        setDisplayNumber(2);
        setCurrentIndex(dotIndex + 2);
      }
    }
  }

  useEffect(() => {
    handleResize();
  }, [screendWidth]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    setTotalOfCards(imageSet.length);
    setIsRepeating(infiniteLoop && imageSet.length > displayNumber);
  }, [imageSet, displayNumber, infiniteLoop]);

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

  function handleTouchStart(event) {
    const touchDown = event.touches[0].clientX;
    setTouchPosition(touchDown);
  }

  function handleTouchMove(event) {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }
    const currentTouch = event.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      nextSlide();
    }

    if (diff < -5) {
      prevSlide();
    }
    setTouchPosition(null);
  }

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
        <div key={imageSet[totalOfCards - 1 - index].image}>
          <div style={{ padding: 10 }}>
            <img
              src={imageSet[totalOfCards - 1 - index].image}
              alt={imageSet[totalOfCards - 1 - index].name}
            />
          </div>
        </div>,
      );
    }
    output.reverse();
    return output;
  }

  function renderExtraNext() {
    const output = [];
    for (let index = 0; index < displayNumber; index += 1) {
      output.push(
        <div key={imageSet[index].image}>
          <div style={{ padding: 10 }}>
            <img src={imageSet[index].image} alt={imageSet[index].name} />
          </div>
        </div>,
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
            {imageSet.map((item) => (
              <div key={item.image}>
                <div style={{ padding: 10 }}>
                  <img src={item.image} alt={item.name} />
                </div>
              </div>
            ))}
            {totalOfCards > displayNumber && isRepeating && renderExtraNext()}
          </Content>
        </ContentWrapper>
        {(isRepeating || currentIndex < totalOfCards - displayNumber) && (
          <ArrowButton onClick={nextSlide} direction="right" />
        )}
      </Wrapper>
      {isRepeating && (
        <Dots
          imageSet={imageSet}
          handleClick={handleDotClick}
          selectedDot={dotIndex}
        />
      )}
    </Container>
  );
}

Carousel.propTypes = {
  imageSet: PropTypes.arrayOf(
    PropTypes.shape({ image: PropTypes.string, name: PropTypes.string }),
  ).isRequired,
  slidesToShow: PropTypes.number,
  infiniteLoop: PropTypes.bool,
};
Carousel.defaultProps = {
  slidesToShow: 3,
  infiniteLoop: true,
};

export default Carousel;
