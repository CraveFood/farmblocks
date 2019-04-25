import * as React from "react";
import PropTypes from "prop-types";
import Image, { badgeSizes } from "@crave/farmblocks-image";
import Text from "@crave/farmblocks-text";
import { fontSizes } from "@crave/farmblocks-theme";

import MessageWrapper from "./styledComponents/MessageWrapper";
import errorIcon from "./constants/errorIcon";

export const withMessagesProps = {
  errorIconSrc: PropTypes.string,
  validationMessages: PropTypes.arrayOf(PropTypes.string),
  onInvalid: PropTypes.func,
};

const withMessages = WrappedComponent => {
  return class ValidationMessages extends React.Component {
    state = {
      messages: this.props.validationMessages,
    };

    componentDidUpdate(prevProps) {
      if (prevProps.validationMessages !== this.props.validationMessages) {
        this.setState({
          messages: this.props.validationMessages,
        });
      }
    }

    hasPropsValidations = () => {
      return this.props.validationMessages.length !== 0;
    };

    onInvalid = event => {
      event.preventDefault();
      // use built-in browser validation message if available and if the validationErrors is not passed
      if (!this.hasPropsValidations() && event.target.validationMessage) {
        this.setState({
          messages: [event.target.validationMessage],
        });
      }
      return this.props.onInvalid(event);
    };

    onChange = event => {
      const isValid =
        event.target &&
        event.target.validity &&
        event.target.validity.valid !== undefined;

      if (!this.hasPropsValidations() && isValid) {
        this.setState({
          messages: [],
        });
      }

      this.props.onChange?.(event);
    };

    render() {
      const {
        validationMessages,
        errorIconSrc,
        onInvalid,
        className,
        ...wrappedComponentProps
      } = this.props;

      return (
        <div className={className}>
          <WrappedComponent
            {...wrappedComponentProps}
            className="wrapped"
            onInvalid={this.onInvalid}
            onChange={this.onChange}
            invalid={this.state.messages.length > 0 || this.props.invalid}
          />

          <div className="messagesContainer">
            {this.state.messages.map(text => (
              <MessageWrapper className="messageWrapper" key={`err-${text}`}>
                <Image
                  className="icon"
                  src={errorIconSrc}
                  badge
                  size={badgeSizes.SMALL}
                />
                <Text
                  className="text"
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
      ...withMessagesProps,
      className: PropTypes.string,
    };

    /* eslint-disable react/default-props-match-prop-types */
    // false negative. The linter don't follow the spread of `withMessagesProp`
    static defaultProps = {
      errorIconSrc: errorIcon,
      validationMessages: [],
      onInvalid: () => null,
    };
    /* eslint-enable react/default-props-match-prop-types */
  };
};

export default withMessages;
