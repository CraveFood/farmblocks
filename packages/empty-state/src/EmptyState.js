// @flow
import * as React from "react";
import Image, { thumbnailSizes } from "@crave/farmblocks-image";
import Text, { fontTypes, fontSizes } from "@crave/farmblocks-text";
import Button, { buttonTypes, buttonSizes } from "@crave/farmblocks-button";

import Container from "./styledComponents/Container";

type Props = {
  title: string,
  imageSrc?: string,
  description?: string,
  primaryActionText?: string,
  onPrimaryActionClick?: (SyntheticEvent<HTMLButtonElement>) => void,
  secondaryActionText?: string,
  onSecondaryActionClick?: (SyntheticEvent<HTMLButtonElement>) => void,
  info?: string
};

class EmptyState extends React.Component<Props> {
  render() {
    return (
      <Container>
        {this.props.imageSrc && (
          <Image
            className="thumbnail"
            size={thumbnailSizes.LARGE}
            src={this.props.imageSrc}
          />
        )}
        {this.props.title && (
          <Text
            title
            className=""
            align="center"
            size={fontSizes.HUGE}
            type={fontTypes.NORMAL}
          >
            {this.props.title}
          </Text>
        )}
        {this.props.description && (
          <Text
            className="description"
            align="center"
            size={fontSizes.LARGE}
            type={fontTypes.NEUTRAL}
          >
            {this.props.description}
          </Text>
        )}
        {this._renderButtons()}
        {this.props.info && (
          <Text
            className="info"
            align="center"
            size={fontSizes.SMALL}
            type={fontTypes.NEUTRAL}
          >
            {this.props.info}
          </Text>
        )}
      </Container>
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
            className={`secondaryButton ${secondaryButtonMargin}`}
            type={buttonTypes.NEUTRAL}
            size={buttonSizes.MEDIUM}
            text={secondaryActionText}
            onClick={onSecondaryActionClick}
          />
        )}
        {hasPrimaryAction && (
          <Button
            className="primaryButton"
            type={buttonTypes.SECONDARY}
            size={buttonSizes.MEDIUM}
            text={primaryActionText}
            onClick={onPrimaryActionClick}
          />
        )}
      </div>
    );
  }
}

export default EmptyState;
