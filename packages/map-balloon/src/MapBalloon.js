import * as React from "react";
import PropTypes from "prop-types";
import values from "object.values";
import { ThemeProvider } from "styled-components";
import Text, { fontTypes } from "@crave/farmblocks-text";

import alignments from "./constants/alignments";
import sizes from "./constants/sizes";
import Wrapper from "./styledComponents/Wrapper";
import Pin from "./styledComponents/Pin";
import Balloon from "./styledComponents/Balloon";
import ImageSet, { imageSetPropType } from "./ImageSet";
import SingleImage from "./styledComponents/SingleImage";
import themes from "./styledComponents/themes";

const MapBalloon = ({
  x,
  y,
  open,
  align,
  imageSet,
  caption,
  singleImage,
  animated,
  size,
  borderRadius
}) => {
  const theme = themes[size];
  return (
    <ThemeProvider theme={theme}>
      <Wrapper x={x} y={y}>
        <Pin className="wg-location" highlighted={!singleImage} />

        {(singleImage && (
          <SingleImage src={singleImage} borderRadius={borderRadius} />
        )) ||
          (open &&
            imageSet && (
              <Balloon
                align={align}
                animated={animated}
                borderRadius={borderRadius}
              >
                <ImageSet set={imageSet} />

                <Text
                  title
                  type={fontTypes.NEUTRAL}
                  size={theme.captionSize}
                  className="caption"
                >
                  {caption}
                </Text>
              </Balloon>
            ))}
      </Wrapper>
    </ThemeProvider>
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
  size: PropTypes.oneOf(values(sizes)),
  borderRadius: PropTypes.string
};
MapBalloon.defaultProps = {
  align: alignments.LEFT,
  open: false,
  x: 0,
  y: 0,
  animated: false,
  size: sizes.MEDIUM,
  borderRadius: "8px"
};

export default MapBalloon;
