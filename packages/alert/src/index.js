//@flow
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Container from "./styledComponents/Container";
import DismissButton from "./styledComponents/DismissButton";
import AlertTypes from "./constants/alertTypes";

// @FIXME annotating props as Object while issue #22 is not fixed
const Alert = (props: Object) => (
  <Container type={props.type}>
    <p>{props.text}</p>

    {props.dismissable && (
      <DismissButton onClick={props.onDismiss}>X</DismissButton>
    )}
  </Container>
);

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(AlertTypes)),
  dismissable: PropTypes.bool,
  onDismiss: PropTypes.func
};

Alert.defaultProps = {
  type: AlertTypes.NEWS,
  dismissable: true,
  onDismiss: () => null
};

export default Alert;
