import React, { memo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { areEqual } from "react-window";
import emojiSupport from "detect-emoji-support";
import { DropdownItemWrapper } from "@crave/farmblocks-dropdown";
import { Item } from "@crave/farmblocks-input-select";

const SubtleText = styled.span`
  opacity: 0.5;
  margin: 0 0.3em;
`;

const CountryRow = memo(({ index, style, data: { items, handler } }) => {
  const country = items[index];
  return (
    <DropdownItemWrapper onClick={() => handler(country.code)} style={style}>
      <Item
        label={
          <>
            {emojiSupport() ? country.flag : country.code}
            <SubtleText>+{country.callingCode}</SubtleText>
            {country.name}
            {country.nativeNames && (
              <SubtleText>{country.nativeNames}</SubtleText>
            )}
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
    handler: PropTypes.func,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        flag: PropTypes.string,
        name: PropTypes.string,
        code: PropTypes.string,
        callingCode: PropTypes.string,
        nativeNames: PropTypes.string,
      }),
    ),
  }),
};

export default CountryRow;
