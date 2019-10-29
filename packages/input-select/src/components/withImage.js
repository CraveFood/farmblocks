import React from "react";
import PropTypes from "prop-types";
import Image, { badgeSizes } from "@crave/farmblocks-image";
import styled from "styled-components";

import LabelContainer from "../styledComponents/LabelContainer";

const ItemImage = styled(Image)`
  margin-right: -7px;
  margin-left: 10px;
`;

export const refName = "inputRef";

export default Input =>
  class InputWithImage extends React.Component {
    static propTypes = {
      image: PropTypes.string,
      inputRef: PropTypes.func,
    };

    render() {
      const { image, inputRef, ...props } = this.props;

      return (
        <LabelContainer className="labelContainer">
          {image && (
            <ItemImage
              className="selectedItemImage"
              src={image}
              size={badgeSizes.SMALL}
              badge
            />
          )}
          <Input ref={inputRef} {...props} />
        </LabelContainer>
      );
    }
  };
