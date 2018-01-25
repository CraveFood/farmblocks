import styled, { css } from "styled-components";
import { colors } from "@crave/farmblocks-theme";

const border = `1px solid ${colors.GREY_16}`;

const Table = styled.table`
  border-collapse: collapse;
  border: ${border};
  padding: 8px 16px;

  .cell {
    box-sizing: border-box;
    height: ${props => props.rowHeight};
    border-bottom: ${border};
    padding-left: 16px;

    &:last-child {
      padding-right: 16px;
    }

    /* @HACK checkbox component already have a left padding,
     so we use negative margin to keep only the table padding */
    & .checkbox {
      margin-left: -8px;
    }
  }

  .body .cell {
    ${props =>
      props.emptySelection && css`background-color: white !important;`};
  }
`;

export default Table;
