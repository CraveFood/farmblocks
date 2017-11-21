import React from "react";
import PropTypes from "prop-types";
import Text from "@crave/farmblocks-text";
import { fontSizes } from "@crave/farmblocks-theme";
import Image, { badgeSizes } from "@crave/farmblocks-image";

import Container from "../styledComponents/HelperContent";

const HelperContent = props => (
  <Container>
    <Image
      src="https://user-images.githubusercontent.com/17936244/33067698-1f9e14b2-ce96-11e7-97a2-bd54205a9eea.png"
      badge
      size={badgeSizes.MEDIUM}
    />

    <div className="text">
      <div style={{ backgroundX: "lightblue" }}>
        <Text size={fontSizes.MEDIUM}>{props.text}</Text>
      </div>
      <div style={{ backgroundx: "lightblue" }}>
        <a className="link" href={props.linkHref}>
          {props.linkText}
        </a>
      </div>
    </div>
  </Container>
);

HelperContent.propTypes = {
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkHref: PropTypes.string.isRequired
};

export default HelperContent;
