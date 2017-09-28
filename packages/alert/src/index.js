//@flow
import React from "react";
import type { StatelessFunctionalComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import type { AlertType } from "./constants/alertTypes";
import Container from "./styledComponents/Container";
import DismissButton from "./styledComponents/DismissButton";
import AlertTypes from "./constants/alertTypes";

const Alert: StatelessFunctionalComponent = (props: AlertProps) => (
  <Container type={props.type}>
    <p>{props.text}</p>

    {props.dismissable && (
      <DismissButton onClick={props.onDismiss}>X</DismissButton>
    )}
  </Container>
);

type AlertProps = {
  text: string,
  type?: AlertType,
  dismissable?: boolean,
  onDismiss?: Function
};

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
