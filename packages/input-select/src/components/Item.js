import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Image, { thumbnailSizes } from "@crave/farmblocks-image";

import ItemContainer from "../styledComponents/ItemContainer";
import LabelContainer from "../styledComponents/LabelContainer";

const ItemImage = styled(Image)`
  margin: -6px;
  margin-right: 8px;
`;

const Item = ({ selected, image, label }) => (
  <ItemContainer>
    {image ? (
      <LabelContainer>
        <ItemImage src={image} size={thumbnailSizes.SMALL} /> {label}
      </LabelContainer>
    ) : (
      label
    )}
    {selected && <i className="icon wg-check" />}
  </ItemContainer>
);

Item.propTypes = {
  selected: PropTypes.bool,
  image: PropTypes.string,
  label: PropTypes.string.isRequired
};

export default Item;
