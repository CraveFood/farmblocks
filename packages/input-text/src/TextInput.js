import * as React from "react";
import PropTypes from "prop-types";

import StyledLabel from "./styledComponents/TextInput";

class TextInput extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,

    placeholder: PropTypes.string
    // and any other properties to forward to the html input element...
  };

  static defaultProps = {
    value: "",
    onChange: () => null
  };

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ value: event.target.value });
    return this.props.onChange(event);
  }

  render() {
    const { label, value, onChange, ...otherProps } = this.props;
    const containerProps = {};
    const inputProps = {
      value: this.state.value,
      onChange: this.onChange,
      ...otherProps
    };
    return (
      <StyledLabel {...containerProps}>
        {this._renderLabel(label)}
        {this._renderInput(inputProps)}
      </StyledLabel>
    );
  }

  _renderLabel(label) {
    return label && <span className="label">{label}</span>;
  }

  _renderInput(inputProps) {
    return <input type="text" {...inputProps} />;
  }
}

export default TextInput;
