import * as React from "react";
import PropTypes from "prop-types";
import values from "object.values";
import Text, { fontTypes } from "@crave/farmblocks-text";
import { colors, fontSizes } from "@crave/farmblocks-theme";

import alignments from "./constants/alignments";
import Wrapper from "./styledComponents/Wrapper";
import Pin from "./styledComponents/Pin";
import Balloon from "./styledComponents/Balloon";
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
  interactive,
  reference,
  onPinClick
}) => {
  const pinIconClass = interactive ? "wg-place" : "wg-location";
  return (
    <Wrapper x={x} y={y} opacity={opacity}>
      <Pin
        className={`${pinIconClass} ${open ? "open" : ""}`}
        pinColor={pinColor}
        pinHighlightColor={pinHighlightColor}
        pinSize={pinSize}
        interactive={interactive}
        animated={animated}
        onClick={interactive && (event => onPinClick(reference, event))}
      />

      {(singleImage && (
        <SingleImage
          src={singleImage}
          borderRadius={borderRadius}
          pinSize={pinSize}
        />
      )) ||
        (open &&
          imageSet && (
            <Balloon
              align={align}
              animated={animated}
              borderRadius={borderRadius}
              pinSize={pinSize}
              balloonSize={balloonSize}
            >
              <ImageSet set={imageSet} fontSize={imageTextSize} />

              <Text
                title
                type={fontTypes.NEUTRAL}
                size={captionSize}
                className="caption"
              >
                {caption}
              </Text>
            </Balloon>
          ))}
    </Wrapper>
  );
};

export const requiredIfNoSingleImage = propType => (...args) => {
  const [props] = args;
  return props["singleImage"]
    ? propType(...args)
    : propType.isRequired(...args);
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
  interactive: PropTypes.bool,
  onPinClick: PropTypes.func,
  onBalloonClick: PropTypes.func,
  reference: PropTypes.any
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
  interactive: false,
  onPinClick: () => null,
  onBalloonClick: () => null
};

export default MapBalloon;
