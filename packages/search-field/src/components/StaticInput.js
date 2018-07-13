import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 46px;
  padding: 0 16px;
  display: flex;
  align-items: center;
`;

export default class StaticInput extends React.Component {
  // This is not a stateless functional component because SearchField uses this with ref

  render() {
    return <Container>{this.props.value}</Container>;
  }
  static propTypes = {
    value: PropTypes.string
  };
}
