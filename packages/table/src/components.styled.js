import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";
import Text from "@crave/farmblocks-text";

export const Table = styled.table`
  border: none;
  border-spacing: 0;
`;

export const THead = styled.thead`
  background-color: ${colors.SUGAR};
`;

export const TBody = styled.tbody``;

export const TR = styled.tr``;

export const TH = styled(Text).attrs({
  as: "th",
})`
  border: solid ${colors.GREY_08};
  border-width: 1px 0;
  padding: 8px 24px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
`;

export const TD = styled(Text).attrs({
  as: "td",
})`
  border-bottom: 1px solid ${colors.GREY_08};
  padding: 16px 24px;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.OYSTER};
`;

export const TDBold = styled(TD)`
  font-weight: 700;
  color: ${colors.CARBON};
`;
