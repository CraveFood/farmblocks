import * as React from "react";
import PropTypes from "prop-types";
import values from "object.values";
import Text, { fontTypes } from "@crave/farmblocks-text";
import { colors, fontSizes } from "@crave/farmblocks-theme";
import { CSSTransition } from "react-transition-group";

import alignments from "./constants/alignments";
import Wrapper from "./styledComponents/Wrapper";
import Pin from "./styledComponents/Pin";
import Balloon, { Caption } from "./styledComponents/Balloon";
import ImageSet, { imageSetPropType } from "./ImageSet";
import SingleImage from "./styledComponents/SingleImage";

const MapBalloon = ({
  x,
  y,
  open,
  align,
  imageSet,
  caption,
  singleImage,
  animated,
  borderRadius,
  pinColor,
  pinHighlightColor,
  pinSize,
  opacity,
  balloonSize,
  captionSize,
  imageTextSize,
  value,
  onPinClick,
  onBalloonClick,
  className,
}) => {
  const interactivePin = !!onPinClick;
  const interactiveBalloon = !!onBalloonClick;
  const pinIconClass = interactivePin ? "wg-place" : "wg-location";
  return (
    <Wrapper className={className} x={x} y={y} opacity={opacity}>
      {(singleImage && (
        <SingleImage
          className="image single"
          src={singleImage}
          borderRadius={borderRadius}
          pinColor={pinColor}
        />
      )) || (
        <>
          <Pin
            className={`pin ${pinIconClass} ${open ? "open" : ""}`}
            pinColor={pinColor}
            pinHighlightColor={pinHighlightColor}
            pinSize={pinSize}
            interactive={interactivePin}
            animated={animated}
            onClick={onPinClick && (event => onPinClick(value, event))}
          />
          <CSSTransition
            in={open}
            classNames="fade"
            timeout={300}
            mountOnEnter
            unmountOnExit
          >
            <Balloon
              className="balloon"
              align={align}
              animated={animated}
              borderRadius={borderRadius}
              pinSize={pinSize}
              interactive={interactiveBalloon}
              onClick={
                onBalloonClick && (event => onBalloonClick(value, event))
              }
              balloonSize={balloonSize}
            >
              <ImageSet
                className="imageSet"
                set={imageSet}
                fontSize={imageTextSize}
              />

              <Caption
                title
                type={fontTypes.NEUTRAL}
                size={captionSize}
                className="caption"
              >
                {caption}
                {interactiveBalloon ? (
                  <Text
                    title
                    type={fontTypes.SUBTLE}
                    size={captionSize}
                    className="text wg-small-arrow-right"
                  />
                ) : null}
              </Caption>
            </Balloon>
          </CSSTransition>
        </>
      )}
    </Wrapper>
  );
};

export const requiredIfNoSingleImage = propType => (...args) => {
  const [props] = args;
  return props.singleImage ? propType(...args) : propType.isRequired(...args);
};

MapBalloon.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  align: PropTypes.oneOf(values(alignments)),
  singleImage: PropTypes.string,
  caption: requiredIfNoSingleImage(PropTypes.string),
  imageSet: requiredIfNoSingleImage(imageSetPropType),
  open: PropTypes.bool,
  animated: PropTypes.bool,
  borderRadius: PropTypes.string,
  pinColor: PropTypes.string,
  pinHighlightColor: PropTypes.string,
  pinSize: PropTypes.number,
  opacity: PropTypes.number,
  balloonSize: PropTypes.number,
  captionSize: PropTypes.number,
  imageTextSize: PropTypes.number,
  onPinClick: PropTypes.func,
  onBalloonClick: PropTypes.func,
  value: PropTypes.any, // eslint-disable-line
  className: PropTypes.string,
};

MapBalloon.defaultProps = {
  align: alignments.LEFT,
  open: false,
  x: 0,
  y: 0,
  animated: false,
  borderRadius: "8px",
  pinColor: colors.CORN,
  opacity: 1,
  pinSize: 40,
  balloonSize: 260,
  captionSize: fontSizes.LARGE,
  imageTextSize: 28,
};

export default MapBalloon;
