import React, { useMemo, useCallback, useState } from "react";
import PropTypes from "prop-types";
import {
  parsePhoneNumberFromString,
  parseDigits,
  formatIncompletePhoneNumber,
  getCountryCallingCode,
} from "libphonenumber-js";
import TextInput from "@crave/farmblocks-input-text";
import Popover from "@crave/farmblocks-popover";
import FormWrapper from "@crave/farmblocks-form-wrapper";

import CountrySelectorTrigger from "./CountrySelectorTrigger";

/**
 * This component uses the [libphonenumber-js](https://github.com/catamphetamine/libphonenumber-js) library to convert phone numbers typed in their national standard to the [RFC3966](https://www.ietf.org/rfc/rfc3966.txt) notation.
 */
const PhoneInput = ({
  value,
  defaultCountry,
  onChange,
  textSelectCountryTitle,
  textSelectCountryCancel,
  ...props
}) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const phone = useMemo(() => parsePhoneNumberFromString(value), [value]);
  const country = phone?.country || defaultCountry;

  const handleChange = useCallback(
    ({ target }) => {
      const newValue = parseDigits(target?.value);
      onChange(parsePhoneNumberFromString(newValue, country).getURI());
    },
    [defaultCountry],
  );
  return (
    <>
      <TextInput
        prefix={
          <Popover
            onOpen={() => setPopoverOpen(true)}
            onClose={() => setPopoverOpen(false)}
            tooltipProps={{
              padding: "0",
            }}
            trigger={
              <CountrySelectorTrigger
                countryCode={getCountryCallingCode(country)}
              />
            }
            content={() => (
              <FormWrapper
                title={textSelectCountryTitle}
                cancelLabel={textSelectCountryCancel}
              />
            )}
          />
        }
        active={popoverOpen}
        value={formatIncompletePhoneNumber(phone?.nationalNumber, country)}
        onChange={handleChange}
        inputMode="tel"
        css="
          .input {
            overflow: unset;
          }
          .prefix {
            padding: 0;
            align-items: stretch;

            .popover__trigger {
              height: 100%;
              outline: none;
            }
          }
        "
        {...props}
      />
    </>
  );
};

PhoneInput.defaultProps = {
  value: "",
  defaultCountry: "US",
  textSelectCountryTitle: "Select Country",
  textSelectCountryCancel: "Cancel",
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

  /**
   * Text for the title of the country selection popover
   */
  textSelectCountryTitle: PropTypes.string,

  /**
   * Text for the cancel button of the country selection popover
   */
  textSelectCountryCancel: PropTypes.string,
};

export default PhoneInput;
