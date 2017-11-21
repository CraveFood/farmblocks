// @flow
import * as React from "react";
import Image, { thumbnailSizes } from "@crave/farmblocks-image";
import Text, { fontTypes, fontSizes } from "@crave/farmblocks-text";
import Button, { buttonTypes, buttonSizes } from "@crave/farmblocks-button";

import Container from "./styledComponents/Container";

type Props = {
  title: string,
  width?: number,
  imageSrc?: string,
  description?: string,
  primaryButtonLabel?: string,
  onPrimaryButtonClick?: (SyntheticEvent<HTMLButtonElement>) => void,
  info?: string
};

class EmptyState extends React.Component<Props> {
  static defaultProps = {
    width: 560
  };

  render() {
    const { primaryButtonLabel, onPrimaryButtonClick } = this.props;
    const hasPrimaryButton = primaryButtonLabel && onPrimaryButtonClick;
    return (
      <Container width={this.props.width}>
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
        {hasPrimaryButton && (
          <Button
            className="primaryButton"
            type={buttonTypes.PRIMARY}
            size={buttonSizes.MEDIUM}
            text={primaryButtonLabel}
            onClick={onPrimaryButtonClick}
          />
        )}
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
}

export default EmptyState;
