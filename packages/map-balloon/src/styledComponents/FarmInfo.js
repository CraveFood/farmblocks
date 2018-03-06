import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Text, { fontSizes, fontTypes } from "@crave/farmblocks-text";

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  min-width: 48px;
  margin: 8px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  background-color: #f6f8f9;
`;

const FarmInfo = ({ name }) => (
  <Container>
    <Icon>
      <Text type={fontTypes.NEUTRAL} size={fontSizes.HUGE}>
        <i className="wg-purveyor" />
      </Text>
    </Icon>
    <Text type={fontTypes.NEUTRAL} size={fontSizes.HUGE}>
      {name}
    </Text>
  </Container>
);
FarmInfo.propTypes = {
  name: PropTypes.string
};

export default FarmInfo;
