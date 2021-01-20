import styled from "styled-components";
import { colors, fontSizes, fontWeights } from "@crave/farmblocks-theme";
import Text from "@crave/farmblocks-text";

export const Table = styled.table.attrs(props => ({
  className: `${props.className || ""} ${
    props.$columnsTemplate ? "__asGrid" : ""
  }`,
}))`
  min-width: 100%;
  overflow-x: scroll;

  border: none;
  border-spacing: 0;

  @supports (display: contents) {
    &.__asGrid {
      display: grid;
      grid-template-columns: ${({ $columnsTemplate }) => $columnsTemplate};
    }
  }

  tr:hover td {
    background-color: ${colors.SUGAR};
  }
`;

export const THead = styled.thead`
  .__asGrid & {
    display: contents;
  }
`;

export const TBody = styled.tbody`
  .__asGrid & {
    display: contents;
  }
`;

export const TR = styled.tr`
  .__asGrid & {
    display: contents;
    height: 64px;
  }
`;

export const TH = styled(Text)`
  border: solid ${colors.GREY_08};
  border-width: 0 0 1px;
  padding: 8px 16px;
  line-height: 1.5;

  white-space: nowrap;
`;
TH.defaultProps = {
  as: "th",
  fontSize: fontSizes.SMALL,
  fontWeight: fontWeights.SEMIBOLD,
};

export const TD = styled(Text).attrs(props => ({
  type: props.color,
}))`
  border-bottom: 1px solid ${colors.GREY_08};
  padding: 8px 16px;
  line-height: 1.5;
  height: 64px;

  transition: background-color 0.2s ease-in-out;
`;
TD.defaultProps = {
  as: "td",
  truncate: true,
  fontSize: fontSizes.MEDIUM,
  color: colors.OYSTER,
};

export const TDBold = styled(TD)`
  font-weight: 700;
  color: ${colors.CARBON};
`;
