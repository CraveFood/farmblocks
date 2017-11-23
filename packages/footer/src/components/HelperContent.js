import React from "react";
import PropTypes from "prop-types";
import Text from "@crave/farmblocks-text";
import { fontSizes } from "@crave/farmblocks-theme";
import Image, { badgeSizes } from "@crave/farmblocks-image";

import Container from "../styledComponents/HelperContent";

const HelperContent = props => {
  const renderLink = props.linkText && props.linkHref;

  return (
    <Container>
      {props.imageSrc && (
        <Image
          src={props.imageSrc}
          badge
          size={badgeSizes.MEDIUM}
          className="image"
        />
      )}

      <div className="text">
        <Text size={fontSizes.MEDIUM}>{props.text}</Text>

        {renderLink && (
          <a className="link" href={props.linkHref}>
            {props.linkText}
          </a>
        )}
      </div>
    </Container>
  );
};

HelperContent.propTypes = {
  imageSrc: PropTypes.string,
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  linkHref: PropTypes.string
};

export default HelperContent;
