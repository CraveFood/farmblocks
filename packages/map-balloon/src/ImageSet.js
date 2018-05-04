import React from "react";
import PropTypes from "prop-types";
import Text from "@crave/farmblocks-text";

import PhotoBox from "./styledComponents/PhotoBox";
import Gradient from "./styledComponents/Gradient";

export const imageSetPropType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string.isRequired
  })
);

export const ImageSet = ({ set, fontSize }) => {
  const [{ name, image }] = set;
  return (
    <PhotoBox image={image}>
      {name && (
        <Gradient>
          <Text title size={fontSize} type={"white"}>
            {name}
          </Text>
        </Gradient>
      )}
    </PhotoBox>
  );
};
ImageSet.propTypes = {
  set: imageSetPropType.isRequired,
  fontSize: PropTypes.number.isRequired
};

export default ImageSet;
