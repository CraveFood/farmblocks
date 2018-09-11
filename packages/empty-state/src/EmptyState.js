import * as React from "react";
import PropTypes from "prop-types";
import Image, { thumbnailSizes } from "@crave/farmblocks-image";
import Text, { fontTypes, fontSizes } from "@crave/farmblocks-text";
import Button, { buttonSizes } from "@crave/farmblocks-button";

import Container from "./styledComponents/Container";

class EmptyState extends React.Component {
  render() {
    return (
      <Container>
        {this._renderThumbnail()}
        {this._renderTitle()}
        {this._renderDescription()}
        {this._renderButtons()}
        {this._renderInfo()}
      </Container>
    );
  }

  _renderThumbnail() {
    const { imageSrc, icon } = this.props;

    if (imageSrc) {
      return (
        <Image
          className="thumbnail"
          size={thumbnailSizes.LARGE}
          src={imageSrc}
        />
      );
    }

    if (icon) {
      return (
        <div className="icon">
          <i className={icon} />
        </div>
      );
    }
  }
  _renderTitle() {
    return (
      <Text title align="center" size={fontSizes.HUGE} type={fontTypes.NORMAL}>
        {this.props.title}
      </Text>
    );
  }
  _renderDescription() {
    return (
      this.props.description && (
        <Text
          className="description"
          align="center"
          size={fontSizes.LARGE}
          type={fontTypes.NEUTRAL}
        >
          {this.props.description}
        </Text>
      )
    );
  }
  _renderInfo() {
    return (
      this.props.info && (
        <Text
          className="info"
          align="center"
          size={fontSizes.SMALL}
          type={fontTypes.NEUTRAL}
        >
          {this.props.info}
        </Text>
      )
    );
  }
  _renderButtons() {
    const { actions } = this.props;
    if (!actions || !actions.length) {
      return null;
    }

    return (
      <div className="buttons">
        {actions.map((buttonProps, index) => (
          <Button
            key={`empty-state-button-${index}`}
            size={buttonSizes.MEDIUM}
            {...buttonProps}
          />
        ))}
      </div>
    );
  }
  static propTypes = {
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string,
    description: PropTypes.string,
    actions: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
      })
    ),
    info: PropTypes.string,
    icon: PropTypes.string
  };
}

export default EmptyState;
