import * as React from "react";
import PropTypes from "prop-types";

import Container from "../styledComponents/Step";
import statusTypes from "../constants/statusTypes";

export default class Step extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.stopPropagation();

    const isCurrentStep = this.props.status === statusTypes.CURRENT;

    if (!isCurrentStep) {
      return;
    }

    return this.props.onClick({
      index: this.props.index,
      value: this.props.value
    });
  }

  render() {
    const status = this.props.status;
    const isCompleted = status === statusTypes.COMPLETED;

    return (
      <Container status={status} onClick={this.onClick}>
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
    index: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    status: PropTypes.oneOf(Object.keys(statusTypes)).isRequired,
    onClick: PropTypes.func.isRequired
  };
}
