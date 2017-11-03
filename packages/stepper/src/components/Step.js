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

    if (this.props.item.status !== statusTypes.CURRENT) {
      return;
    }

    return this.props.onClick(this.props.item.id);
  }

  render() {
    const isCompleted = this.props.item.status === statusTypes.COMPLETED;

    return (
      <Container status={this.props.item.status} onClick={this.onClick}>
        {this._renderIcon(isCompleted ? "wg-check" : "wg-checker")}

        <div className="description">{this.props.item.description}</div>

        {this.props.item.status !== statusTypes.COMPLETED &&
          this._renderIcon("wg-small-arrow-right")}
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
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.oneOf(Object.keys(statusTypes)).isRequired
    }),
    onClick: PropTypes.func.isRequired
  };
}
