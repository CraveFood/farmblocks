import React, { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import {
  parsePhoneNumberFromString,
  parseDigits,
  formatIncompletePhoneNumber,
  getCountryCallingCode,
} from "libphonenumber-js";
import TextInput from "@crave/farmblocks-input-text";

/**
 * This component uses the [libphonenumber-js](https://github.com/catamphetamine/libphonenumber-js) library to convert phone numbers typed in their national standard to the [RFC3966](https://www.ietf.org/rfc/rfc3966.txt) notation.
 */
const PhoneInput = ({ value, defaultCountry, onChange, ...props }) => {
  const phone = useMemo(() => parsePhoneNumberFromString(value), [value]);
  const handleChange = useCallback(
    ({ target }) => {
      const newValue = parseDigits(target?.value);
      onChange(parsePhoneNumberFromString(newValue, defaultCountry).getURI());
    },
    [defaultCountry],
  );
  return (
    <TextInput
      prefix={`+${getCountryCallingCode(phone?.country || defaultCountry)}`}
      value={formatIncompletePhoneNumber(phone?.nationalNumber, defaultCountry)}
      onChange={handleChange}
      {...props}
    />
  );
};

PhoneInput.defaultProps = {
  value: "",
  defaultCountry: "US",
};

PhoneInput.propTypes = {
  /**
   * The phone number to show in the input. Should follow the RFC3966 notation.
   * E.g. "tel:+12133734253"
   */
  value: PropTypes.string,

  /**
   * Code for the Country selected by default, when `value` is empty
   */
  defaultCountry: PropTypes.string,

  /**
   * Countries to show at the top of the list, like the ones with your
   * biggest user base, so most users can easily select their country
   * without the need to search in the full list.
   * Use a string of country codes separated by colons `,`.
   */
  priorityCountries: PropTypes.string,

  /**
   * Function called with the new value after a user interaction.
   * Will return the phone number formated in the RFC3966 notation.
   */
  onChange: PropTypes.func,
};

export default PhoneInput;
