import * as React from "react";
import PropTypes from "prop-types";

import StyledLabel from "./styledComponents/TextInput";

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      invalid: this.props.invalid,
      showTooltip: false
    };

    this.onChange = this.onChange.bind(this);
    this.onInvalid = this.onInvalid.bind(this);
  }

  render() {
    const {
      label,
      value,
      onChange,
      invalid,
      invalidText,
      onInvalid,
      ...otherProps
    } = this.props;
    const containerProps = {
      filled: this.state.value.length > 0,
      invalid: this.state.invalid,
      disabled: otherProps.disabled
    };
    const inputProps = {
      value: this.state.value,
      onChange: this.onChange,
      onInvalid: this.onInvalid,
      ...otherProps
    };
    return (
      <StyledLabel {...containerProps}>
        {this._renderInput(inputProps)}
        {this._renderLabel(label)}
        {this._renderFailedMessage(this.state.invalid, invalidText)}
      </StyledLabel>
    );
  }

  _renderLabel(label) {
    return label && <div className="label">{label}</div>;
  }

  _renderInput(inputProps) {
    return <input type="text" {...inputProps} />;
  }

  _renderFailedMessage(invalid, text) {
    return invalid && <p className="message">{text}</p>;
  }
  onChange(event) {
    this.setState({
      value: event.target.value,
      invalid: false
    });
    return this.props.onChange(event);
  }

  onInvalid(event) {
    event.preventDefault();
    this.setState({ invalid: true });
    return this.props.onInvalid(event);
  }

  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    invalid: PropTypes.bool,
    invalidText: PropTypes.string,
    onInvalid: PropTypes.func,

    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool
    // and any other properties to forward to the html input element...
  };

  static defaultProps = {
    value: "",
    onChange: () => null,
    invalid: false,
    invalidText: "This field is required",
    onInvalid: () => null
  };
}

export default TextInput;
