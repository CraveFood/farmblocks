import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";
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
  }
`;

export const TH = styled(Text).attrs({
  as: "th",
})`
  border: solid ${colors.GREY_08};
  border-width: 1px 0;
  padding: 8px 24px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  background-color: ${colors.SUGAR};

  white-space: nowrap;
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
TD.defaultProps = {
  truncate: true,
};

export const TDBold = styled(TD)`
  font-weight: 700;
  color: ${colors.CARBON};
`;
