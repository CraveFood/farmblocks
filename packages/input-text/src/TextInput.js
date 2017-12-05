import * as React from "react";
import PropTypes from "prop-types";

import StyledLabel from "./styledComponents/TextInput";

class TextInput extends React.Component {
  static propTypes = {
    label: PropTypes.string,

    placeholder: PropTypes.string
    // and any other properties to forward to the html input element...
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { label, ...otherProps } = this.props;
    const containerProps = {};
    const inputProps = { ...otherProps };
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
