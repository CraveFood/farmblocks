import * as React from "react";
import PropTypes from "prop-types";
import Tooltip from "@crave/farmblocks-tooltip";

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
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  render() {
    const {
      label,
      value,
      onChange,
      invalid,
      invalidText,
      onInvalid,
      tooltipText,
      onMouseOver,
      onMouseLeave,
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
      onMouseOver: this.onMouseOver,
      onMouseLeave: this.onMouseLeave,
      ...otherProps
    };
    return (
      <StyledLabel {...containerProps}>
        {this._renderInput(inputProps)}
        {this._renderLabel(label)}
        {this._renderTooltip(this.state.showTooltip, tooltipText)}
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

  _renderTooltip(visible, text) {
    return (
      visible && (
        <div className="tooltip">
          <Tooltip text={text} />
        </div>
      )
    );
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

  onMouseOver(event) {
    if (this.props.disabled) {
      this.setState({
        showTooltip: true
      });
    }
    return this.props.onMouseOver(event);
  }

  onMouseLeave(event) {
    if (this.props.disabled) {
      this.setState({
        showTooltip: false
      });
    }
    return this.props.onMouseLeave(event);
  }

  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    invalid: PropTypes.bool,
    invalidText: PropTypes.string,
    tooltipText: PropTypes.string,
    onInvalid: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseLeave: PropTypes.func,

    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool
    // and any other properties to forward to the html input element...
  };

  static defaultProps = {
    value: "",
    invalid: false,
    onChange: () => null,
    onInvalid: () => null,
    onMouseOver: () => null,
    onMouseLeave: () => null,
    invalidText: "This field is required.",
    tooltipText: "This field is disabled."
  };
}

export default TextInput;
