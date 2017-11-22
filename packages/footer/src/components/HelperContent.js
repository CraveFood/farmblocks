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
      <Image
        src="https://user-images.githubusercontent.com/17936244/33067698-1f9e14b2-ce96-11e7-97a2-bd54205a9eea.png"
        badge
        size={badgeSizes.MEDIUM}
      />

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
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  linkHref: PropTypes.string
};

export default HelperContent;
