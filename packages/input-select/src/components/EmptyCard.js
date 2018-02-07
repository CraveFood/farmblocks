import * as React from "react";
import PropTypes from "prop-types";
import Image, { badgeSizes } from "@crave/farmblocks-image";
import Text from "@crave/farmblocks-text";
import Card from "@crave/farmblocks-card";
import styled from "styled-components";

import helperSrc from "../constants/helperIcon";

const CardWrapper = styled(Card)`
  margin-top: 16px;
  display: flex;

  .centered {
    align-self: center;
    margin-left: 10px;
  }
`;

const EmptyCard = ({ noResultsMessage }) => (
  <CardWrapper type="NEUTRAL">
    <Image src={helperSrc} badge size={badgeSizes.MEDIUM} />
    <Text className="centered">{noResultsMessage}</Text>
  </CardWrapper>
);

EmptyCard.defaultProps = {
  noResultsMessage: "No results found"
};

EmptyCard.propTypes = {
  noResultsMessage: PropTypes.string
};

CardWrapper.displayName = "EmptyCard";

export default EmptyCard;
