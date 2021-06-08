import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { SmChevronRight, SmChevronLeft } from "@crave/farmblocks-icon";
import {
  Container,
  Wrapper,
  Content,
  ButtonContainer,
  ArrowButton,
} from "./styledComponents/Carousel";

import Slide from "./components/Slide";

import Dots from "./components/Dots";
import useResizeWindow from "./hooks/useResizeWindow";
import useTouch from "./hooks/useTouch";

function Carousel({
  qtyOfSlidesPerSet,
  infiniteLoop,
  breakpoints,
  children,
  style,
}) {
  const [displayNumber, setDisplayNumber] = useState(
    qtyOfSlidesPerSet < children.length ? qtyOfSlidesPerSet : children.length,
  );

  const [isCalled, setIsCalled] = useState(false);

  function preventDoubleClick(functionToBeCalled, interval = 300) {
    let timer = 0;
    if (!isCalled) {
      setIsCalled(true);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsCalled(false);
      }, interval);
      return functionToBeCalled();
    }
    return false;
  }

  const [dotIndex, setDotIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(
    infiniteLoop && displayNumber < children.length ? displayNumber : 0,
  );

  if (breakpoints?.length)
    useResizeWindow({
      setDisplayNumber,
      setCurrentIndex,
      dotIndex,
      numberOfCards: children.length,
      breakpoints,
      qtyOfSlidesPerSet,
      infiniteLoop,
    });

  const totalOfCards = children.length;
  const isRepeating = useMemo(
    () => infiniteLoop && children.length > displayNumber,
    [children, infiniteLoop, displayNumber],
  );

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
    const result = totalOfCards - displayNumber;

    if (isRepeating || currentIndex < result) {
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

  const renderExtraPrev = useMemo(() => {
    const output = [];
    for (let index = 0; index < displayNumber; index += 1) {
      output.push(children[totalOfCards - 1 - index]);
    }
    output.reverse();
    return output;
  }, [children, totalOfCards, displayNumber]);

  const renderExtraNext = useMemo(() => {
    const output = [];
    for (let index = 0; index < displayNumber; index += 1) {
      output.push(children[index]);
    }
    return output;
  }, [children, displayNumber]);

  const showLeftArrow = isRepeating || currentIndex > 0;
  const showRightArrow =
    isRepeating || currentIndex < totalOfCards - displayNumber;
  const renderExtras = totalOfCards > displayNumber && isRepeating;

  return (
    <Container style={style}>
      <Wrapper>
        <ButtonContainer direction="left">
          {showLeftArrow && (
            <ArrowButton
              data-testid="left-arrow"
              icon={<SmChevronLeft size={24} />}
              onClick={() => preventDoubleClick(prevSlide)}
            />
          )}
        </ButtonContainer>
        <div style={{ overflow: "hidden" }}>
          <Content
            currentIndex={currentIndex}
            displayNumber={displayNumber}
            transitionEnabled={transitionEnabled}
            onTransitionEnd={handleTransitionEnd}
            onTouchStart={(event) => handleTouchStart(event)}
            onTouchMove={(event) => handleTouchMove(event)}
          >
            {renderExtras && renderExtraPrev}
            {children}
            {renderExtras && renderExtraNext}
          </Content>
        </div>
        <ButtonContainer direction="right">
          {showRightArrow && (
            <ArrowButton
              data-testid="right-arrow"
              icon={<SmChevronRight size={24} />}
              onClick={() => preventDoubleClick(nextSlide)}
            />
          )}
        </ButtonContainer>
      </Wrapper>
      {isRepeating && (
        <Dots
          slides={children}
          handleClick={handleDotClick}
          selectedDot={dotIndex}
        />
      )}
    </Container>
  );
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  qtyOfSlidesPerSet: PropTypes.number,
  breakpoints: PropTypes.arrayOf(
    PropTypes.shape({
      width: PropTypes.number,
      slidesToShow: PropTypes.number,
    }),
  ),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  infiniteLoop: PropTypes.bool,
};
Carousel.defaultProps = {
  infiniteLoop: false,
  qtyOfSlidesPerSet: 1,
};

export { Carousel, Slide };
