//@flow
import type { StatelessFunctionalComponent } from "react";
import type { AlertType } from "./AlertTypes";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import AlertTypes from "./AlertTypes";

const DismissButton = ({ onClick, className }) => {
  const buttonAttributes = onClick ? { onClick, className } : { className };
  return <button {...buttonAttributes} />;
};

const ThemedDismissButton = styled(DismissButton)`
  position: absolute;
  top: 50%;
  margin-top: -16px;
  right: 24px;
  width: 32px;
  height: 32px;
  border-radius: 2.7px;
  background-color: rgba(0, 0, 0, 0.16);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.16);
  border: solid 0.7px rgba(0, 0, 0, 0.16);
`;

const bgColors = {
  [AlertTypes.NEWS]: "#3498db",
  [AlertTypes.POSITIVE]: "#2ecc71",
  [AlertTypes.NEGATIVE]: "#dd3311",
  [AlertTypes.ATTENTION]: "#f1c618"
};

const Alert: StatelessFunctionalComponent = (props: AlertProps) => {
  const { dismissable, onDismiss, ...other } = props;
  const buttonAttributes = onDismiss ? { onClick: onDismiss } : {};
  const dismissButton = dismissable ? (
    <ThemedDismissButton {...buttonAttributes} />
  ) : null;
  // return <ThemedBaseAlert {...props} />;
  const ThemedAlert = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: ${props => bgColors[props.type]};
    box-shadow: 0 2px 2px 0 rgba(46, 204, 113, 0.16);
    border: solid 1px rgba(0, 0, 0, 0.16);
    min-height: ${2 * 20 + 32}px;

    > p {
      color: white;
    }
  `;
  return (
    <ThemedAlert type={props.type}>
      <p>{props.text}</p>
      {dismissButton}
    </ThemedAlert>
  );
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
