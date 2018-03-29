import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "@crave/farmblocks-image";

const EnhancedImage = styled(Image)`
  background-color: white;
  position: absolute;
  bottom: 17px;
  left: -92px;
  border-radius: ${props => props.borderRadius};
`;

const SingleImage = ({ src, borderRadius }) => (
  <EnhancedImage src={src} size={184} borderRadius={borderRadius} />
);
SingleImage.propTypes = {
  src: PropTypes.string,
  borderRadius: PropTypes.string
};

export default SingleImage;
