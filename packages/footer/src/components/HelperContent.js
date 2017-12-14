import React from "react";
import PropTypes from "prop-types";
import Text from "@crave/farmblocks-text";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";
import Image, { badgeSizes } from "@crave/farmblocks-image";
import Link from "@crave/farmblocks-link";

import Container from "../styledComponents/HelperContent";

const HelperContent = props => {
  const renderLink = props.linkText && (props.linkHref || props.linkOnClick);

  return (
    <Container size={props.size}>
      {props.imageSrc && (
        <Image
          src={props.imageSrc}
          badge
          size={badgeSizes.MEDIUM}
          className="image"
        />
      )}

      <div className="text">
        <Text size={props.size}>{props.text}</Text>

        {renderLink && (
          <Link
            onClick={props.linkOnClick}
            href={props.linkHref}
            type={fontTypes.NEUTRAL}
            size={props.size}
          >
            {props.linkText}
          </Link>
        )}
      </div>
    </Container>
  );
};

HelperContent.propTypes = {
  imageSrc: PropTypes.string,
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  linkHref: PropTypes.string,
  linkOnClick: PropTypes.func,
  size: PropTypes.number
};

HelperContent.defaultProps = {
  size: fontSizes.MEDIUM
}

export default HelperContent;
