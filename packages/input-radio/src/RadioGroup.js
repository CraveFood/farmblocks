import React from "react";
import PropTypes from "prop-types";

import Radio from "./Radio";

class RadioGroup extends React.Component {
  render() {
    const { children, name } = this.props;

    const childrenProps = { name };
    return (
      <div>
        {React.Children.map(children, child =>
          React.cloneElement(child, childrenProps)
        )}
      </div>
    );
  }

  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.instanceOf(Radio)).isRequired,
    name: PropTypes.string.isRequired
  };
}

export default RadioGroup;
