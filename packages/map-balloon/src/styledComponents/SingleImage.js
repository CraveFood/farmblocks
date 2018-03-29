import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "@crave/farmblocks-image";

import { pinSize } from "./Pin";

const EnhancedImage = styled(Image)`
  background-color: white;
  position: absolute;
  bottom: ${props => pinSize(props) + 8}px;
  left: -92px;
  border-radius: ${props => props.borderRadius};
`;

const SingleImage = props => <EnhancedImage {...props} size={184} />;
SingleImage.propTypes = {
  src: PropTypes.string,
  borderRadius: PropTypes.string,
  pinSize: PropTypes.string
};

export default SingleImage;
