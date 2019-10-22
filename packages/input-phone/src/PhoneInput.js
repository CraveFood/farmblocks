import React, {
  useMemo,
  useCallback,
  useState,
  useRef,
  useEffect,
} from "react";
import PropTypes from "prop-types";
import {
  parsePhoneNumberFromString,
  parseDigits,
  formatIncompletePhoneNumber,
  getCountryCallingCode,
} from "libphonenumber-js";
import TextInput from "@crave/farmblocks-input-text";
import { fontSizes } from "@crave/farmblocks-theme";
import Popover from "@crave/farmblocks-popover";
import { FormWrapperHeader } from "@crave/farmblocks-form-wrapper";

import { countries, flags } from "./countries";
import CountrySelectorTrigger from "./CountrySelectorTrigger";
import CountryList from "./CountryList";
import { useCountrySearch, useHighlight } from "./PhoneInput.hooks";
import { PopoverWrapper, NationalNumberInput } from "./PhoneInput.styled";

const fullScreenBreakpoint = "500px";

/**
 * This component uses the [libphonenumber-js](https://github.com/catamphetamine/libphonenumber-js)
 * library to convert phone numbers typed in their national standard to the
 * [RFC3966](https://www.ietf.org/rfc/rfc3966.txt) notation.
 */
const PhoneInput = ({
  value,
  defaultCountry,
  onChange,
  textSelectCountryTitle,
  textSelectCountryCancel,
  textSelectCountrySearch,
  priorityCountries,
  disabled,
  tooltipProps,
  ...props
}) => {
  const dismissRef = useRef();
  const listRef = useRef();
  const searchInputRef = useRef();
  const numberInputRef = useRef();

  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [countryQuery, setCountryQuery] = useState("");

  const phone = useMemo(() => parsePhoneNumberFromString(value), [value]);

  const country = useMemo(
    () => phone?.country || selectedCountry || defaultCountry,
    [phone, selectedCountry, defaultCountry],
  );
  const filteredCountries = useCountrySearch(
    countries,
    countryQuery,
    priorityCountries,
  );

  useEffect(() => {
    if (!value) {
      setSelectedCountry(null);
    }
  }, [value]);

  const triggerChange = useCallback(
    (number, code = country) => {
      onChange?.(
        parsePhoneNumberFromString(number, code)?.getURI() ||
          `tel:+${getCountryCallingCode(code)}${number}`,
      );
    },
    [country, onChange],
  );

  const handleNumberChange = useCallback(
    ({ target }) => {
      const newValue = parseDigits(target?.value);
      triggerChange(newValue);
    },
    [country],
  );

  const handleCountrySelection = useCallback(code => {
    setSelectedCountry(code);
    setCountryQuery("");
    triggerChange("", code);
    dismissRef.current?.();
  }, []);

  const { handleKeyDown, highlightIndex, resetIndex } = useHighlight({
    items: filteredCountries,
    listRef,
    selectFn: handleCountrySelection,
    cancelFn: dismissRef.current,
  });

  const handleSearchChange = useCallback(event => {
    setCountryQuery(event.target.value);
    resetIndex();
    listRef.current?.scrollTo(0);
  }, []);

  const handlePopoverOpen = useCallback(() => {
    setPopoverOpen(true);
    resetIndex();
    setImmediate(() => {
      searchInputRef.current?.focus?.();
    });
  }, []);
  const handlePopoverClose = useCallback(() => {
    setPopoverOpen(false);
    setImmediate(() => {
      numberInputRef.current?.focus?.();
    });
  }, []);

  const listData = useMemo(
    () => ({
      items: filteredCountries,
      handler: handleCountrySelection,
      highlightIndex,
    }),
    [filteredCountries, highlightIndex],
  );

  return (
    <NationalNumberInput
      innerRef={numberInputRef}
      prefix={
        <Popover
          onOpen={handlePopoverOpen}
          onClose={handlePopoverClose}
          tooltipProps={{
            padding: "0",
            fullScreenBreakpoint,
            ...tooltipProps,
          }}
          disabled={disabled}
          trigger={
            <CountrySelectorTrigger
              disabled={disabled}
              callingCode={getCountryCallingCode(country)}
              flag={flags[country]}
              code={country}
            />
          }
          content={dismiss => {
            dismissRef.current = dismiss;
            return (
              <PopoverWrapper
                onClick={event => {
                  // We stop propagation to avoid giving focus to the main input
                  // This happens because the popover is inside the input wrapper
                  event.stopPropagation();
                }}
              >
                <FormWrapperHeader
                  title={textSelectCountryTitle}
                  cancelLabel={textSelectCountryCancel}
                  onCancel={dismiss}
                />
                <TextInput
                  placeholder={textSelectCountrySearch}
                  type="search"
                  fontSize={fontSizes.SMALL}
                  margin="8px"
                  value={countryQuery}
                  onChange={handleSearchChange}
                  onKeyDown={handleKeyDown}
                  innerRef={searchInputRef}
                  data-testid="country-search-input"
                />
                <CountryList ref={listRef} data={listData} />
              </PopoverWrapper>
            );
          }}
        />
      }
      active={popoverOpen}
      value={formatIncompletePhoneNumber(phone?.format("NATIONAL"), country)}
      onChange={handleNumberChange}
      inputMode="tel"
      disabled={disabled}
      {...props}
      data-testid="national-number-input"
    />
  );
};

PhoneInput.defaultProps = {
  value: "",
  defaultCountry: "US",
  textSelectCountryTitle: "Select Country",
  textSelectCountryCancel: "Cancel",
  textSelectCountrySearch: "Search",
  disabled: false,
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
   * Use a string of country codes separated by colons. E.g. `"US,CA,BR"`.
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

  /**
   * Text for the search field of the country selection popover
   */
  textSelectCountrySearch: PropTypes.string,

  /**
   * Displays the input greyed out and prevents edition
   */
  disabled: PropTypes.bool,

  /**
   * Props to be passed to the Tooltip component
   */
  tooltipProps: PropTypes.object,
};

export default PhoneInput;
