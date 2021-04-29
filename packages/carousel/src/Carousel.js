import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import {
  Container,
  Wrapper,
  Content,
  ContentWrapper,
  Arrow,
  DotsContainer,
  Dot,
} from "./styledComponents/Carousel";

function Carousel({ imageSet, displayNumber, infiniteLoop }) {
  const [currentIndex, setCurrentIndex] = useState(
    infiniteLoop ? displayNumber : 0,
  );

  const [dotIndex, setDotIndex] = useState(0);

  const [totalOfCards, setTotalOfCards] = useState(imageSet.length);
  const [touchPosition, setTouchPosition] = useState(null);

  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && imageSet.length > displayNumber,
  );
  const [transitionEnabled, setTransitionEnabled] = useState(true);

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
          <div style={{ padding: 8 }}>
            <img
              src={imageSet[totalOfCards - 1 - index].image}
              alt={imageSet[totalOfCards - 1 - index].name}
              style={{ width: "100%" }}
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
          <div style={{ padding: 8 }}>
            <img
              src={imageSet[index].image}
              alt={imageSet[index].name}
              style={{ width: "100%" }}
            />
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
          <Arrow onClick={prevSlide} direction="left">
            &lt;
          </Arrow>
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
                <div style={{ padding: 8 }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            ))}
            {totalOfCards > displayNumber && isRepeating && renderExtraNext()}
          </Content>
        </ContentWrapper>
        {(isRepeating || currentIndex < totalOfCards - displayNumber) && (
          <Arrow onClick={nextSlide} direction="right">
            &gt;
          </Arrow>
        )}

        {isRepeating && (
          <DotsContainer>
            {imageSet.map((_, index) => (
              <Dot
                active={dotIndex === index}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </DotsContainer>
        )}
      </Wrapper>
    </Container>
  );
}

Carousel.propTypes = {
  imageSet: PropTypes.arrayOf(
    PropTypes.shape({ image: PropTypes.string, name: PropTypes.string }),
  ).isRequired,
  displayNumber: PropTypes.number,
  infiniteLoop: PropTypes.bool,
};
Carousel.defaultProps = {
  displayNumber: 3,
  infiniteLoop: true,
};

export default Carousel;
