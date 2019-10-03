import React from "react";
import PropTypes from "prop-types";

const PhoneInput = props => {
  return <input {...props} />;
};

PhoneInput.propTypes = {
  /** The phone number to show in the input. Should follow the [RFC3966](https://www.ietf.org/rfc/rfc3966.txt) notation.
   * E.g. `tel:+12133734253`
   */
  value: PropTypes.string,
};

export default PhoneInput;
