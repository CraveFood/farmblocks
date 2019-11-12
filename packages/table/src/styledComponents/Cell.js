import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";

const cellBg = props => {
  return props.grouped ? colors.SUGAR : "white";
};

export const HeaderCell = styled.th`
  text-align: ${props => props.align};
  background-color: ${colors.SUGAR};
  height: 40px !important;
  white-space: ${props => props.whiteSpace};
  & .link {
    /* @TODO why aren't links display inline by default?? :) */
    display: inline-block;
    cursor: pointer;
  }
  & .icon {
    color: ${colors.GREY_16};
    font-size: 24px;
    vertical-align: bottom;
  }
`;
export const BodyCell = styled.td`
  text-align: ${props => props.align};
  background-color: ${cellBg};
  white-space: ${props => props.whiteSpace};
`;
