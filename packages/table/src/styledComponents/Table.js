import styled, { css } from "styled-components";
import { colors } from "@crave/farmblocks-theme";

const border = `1px solid ${colors.GREY_16}`;
const borderTop = props =>
  props.selectionHeaderVisible &&
  css`
    border-top: none;
  `;

const Table = styled.table`
  border-spacing: 0;
  border: ${props => !props.borderless && border};
  border-top: none;

  ${borderTop};
  thead .cell {
    ${borderTop};
  }

  .cell {
    box-sizing: border-box;
    height: ${props => props.rowHeight};
    border-top: ${border};
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

  .grouped > .cell {
    border-top: none;
  }

  tbody:hover {
    .cell {
      background: ${colors.SUGAR};
    }

    .grouped > .cell {
      background: ${colors.DEMERARA_SUGAR};
    }
  }

  tbody tr.clickable {
    cursor: pointer;
  }
`;

export default Table;
