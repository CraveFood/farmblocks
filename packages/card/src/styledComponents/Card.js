import styled from "styled-components";
import { space } from "styled-system";
import { colors } from "@crave/farmblocks-theme";

import { cardTypes, cardTypeColors } from "../constants/cardTypes";

const boxShadow = props => {
  if (props.boxShadow) {
    return props.boxShadow;
  }

  return props.floating
    ? `0 4px 4px 0 ${colors.GREY_08}`
    : `0 1px 1px 0 ${colors.GREY_08}`;
};

const backgroundColor = props => {
  return Object.keys(cardTypeColors).includes(props.type)
    ? cardTypeColors[props.type]
    : cardTypeColors[cardTypes.DEFAULT];
};

const Card = styled.div`
  background-color: ${backgroundColor};
  box-shadow: ${boxShadow};
  border: solid 1px ${colors.GREY_08};
  width: ${props => props.width};
  box-sizing: border-box;
  border-radius: 4px;
  overflow: ${props => props.overflow};
  ${space}
`;

export default Card;
