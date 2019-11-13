import * as React from "react";
import PropTypes from "prop-types";

import statusTypes from "../constants/statusTypes";
import Container from "../styledComponents/Stepper";

import Step from "./Step";

export default class Stepper extends React.Component {
  getStatus = (currentIndex, lastCompletedIndex) => {
    if (lastCompletedIndex >= currentIndex) {
      return statusTypes.COMPLETED;
    }
    if (lastCompletedIndex + 1 === currentIndex) {
      return statusTypes.CURRENT;
    }

    return statusTypes.PENDING;
  };

  onClick = (status, index, value) => {
    const isCurrentStep = status === statusTypes.CURRENT;

    if (!isCurrentStep) {
      return;
    }

    this.props.onClick({ index, value });
  };

  render() {
    const steps = this.props.steps.map((value, index) => {
      const status = this.getStatus(index, this.props.completedSteps - 1);
      return (
        <Container className="stepContainer" key={value}>
          <Step
            className={`step ${status.toLowerCase()}`}
            status={status}
            onClick={() => this.onClick(status, index, value)}
          >
            {value}
          </Step>
        </Container>
      );
    });

    return <div className={this.props.className}>{steps}</div>;
  }
}

Stepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string),
  completedSteps: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Stepper.defaultProps = {
  steps: [],
  completedSteps: 0,
};
