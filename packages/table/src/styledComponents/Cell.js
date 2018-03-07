import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";

const textAlign = props => props.align || "left";

export const HeaderCell = styled.th`
  text-align: ${textAlign};
  background-color: ${colors.SUGAR};
  height: 40px !important;
  & .link {
    /* @TODO why aren't links display inline by default?? :) */
    display: inline-block;
    cursor: pointer;
  }
  & .icon {
    color: ${colors.GREY_16};
    font-size: 12px;
    margin-left: 8px;
  }
`;
export const BodyCell = styled.td`
  text-align: ${textAlign};
  background-color: ${props => (props.selected ? "white" : colors.SUGAR)};
  cursor: ${props => props.onClick && "pointer"};
`;
