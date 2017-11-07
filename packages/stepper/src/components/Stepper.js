import * as React from "react";
import PropTypes from "prop-types";

import statusTypes from "../constants/statusTypes";
import Container from "../styledComponents/Stepper";

import Step from "./Step";

export default class Stepper extends React.Component {
  constructor(props) {
    super(props);

    this.getStatus = this.getStatus.bind(this);
  }

  getStatus(currentIndex, lastCompletedIndex) {
    if (lastCompletedIndex >= currentIndex) {
      return statusTypes.COMPLETED;
    } else if (lastCompletedIndex + 1 === currentIndex) {
      return statusTypes.CURRENT;
    }

    return statusTypes.PENDING;
  }

  render() {
    return this.props.steps.map((value, index) => (
      <Container key={index}>
        <Step
          value={value}
          index={index}
          status={this.getStatus(index, this.props.completedSteps - 1)}
          onClick={this.props.onClick}
        />
      </Container>
    ));
  }

  static propTypes = {
    steps: PropTypes.arrayOf(PropTypes.string),
    completedSteps: PropTypes.number,
    onClick: PropTypes.func.isRequired
  };

  static defaultProps = {
    steps: [],
    completedSteps: 0
  };
}
