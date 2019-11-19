import * as React from "react";
import PropTypes from "prop-types";
import { SmCheck, SmPlaceholder, SmChevronRight } from "@crave/farmblocks-icon";

import Container from "../styledComponents/Step";
import statusTypes from "../constants/statusTypes";

export default class Step extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    status: PropTypes.oneOf(Object.keys(statusTypes)).isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
  };

  renderIcon = IconName => <IconName size={20} className="icon" />;

  render() {
    const { status } = this.props;
    const isCompleted = status === statusTypes.COMPLETED;

    return (
      <Container
        className={this.props.className}
        status={status}
        onClick={this.props.onClick}
      >
        {this.renderIcon(isCompleted ? SmCheck : SmPlaceholder)}

        <div className="description">{this.props.children}</div>

        {!isCompleted && this.renderIcon(SmChevronRight)}
      </Container>
    );
  }
}

Step.propTypes = {
  children: PropTypes.node.isRequired,
  status: PropTypes.oneOf(Object.keys(statusTypes)).isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};
