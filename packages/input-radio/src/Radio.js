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
    const { disabled, onClick, onChange, value } = this.props;
    const { checked } = this.state;
    if (!disabled) {
      this.setState({
        checked: true
      });
      onClick && onClick(event);
      !checked && onChange && onChange(value);
    }
  };

  componentDidUpdate(prevProps) {
    const { checked } = this.props;
    if (prevProps.checked !== checked) {
      this.setState({ checked });
    }
  }

  render() {
    const {
      label,
      onClick,
      onChange,
      checked: checkedProp,
      ...remainingProps
    } = this.props;
    const { checked } = this.state;
    const inputProps = {
      ...remainingProps,
      defaultChecked: checked,
      onClick: this.handleClick
    };

    const disabled = inputProps.disabled;

    const labelProps = {
      checked,
      disabled
    };

    const fontColor = (disabled && fontTypes.SUBTLE) || fontTypes.NORMAL;

    return (
      <Label {...labelProps}>
        <input className="hiddenInput" type="radio" {...inputProps} />
        <div className="visibleInput">
          <div className="checkedIndicator" />
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
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.any
  };

  static defaultProps = {
    checked: false
  };
}

export default Radio;
