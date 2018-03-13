import React from "react";
import PropTypes from "prop-types";
import Text from "@crave/farmblocks-text";
import { withTheme } from "styled-components";

import PhotoBox from "./styledComponents/PhotoBox";
import Gradient from "./styledComponents/Gradient";

export const productsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
);

export const ProductImages = ({ products, theme }) => {
  const [firstProduct] = products;
  return (
    <PhotoBox image={firstProduct.image}>
      <Gradient>
        <Text title size={theme.productNameSize} type={"white"}>
          {firstProduct.name}
        </Text>
      </Gradient>
    </PhotoBox>
  );
};
ProductImages.propTypes = {
  products: productsPropType.isRequired,
  theme: PropTypes.shape({
    productNameSize: PropTypes.number.isRequired
  }).isRequired
};

export default withTheme(ProductImages);
