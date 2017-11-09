import * as React from "react";
import PropTypes from "prop-types";

import statusTypes from "../constants/statusTypes";
import Container from "../styledComponents/Stepper";

import Step from "./Step";

export default class Stepper extends React.Component {
  constructor(props) {
    super(props);

    this.getStatus = this.getStatus.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  getStatus(currentIndex, lastCompletedIndex) {
    if (lastCompletedIndex >= currentIndex) {
      return statusTypes.COMPLETED;
    } else if (lastCompletedIndex + 1 === currentIndex) {
      return statusTypes.CURRENT;
    }

    return statusTypes.PENDING;
  }

  onClick(status, index, value) {
    const isCurrentStep = status === statusTypes.CURRENT;

    if (!isCurrentStep) {
      return;
    }

    this.props.onClick({ index, value });
  }

  render() {
    const steps = this.props.steps.map((value, index) => {
      const status = this.getStatus(index, this.props.completedSteps - 1);
      return (
        <Container key={index}>
          <Step
            status={status}
            onClick={event => this.onClick(status, index, value)}
          >
            {value}
          </Step>
        </Container>
      );
    });

    return <div>{steps}</div>;
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
