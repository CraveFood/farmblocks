import * as React from "react";
import PropTypes from "prop-types";

import StyledLabel from "./styledComponents/TextInput";

class TextInput extends React.Component {
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

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      invalid: this.props.invalid
    };

    this.onChange = this.onChange.bind(this);
    this.onInvalid = this.onInvalid.bind(this);
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
    const containerProps = { invalid: this.state.invalid };
    const inputProps = {
      value: this.state.value,
      onChange: this.onChange,
      onInvalid: this.onInvalid,
      ...otherProps
    };
    return (
      <StyledLabel {...containerProps}>
        {this._renderLabel(label)}
        {this._renderInput(inputProps)}
        {this._renderFailedMessage(this.state.invalid, invalidText)}
      </StyledLabel>
    );
  }

  _renderLabel(label) {
    return label && <span className="label">{label}</span>;
  }

  _renderInput(inputProps) {
    return <input type="text" {...inputProps} />;
  }

  _renderFailedMessage(invalid, text) {
    return invalid && <p>{text}</p>;
  }
}

export default TextInput;
