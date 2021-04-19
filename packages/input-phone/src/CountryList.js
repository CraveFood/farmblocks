import React from "react";
import PropTypes from "prop-types";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import CountryRow from "./CountryRow";
import { CountryListWrapper } from "./PhoneInput.styled";

const CountryList = React.forwardRef(({ data }, ref) => (
  <CountryListWrapper>
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          itemCount={data.items.length}
          itemData={data}
          itemKey={(index) => data.items[index].code}
          itemSize={54}
          width={width}
          ref={ref}
        >
          {CountryRow}
        </List>
      )}
    </AutoSizer>
  </CountryListWrapper>
));

CountryList.propTypes = {
  data: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.string,
      }),
    ),
  }),
};

export default CountryList;
