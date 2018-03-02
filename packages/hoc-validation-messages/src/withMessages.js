import * as React from "react";
import PropTypes from "prop-types";
import Image, { badgeSizes } from "@crave/farmblocks-image";
import Text from "@crave/farmblocks-text";
import { fontSizes } from "@crave/farmblocks-theme";

import MessageWrapper from "./styledComponents/MessageWrapper";
import errorIconSrc from "./constants/errorIcon";

export const withMessagesProps = {
  errorIconSrc: PropTypes.string,
  validationMessages: PropTypes.arrayOf(PropTypes.string),
  onInvalid: PropTypes.func
};

const withMessages = WrappedComponent => {
  return class ValidationMessages extends React.Component {
    state = {
      messages: this.props.validationMessages
    };

    onInvalid = this.onInvalid.bind(this);
    onChange = this.onChange.bind(this);
    hasPropsValidations = this.hasPropsValidations.bind(this);

    componentWillReceiveProps(nextProps) {
      if (nextProps.validationMessages !== this.props.validationMessages) {
        this.setState({
          messages: nextProps.validationMessages
        });
      }
    }

    hasPropsValidations() {
      return this.props.validationMessages.length !== 0;
    }

    onInvalid(event) {
      event.preventDefault();
      // use built-in browser validation message if available and if the validationErrors is not passed
      if (!this.hasPropsValidations() && event.target.validationMessage) {
        this.setState({
          messages: [event.target.validationMessage]
        });
      }
      return this.props.onInvalid(event);
    }

    onChange(event) {
      const isValid =
        event.target &&
        event.target.validity &&
        event.target.validity.valid !== undefined;

      if (!this.hasPropsValidations() && isValid) {
        this.setState({
          messages: []
        });
      }

      this.props.onChange && this.props.onChange(event);
    }

    render() {
      const {
        validationMessages,
        errorIconSrc,
        onInvalid,
        ...wrappedComponentProps
      } = this.props;

      return (
        <div>
          <WrappedComponent
            {...wrappedComponentProps}
            onInvalid={this.onInvalid}
            onChange={this.onChange}
            invalid={this.state.messages.length > 0 ? "true" : undefined}
          />

          <div>
            {this.state.messages.map((text, index) => (
              <MessageWrapper key={`err-${index}`}>
                <Image
                  className="icon"
                  src={this.props.errorIconSrc}
                  badge
                  size={badgeSizes.SMALL}
                />
                <Text
                  lineHeight={`${badgeSizes.SMALL}px`}
                  size={fontSizes.MEDIUM}
                >
                  {text}
                </Text>
              </MessageWrapper>
            ))}
          </div>
        </div>
      );
    }

    static propTypes = {
      ...WrappedComponent.propTypes,
      ...withMessagesProps
    };

    static defaultProps = {
      errorIconSrc,
      validationMessages: [],
      onInvalid: () => null
    };
  };
};

export default withMessages;
