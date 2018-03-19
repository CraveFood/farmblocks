import React from "react";
import PropTypes from "prop-types";
import Text from "@crave/farmblocks-text";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

import Label from "./styledComponents/Label";

class Radio extends React.Component {
  state = {
    checked: this.props.checked
  };

  handleClick = event => {
    event.preventDefault();
    const { disabled, onClick } = this.props;
    if (!disabled) {
      this.setState({
        checked: true
      });
      onClick && onClick(event);
    }
  };

  render() {
    const { label, onClick, ...inputProps } = this.props;
    const { checked } = this.state;

    const labelProps = {
      checked,
      onClick: this.handleClick,
      disabled: inputProps.disabled
    };
    inputProps.checked = checked;

    const fontColor =
      (inputProps.disabled && fontTypes.SUBTLE) || fontTypes.NORMAL;

    return (
      <Label {...labelProps}>
        <input className="hiddenInput" type="radio" {...inputProps} />
        <div className="visibleInput">
          <div className="checked" />
        </div>
        {label && (
          <Text title type={fontColor} size={fontSizes.MEDIUM}>
            {label}
          </Text>
        )}
      </Label>
    );
  }

  static propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
  };

  static defaultProps = {
    checked: false
  };
}

export default Radio;
