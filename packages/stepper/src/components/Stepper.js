import * as React from "react";
import PropTypes from "prop-types";

import statusTypes from "../constants/statusTypes";
import Container from "../styledComponents/Stepper";

import Step from "./Step";

export default class Stepper extends React.Component {
  render() {
    return this.props.steps.map((item, key) => (
      <Container key={key}>
        <Step item={item} onClick={this.props.onClick} />
      </Container>
    ));
  }

  static propTypes = {
    steps: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        status: PropTypes.oneOf(Object.keys(statusTypes)).isRequired
      })
    ),
    onClick: PropTypes.func
  };

  static defaultProps = {
    steps: []
  };
}
