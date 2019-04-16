import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Image, { thumbnailSizes } from "@crave/farmblocks-image";
import { Checkbox } from "@crave/farmblocks-input-checkbox";

import ItemContainer from "../styledComponents/ItemContainer";
import LabelContainer from "../styledComponents/LabelContainer";

const ItemImage = styled(Image)`
  margin: -6px 8px -6px 0;
  &:first-child {
    margin-left: -6px;
  }
`;

const Item = ({ selected, image, label, id, checkbox }) => (
  <ItemContainer className="itemContainer" id={id}>
    <LabelContainer className="labelContainer">
      {checkbox && <Checkbox className="checkbox" checked={selected} />}
      {image && (
        <ItemImage
          className="itemImage"
          src={image}
          size={thumbnailSizes.SMALL}
        />
      )}
      {label}
    </LabelContainer>
    {!checkbox && selected && <i className="icon wg-check" />}
  </ItemContainer>
);

Item.propTypes = {
  selected: PropTypes.bool,
  image: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  checkbox: PropTypes.bool,
};

export default Item;
