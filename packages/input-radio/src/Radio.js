import React from "react";
import PropTypes from "prop-types";
import Text from "@crave/farmblocks-text";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";
import disabledTooltip, {
  disabledTooltipProps
} from "@crave/farmblocks-hoc-disabled-tooltip";

import Label from "./styledComponents/Label";

const TooltipTarget = disabledTooltip("div");

class Radio extends React.Component {
  state = {
    checked: this.props.checked
  };

  handleClick = event => {
    event.preventDefault();
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

  componentWillReceiveProps({ checked }) {
    if (checked !== this.props.checked) this.setState({ checked });
  }

  render() {
    const {
      label,
      onClick,
      onChange,
      checked: checkedProp,
      onMouseLeave,
      onMouseOver,
      tooltipText,
      tooltipAlign,
      ...inputProps
    } = this.props;
    const { checked } = this.state;

    const labelProps = {
      checked,
      onClick: this.handleClick,
      disabled: inputProps.disabled
    };
    const tooltipProps = {
      onMouseLeave,
      onMouseOver,
      tooltipText,
      tooltipAlign,
      disabled: inputProps.disabled
    };
    inputProps.defaultChecked = checked;

    const fontColor =
      (inputProps.disabled && fontTypes.SUBTLE) || fontTypes.NORMAL;

    return (
      <Label {...labelProps}>
        <TooltipTarget {...tooltipProps} className="tooltipTarget">
          <input className="hiddenInput" type="radio" {...inputProps} />
          <div className="visibleInput">
            <div className="checked" />
          </div>
          {label && (
            <Text title type={fontColor} size={fontSizes.MEDIUM}>
              {label}
            </Text>
          )}
        </TooltipTarget>
      </Label>
    );
  }

  static propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.any,
    ...disabledTooltipProps
  };

  static defaultProps = {
    checked: false,
    tooltipText: "This option is disabled."
  };
}

export default Radio;
