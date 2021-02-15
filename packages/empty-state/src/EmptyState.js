import * as React from "react";
import PropTypes from "prop-types";
import Text, { fontTypes, fontSizes } from "@crave/farmblocks-text";

import Container from "./styledComponents/Container";
import Buttons from "./Buttons";
import Thumbnail from "./Thumbnail";

const EmptyState = ({
  className,
  imageSrc,
  icon,
  iconFontSize,
  title,
  description,
  actions,
  info,
}) => (
  <Container className={className}>
    <Thumbnail imageSrc={imageSrc} icon={icon} iconFontSize={iconFontSize} />

    <Text
      className="title"
      fontWeight="title"
      align="center"
      size={fontSizes.X_LARGE}
      type={fontTypes.NORMAL}
    >
      {title}
    </Text>

    {description && (
      <Text
        className="description"
        align="center"
        size={fontSizes.MEDIUM}
        type={fontTypes.NEUTRAL}
      >
        {description}
      </Text>
    )}

    <Buttons actions={actions} />

    {info && (
      <Text
        className="info"
        align="center"
        size={fontSizes.SMALL}
        type={fontTypes.NEUTRAL}
      >
        {info}
      </Text>
    )}
  </Container>
);

EmptyState.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  description: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      variant: PropTypes.string,
      onClick: PropTypes.func.isRequired,
      small: PropTypes.bool,
    }),
  ),
  info: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
  iconFontSize: PropTypes.string,
};

export default EmptyState;
