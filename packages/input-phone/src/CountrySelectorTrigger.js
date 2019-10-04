import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ChevronDown from "./ChevronDown";

const Trigger = styled.div`
  padding: 0 4px 0 8px;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CountrySelectorTrigger = ({ countryCode, ...props }) => {
  return (
    <Trigger {...props}>
      +{countryCode}
      <ChevronDown />
    </Trigger>
  );
};

CountrySelectorTrigger.propTypes = {
  countryCode: PropTypes.string.isRequired,
};

export default CountrySelectorTrigger;
