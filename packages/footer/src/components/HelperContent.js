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
      <Image src={props.imageSrc} badge size={badgeSizes.MEDIUM} />

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

HelperContent.defaultProps = {
  imageSrc:
    "https://crave-whatsgood-sandbox.imgix.net/businesses/32/inventory/8fae5d32-f6d4-47bb-8062-e4e85c47788b.png"
};

export default HelperContent;
