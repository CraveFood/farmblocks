import React from "react";
import PropTypes from "prop-types";

export default class StaticInput extends React.Component {
  // This is not a stateless functional component because SearchField uses this with ref

  render() {
    return <div style={{ flex: 1 }}>{this.props.value}</div>;
  }
  static propTypes = {
    value: PropTypes.string
  };
}
