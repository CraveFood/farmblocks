import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";

const textAlign = props => props.align || "left";

export const HeaderCell = styled.th`
  background-color: ${colors.SUGAR};
  height: 40px !important;
`;
export const BodyCell = styled.td`
  text-align: ${textAlign};
  background-color: white;
`;
