import React from "react";
import PropTypes from "prop-types";
import Text from "@crave/farmblocks-text";

import PhotoBox from "./styledComponents/PhotoBox";
import Gradient from "./styledComponents/Gradient";

export const productsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
);

const ProductImages = ({ products }) => {
  const [firstProduct] = products;
  return (
    <PhotoBox image={firstProduct.image}>
      <Gradient>
        <Text title size={36} type={"white"}>
          {firstProduct.name}
        </Text>
      </Gradient>
    </PhotoBox>
  );
};
ProductImages.propTypes = {
  products: productsPropType.isRequired
};

export default ProductImages;
