import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Image, { thumbnailSizes } from "@crave/farmblocks-image";
import { fontTypes } from "@crave/farmblocks-text";

const Icon = styled.div`
  font-size: ${({ iconFontSize }) => iconFontSize || "72px"};
  color: ${fontTypes.SUBTLE};
`;

const Thumbnail = ({ imageSrc, icon, iconFontSize }) => {
  if (imageSrc) {
    return (
      <Image className="thumbnail" size={thumbnailSizes.LARGE} src={imageSrc} />
    );
  }

  if (icon) {
    return (
      <Icon className="icon-wrapper" iconFontSize={iconFontSize}>
        {icon}
      </Icon>
    );
  }

  return null;
};

Thumbnail.propTypes = {
  imageSrc: PropTypes.string,
  iconFontSize: PropTypes.string,
  icon: PropTypes.node,
};

export default Thumbnail;
