//@flow
import * as React from "react";
import PropTypes from "prop-types";
import Button, { buttonTypes, buttonSizes } from "@crave/farmblocks-button";

import StyledAlert from "./styledComponents/Alert";
import AlertTypes from "./constants/alertTypes";

// @FIXME annotating props as Object while we dont have a way to prevent redundant type anotation.
// see issue #22
const Alert = (props: Object) => (
  <StyledAlert type={props.type}>
    <p>{props.text}</p>

    {props.dismissable && (
      <div className="dismiss-button">
        <Button
          icon="wg-close"
          size={buttonSizes.SMALL}
          type={buttonTypes.OFF_NEUTRAL}
          onClick={props.onDismiss}
        />
      </div>
    )}
  </StyledAlert>
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
