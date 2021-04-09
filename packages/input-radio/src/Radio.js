import React from "react";
import PropTypes from "prop-types";
import Text from "@crave/farmblocks-text";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

import Label from "./styledComponents/Label";

class Radio extends React.Component {
  state = {
    checked: this.props.checked,
  };

  componentDidUpdate(prevProps) {
    const { checked } = this.props;
    if (prevProps.checked !== checked) {
      this.setState({ checked });
    }
  }

  handleClick = (event) => {
    const { disabled, value } = this.props;
    const { checked } = this.state;
    if (!disabled) {
      this.setState({
        checked: true,
      });
      this.props.onClick?.(event);

      if (!checked) {
        this.props.onChange?.(value);
      }
    }
  };

  render() {
    const {
      label,
      onClick,
      onChange,
      checked: checkedProp,
      className,
      labelProps,
      ...remainingProps
    } = this.props;
    const { checked } = this.state;
    const inputProps = {
      ...remainingProps,
      defaultChecked: checked,
      onClick: this.handleClick,
    };

    const { disabled } = inputProps;

    const wrapperProps = {
      className,
      checked,
      disabled,
    };

    const fontColor = (disabled && fontTypes.SUBTLE) || fontTypes.NORMAL;

    return (
      <Label {...wrapperProps}>
        <input className="hiddenInput" type="radio" {...inputProps} />
        <div className="visibleInput">
          <div className="checkedIndicator" />
        </div>
        {label && (
          <Text
            fontWeight="title"
            type={fontColor}
            size={fontSizes.MEDIUM}
            {...labelProps}
          >
            {label}
          </Text>
        )}
      </Label>
    );
  }
}

Radio.propTypes = {
  label: PropTypes.node,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.any,
  className: PropTypes.string,
  labelProps: PropTypes.object,
};

Radio.defaultProps = {
  checked: false,
};

export default Radio;
