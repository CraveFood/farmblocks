import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Text from "@crave/farmblocks-text";

export const productsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
);

const Container = styled.div`
  flex: 1;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Gradient = styled.div`
  height: 147px;
  box-sizing: border-box;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.48) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
`;

const ProductImages = ({ products }) => {
  const [firstProduct] = products;
  return (
    <Container image={firstProduct.image}>
      <Gradient>
        <Text title size={36} type={"white"}>
          {firstProduct.name}
        </Text>
      </Gradient>
    </Container>
  );
};
ProductImages.propTypes = {
  products: productsPropType.isRequired
};

export default ProductImages;
