import React from "react";
import PropTypes from "prop-types";

import Group from "./styledComponents/Group";

class RadioGroup extends React.Component {
  state = {
    value: this.props.defaultValue,
  };

  componentDidUpdate = prevProps => {
    const { defaultValue } = this.props;
    if (prevProps.defaultValue !== defaultValue) {
      this.setState({ value: defaultValue });
    }
  };

  handleChange = value => {
    this.setState({
      value,
    });
    this.props.onChange?.(value);
  };

  render() {
    const { children, name, disabled } = this.props;
    const { value } = this.state;

    const allChildrenProps = { name, onChange: this.handleChange };
    return (
      <Group className={this.props.className}>
        {React.Children.map(children, child => {
          const checked = child.props.value === value;
          const childProps = {
            checked,
            disabled: child.props.disabled || disabled,
          };
          return React.cloneElement(child, {
            className: `radio val-${child.props.value} ${
              checked ? "checked" : ""
            } ${child.props.disabled ? "disabled" : ""}`,
            ...allChildrenProps,
            ...childProps,
          });
        })}
      </Group>
    );
  }
}

RadioGroup.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.any,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default RadioGroup;
