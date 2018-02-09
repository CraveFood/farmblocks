import * as React from "react";
import PropTypes from "prop-types";
import Image, { thumbnailSizes } from "@crave/farmblocks-image";
import Text, { fontTypes, fontSizes } from "@crave/farmblocks-text";
import Button, { buttonTypes, buttonSizes } from "@crave/farmblocks-button";

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
    return (
      this.props.imageSrc && (
        <Image
          className="thumbnail"
          size={thumbnailSizes.LARGE}
          src={this.props.imageSrc}
        />
      )
    );
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
    const {
      primaryActionText,
      onPrimaryActionClick,
      secondaryActionText,
      onSecondaryActionClick
    } = this.props;
    const hasPrimaryAction = primaryActionText && onPrimaryActionClick;
    const hasSecondaryAction = secondaryActionText && onSecondaryActionClick;
    const secondaryButtonMargin = hasPrimaryAction ? "withMargin" : "";
    if (!hasPrimaryAction && !hasSecondaryAction) {
      return null;
    }
    return (
      <div className="buttons">
        {hasSecondaryAction && (
          <Button
            className={secondaryButtonMargin}
            type={buttonTypes.NEUTRAL}
            size={buttonSizes.MEDIUM}
            text={secondaryActionText}
            onClick={onSecondaryActionClick}
          />
        )}
        {hasPrimaryAction && (
          <Button
            type={buttonTypes.SECONDARY}
            size={buttonSizes.MEDIUM}
            text={primaryActionText}
            onClick={onPrimaryActionClick}
          />
        )}
      </div>
    );
  }
  static propTypes = {
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string,
    description: PropTypes.string,
    primaryActionText: PropTypes.string,
    onPrimaryActionClick: PropTypes.func,
    secondaryActionText: PropTypes.string,
    onSecondaryActionClick: PropTypes.func,
    info: PropTypes.string
  };
}

export default EmptyState;
