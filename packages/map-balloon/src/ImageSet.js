import React from "react";
import PropTypes from "prop-types";
import Text from "@crave/farmblocks-text";
import { withTheme } from "styled-components";

import PhotoBox from "./styledComponents/PhotoBox";
import Gradient from "./styledComponents/Gradient";

export const imageSetPropType = PropTypes.arrayOf(
  PropTypes.shape({
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
);

export const ImageSet = ({ set, theme }) => {
  const [firstPhoto] = set;
  return (
    <PhotoBox image={firstPhoto.image}>
      <Gradient>
        <Text title size={theme.imageTextSize} type={"white"}>
          {firstPhoto.text}
        </Text>
      </Gradient>
    </PhotoBox>
  );
};
ImageSet.propTypes = {
  set: imageSetPropType.isRequired,
  theme: PropTypes.shape({
    imageTextSize: PropTypes.number.isRequired
  }).isRequired
};

export default withTheme(ImageSet);
