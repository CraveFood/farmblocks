import * as React from "react";
import PropTypes from "prop-types";

import Container from "../styledComponents/Step";
import statusTypes from "../constants/statusTypes";

export default class Step extends React.Component {
  renderIcon = iconName => {
    return (
      <div className="icon">
        <i className={iconName} />
      </div>
    );
  };

  render() {
    const { status } = this.props;
    const isCompleted = status === statusTypes.COMPLETED;

    return (
      <Container status={status} onClick={this.props.onClick}>
        {this.renderIcon(isCompleted ? "wg-check" : "wg-checker")}

        <div className="description">{this.props.children}</div>

        {!isCompleted && this.renderIcon("wg-small-arrow-right")}
      </Container>
    );
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    status: PropTypes.oneOf(Object.keys(statusTypes)).isRequired,
    onClick: PropTypes.func.isRequired,
  };
}
