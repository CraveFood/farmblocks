import React from "react";
import PropTypes from "prop-types";

class RadioGroup extends React.Component {
  state = {
    value: this.props.defaultValue
  };

  handleChange = value => {
    const { onChange } = this.props;
    this.setState({
      value
    });
    onChange && onChange(value);
  };
  render() {
    const { children, name } = this.props;
    const { value } = this.state;

    const childrenProps = { name, onChange: this.handleChange };
    return (
      <div>
        {React.Children.map(children, child => {
          const checked = child.props.value === value;
          return React.cloneElement(child, { ...childrenProps, checked });
        })}
      </div>
    );
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.any,
    onChange: PropTypes.func
  };
}

export default RadioGroup;
