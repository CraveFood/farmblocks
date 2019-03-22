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
    padding: 16px 0 16px 16px;

    &:last-child {
      padding-right: 16px;
    }

    &.corner-icon {
      position: relative;
      padding-left: 40px;
    }

    /* corner icon for grouped rows */
    &.corner-icon:before {
      content: "";
      float: left;
      box-sizing: border-box;
      width: 8px;
      height: 8px;
      border-left: 2px solid ${colors.INDIGO_MILK_CAP};
      border-bottom: 2px solid ${colors.INDIGO_MILK_CAP};
      position: absolute;
      top: calc(50% - 3px);
      left: 16px;
    }

    & .checkbox {
      height: 16px;

      label {
        /*  Increase the hit area of the checkbox
            This is important for tables with onRowClick */
        padding: 8px;
        margin: -8px;
      }
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

  tbody tr.clickable {
    cursor: pointer;
  }
`;

export default Table;
