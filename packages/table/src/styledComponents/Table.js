import styled, { css } from "styled-components";
import { colors } from "@crave/farmblocks-theme";

const border = `1px solid ${colors.GREY_16}`;

const Table = styled.table`
  border-collapse: collapse;
  border: ${props => !props.borderless && border};
  padding: 8px 16px;

  ${props =>
    props.selectionHeaderVisible &&
    css`
      border-top: none;
    `};
  .cell {
    box-sizing: border-box;
    height: ${props => props.rowHeight};
    border-bottom: ${border};
    padding-left: 16px;

    &:last-child {
      padding-right: 16px;
    }

    /* corner icon for grouped rows */
    &.corner-icon:before {
      content: "";
      display: block;
      float: left;
      box-sizing: border-box;
      width: 8px;
      height: 8px;
      margin-top: 8px;
      margin-right: 16px;
      border-left: 2px solid ${colors.INDIGO_MILK_CAP};
      border-bottom: 2px solid ${colors.INDIGO_MILK_CAP};
    }

    /* @HACK checkbox component already have a left padding,
     so we use negative margin to keep only the table padding */
    & .checkbox {
      height: 16px;
      margin-left: -8px;
    }
  }

  tbody.collapsed tr.grouped {
    display: none;
  }

  tbody tr:hover {
    & .cell {
      background: ${colors.DEMERARA_SUGAR};
    }
  }
`;

export default Table;
