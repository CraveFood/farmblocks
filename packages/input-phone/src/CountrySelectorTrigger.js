import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import emojiSupport from "detect-emoji-support";

import ChevronDown from "./ChevronDown";

const Trigger = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`;

const CountrySelectorTrigger = React.memo(
  ({ callingCode, flag, code, ...props }) => {
    return (
      <Trigger {...props}>
        {emojiSupport() ? flag : code} +{callingCode}
        <ChevronDown />
      </Trigger>
    );
  },
);

CountrySelectorTrigger.propTypes = {
  flag: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  callingCode: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default CountrySelectorTrigger;
