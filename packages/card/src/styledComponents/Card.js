import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";
import { cardTypes, cardTypeColors } from "../constants/cardTypes";

const boxShadow = props =>
  props.floating
    ? `0 4px 4px 0 ${colors.GREY_16}`
    : `0 1px 1px 0 ${colors.GREY_16}`;

const backgroundColor = props => {
  return Object.keys(cardTypeColors).includes(props.type)
    ? cardTypeColors[props.type]
    : cardTypeColors[cardTypes.DEFAULT];
};

const width = props => props.width || "100%";

const padding = props => props.padding || "16px";

const Card = styled.div`
  background-color: ${backgroundColor};
  box-shadow: ${boxShadow};
  border: solid 1px ${colors.GREY_16};
  width: ${width};
  padding: ${padding};
  box-sizing: border-box;
  border-radius: 4px;
`;

export default Card;
