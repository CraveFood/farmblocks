import React from "react";
import PropTypes from "prop-types";
import Text from "@crave/farmblocks-text";

import PhotoBox from "./styledComponents/PhotoBox";
import Gradient from "./styledComponents/Gradient";

export const imageSetPropType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string.isRequired,
  }),
);

const ImageSet = ({ className, set, fontSize }) => {
  const [{ name, image }] = set;
  return (
    <PhotoBox className={className} image={image}>
      {name && (
        <Gradient className="gradient">
          <Text
            className="text"
            fontWeight="title"
            size={fontSize}
            type="white"
          >
            {name}
          </Text>
        </Gradient>
      )}
    </PhotoBox>
  );
};
ImageSet.propTypes = {
  set: imageSetPropType.isRequired,
  fontSize: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default ImageSet;
