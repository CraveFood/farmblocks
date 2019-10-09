import React, { memo } from "react";
import PropTypes from "prop-types";
import { areEqual } from "react-window";
import { DropdownItemWrapper } from "@crave/farmblocks-dropdown";
import { Item } from "@crave/farmblocks-input-select";

const CountryRow = memo(({ index, style, data }) => {
  const country = data[index];
  return (
    <DropdownItemWrapper style={style}>
      <Item
        label={
          <>
            {country.flag}+{country.callingCode} {country.name}{" "}
            {country.nativeNames && `(${country.nativeNames})`}
          </>
        }
      />
    </DropdownItemWrapper>
  );
}, areEqual);

CountryRow.propTypes = {
  index: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  data: PropTypes.shape({
    flag: PropTypes.string,
    name: PropTypes.string,
    callingCode: PropTypes.string,
    nativeNames: PropTypes.string,
  }),
};

export default CountryRow;
