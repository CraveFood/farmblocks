import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Text from "@crave/farmblocks-text";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";
import Image, { badgeSizes } from "@crave/farmblocks-image";
import Link from "@crave/farmblocks-link";

const Container = styled.div`
  font-family: Lato, sans-serif;

  display: flex;

  align-items: center;

  .text {
    margin-bottom: ${(props) => props.size === fontSizes.MEDIUM && "8px"};
  }

  > .image {
    margin-right: 16px;
  }
`;

Container.displayName = "HelperContentContainer";

const HelperContent = (props) => {
  const renderLink = props.linkText && (props.linkHref || props.linkOnClick);

  return (
    <Container className={props.className} size={props.size}>
      {props.imageSrc && (
        <Image
          src={props.imageSrc}
          badge
          size={badgeSizes.MEDIUM}
          className="image"
        />
      )}

      <div>
        <Text className="text" size={props.size}>
          {props.text}
        </Text>

        {renderLink && (
          <Link
            className="link"
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
  text: PropTypes.string,
  linkText: PropTypes.string,
  linkHref: PropTypes.string,
  linkOnClick: PropTypes.func,
  size: PropTypes.number,
  className: PropTypes.string,
};

HelperContent.defaultProps = {
  size: fontSizes.MEDIUM,
};

export default HelperContent;
