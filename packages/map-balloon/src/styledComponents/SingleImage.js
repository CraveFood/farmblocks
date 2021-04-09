import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "@crave/farmblocks-image";
import { colors } from "@crave/farmblocks-theme";

const EnhancedImage = styled(Image)`
  background-color: white;
  position: absolute;
  bottom: 16px;
  left: -92px;
  border-radius: ${(props) => props.borderRadius};
  box-shadow: 0 2px 16px 0 ${colors.GREY_16};
`;

const Pin = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid ${colors.GREY_16};
  border-radius: 50%;
  position: absolute;
  bottom: -8px;
  left: -8px;
  background-color: ${(props) => props.pinColor};
`;

const SingleImage = (props) => (
  <div>
    <Pin {...props} />
    <EnhancedImage {...props} size={184} />
  </div>
);
SingleImage.propTypes = {
  src: PropTypes.string,
  borderRadius: PropTypes.string,
  pinColor: PropTypes.string,
};

export default SingleImage;
