//@flow
import type { StatelessFunctionalComponent, Node } from "react";
import type { AlertType } from "./AlertTypes";
import React from "react";
import AlertTypes from "./AlertTypes";

type AlertComponent = StatelessFunctionalComponent<{
  text: string,
  type?: AlertType,
  onDismiss?: Function
}>;
const Alert: AlertComponent = ({
  text,
  type = AlertTypes.NEWS,
  onDismiss = null
}) => {
  const buttonAttributes = onDismiss ? { onClick: onDismiss } : {};
  const dismissButton = onDismiss ? (
    <DefaultDismissButton {...buttonAttributes} />
  ) : null;
  const props = { text, dismissButton };
  return <BaseAlert {...props} />;
};

type BaseAlertComponent = StatelessFunctionalComponent<{
  text: string,
  dismissButton: Node
}>;
const BaseAlert: BaseAlertComponent = ({ text, dismissButton }) => {
  const textElement = text ? <p>text</p> : null;
  return (
    <div>
      {textElement}
      {dismissButton}
    </div>
  );
};

type DefaultDismissButtonComponent = StatelessFunctionalComponent<{
  onClick: Function
}>;
const DefaultDismissButton: DefaultDismissButtonComponent = ({ onClick }) => {
  const buttonAttributes = onClick ? { onClick } : {};
  return <button {...buttonAttributes} />;
};

export default Alert;
