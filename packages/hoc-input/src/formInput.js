import * as React from "react";
import PropTypes from "prop-types";
import Text from "@crave/farmblocks-text";
import Image, { badgeSizes } from "@crave/farmblocks-image";
import { fontSizes } from "@crave/farmblocks-theme";

import errorIconSrc from "./constants/errorIcon";
import Wrapper from "./styledComponents/Wrapper";

export const newPropTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  focused: PropTypes.bool,
  disabled: PropTypes.bool,
  validationMessages: PropTypes.arrayOf(PropTypes.string),
  errorIconSrc: PropTypes.string,
  onChange: PropTypes.func,
  onInvalid: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};

const formInput = WrappedComponent => {
  return class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: props.value,
        focused: props.focused,
        validationMessages: props.validationMessages
      };

      this.onChange = this.onChange.bind(this);
      this.onInvalid = this.onInvalid.bind(this);
      this.onFocus = this.onFocus.bind(this);
      this.onBlur = this.onBlur.bind(this);
      this._renderInput = this._renderInput.bind(this);
      this._renderFailedMessages = this._renderFailedMessages.bind(this);
    }

    render() {
      const {
        label,
        focused,
        validationMessages,
        errorIconSrc,
        onChange,
        onFocus,
        onBlur,
        onInvalid,
        ...wrappedComponentProps
      } = this.props;
      const wrapperProps = {
        focused: this.state.focused,
        invalid: this.state.validationMessages.length > 0,
        filled: this.state.value.length > 0,
        disabled: wrappedComponentProps.disabled
      };
      return (
        <Wrapper {...wrapperProps}>
          {this._renderInput(wrappedComponentProps)}
          {this._renderLabel(label)}
          {this._renderFailedMessages(wrapperProps.invalid)}
        </Wrapper>
      );
    }

    _renderInput(inputProps) {
      const handlers = {
        onChange: this.onChange,
        onInvalid: this.onInvalid,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      };
      return (
        <div className="input">
          <WrappedComponent
            {...inputProps}
            {...handlers}
            value={this.state.value}
          />
        </div>
      );
    }

    _renderLabel(label, focused) {
      return (
        label && (
          <Text
            title
            className="label"
            size={fontSizes.SMALL}
            lineHeight={1.14}
          >
            {label}
          </Text>
        )
      );
    }

    _renderFailedMessages(invalid) {
      return (
        invalid && (
          <div className="messages">
            {this.state.validationMessages.map((text, index) => (
              <div className="message" key={`err-${index}`}>
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
              </div>
            ))}
          </div>
        )
      );
    }

    componentWillReceiveProps(nextProps) {
      const nextState = {};
      if (nextProps.value !== this.props.value) {
        nextState.value = nextProps.value;
      }
      if (nextProps.validationMessages !== this.props.validationMessages) {
        nextState.validationMessages = nextProps.validationMessages;
      }
      this.setState(nextState);
    }

    onChange(event) {
      this.setState({
        value: event.value || event.target.value
      });
      // if no custom validation is provided, clean validation messages once the
      // browser api considers the value valid
      if (
        this.props.validationMessages.length === 0 &&
        event.target &&
        event.target.validity &&
        event.target.validity.valid !== undefined
      ) {
        this.setState({
          validationMessages: []
        });
      }
      return this.props.onChange(event);
    }

    onFocus(event) {
      this.setState({ focused: true });
      return this.props.onFocus(event);
    }

    onBlur(event) {
      this.setState({ focused: false });
      return this.props.onBlur(event);
    }

    onInvalid(event) {
      event.preventDefault();
      // use built-in browser validation message if available and if the validationErrors is not passed
      if (
        this.props.validationMessages.length === 0 &&
        event.target.validationMessage
      ) {
        this.setState({
          validationMessages: [event.target.validationMessage]
        });
      }
      return this.props.onInvalid(event);
    }

    static propTypes = {
      ...WrappedComponent.propTypes,
      ...newPropTypes
    };

    static defaultProps = {
      value: "",
      focused: false,
      disabled: false,
      onChange: () => null,
      onInvalid: () => null,
      onFocus: () => null,
      onBlur: () => null,
      errorIconSrc,
      validationMessages: []
    };
  };
};

export default formInput;
