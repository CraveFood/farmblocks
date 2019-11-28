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
  title,
  description,
  actions,
  info,
}) => (
  <Container className={className}>
    <Thumbnail imageSrc={imageSrc} icon={icon} />

    <Text
      className="title"
      fontWeight="title"
      align="center"
      size={fontSizes.HUGE}
      type={fontTypes.NORMAL}
    >
      {title}
    </Text>

    {description && (
      <Text
        className="description"
        align="center"
        size={fontSizes.LARGE}
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
      type: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    }),
  ),
  info: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
};

export default EmptyState;
