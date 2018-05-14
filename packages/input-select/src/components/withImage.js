import React from "react";
import PropTypes from "prop-types";
import { badgeSizes } from "@crave/farmblocks-image";

import ItemImage from "../styledComponents/ItemImage";
import LabelContainer from "../styledComponents/LabelContainer";

export const refName = "inputRef";

export default Input =>
  class InputWithImage extends React.Component {
    render() {
      const { image, inputRef, ...props } = this.props;
      return (
        <LabelContainer>
          {image && <ItemImage src={image} size={badgeSizes.SMALL} badge />}
          <Input ref={inputRef} {...props} />
        </LabelContainer>
      );
    }

    static propTypes = {
      image: PropTypes.string,
      inputRef: PropTypes.func
    };
  };
