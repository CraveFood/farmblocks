import * as React from "react";
import PropTypes from "prop-types";

import Container from "../styledComponents/Step";
import statusTypes from "../constants/statusTypes";

export default class Step extends React.Component {
  render() {
    const status = this.props.status;
    const isCompleted = status === statusTypes.COMPLETED;

    return (
      <Container status={status} onClick={this.props.onClick}>
        {this._renderIcon(isCompleted ? "wg-check" : "wg-checker")}

        <div className="description">{this.props.value}</div>

        {!isCompleted && this._renderIcon("wg-small-arrow-right")}
      </Container>
    );
  }

  _renderIcon(iconName) {
    return (
      <div className="icon">
        <i className={iconName} />
      </div>
    );
  }

  static propTypes = {
    value: PropTypes.string.isRequired,
    status: PropTypes.oneOf(Object.keys(statusTypes)).isRequired,
    onClick: PropTypes.func.isRequired
  };
}
