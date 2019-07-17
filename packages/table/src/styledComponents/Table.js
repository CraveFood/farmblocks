import styled, { css } from "styled-components";
import { transparentize } from "polished";
import { colors } from "@crave/farmblocks-theme";

const hoverBgColor = transparentize(0.94, colors.INDIGO_MILK_CAP);
const hoverChildBgColor = transparentize(0.9, colors.BLUE_CORN);

// Equivalent to GREY_16 over white
// Semi-transparent borders don't work well with colSpan
const borderColor = "#d3dadc";

const border = `1px solid ${borderColor}`;
const borderTop = props =>
  props.selectionHeaderVisible &&
  css`
    border-top: none;
  `;

const Table = styled.table`
  border-collapse: separate;
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
    padding-top: 8px;
    padding-bottom: 8px;
  }

  tbody:hover {
    .cell {
      background: ${hoverBgColor};
    }

    .grouped > .cell {
      background: ${hoverChildBgColor};
    }
  }

  tbody tr.clickable {
    cursor: pointer;
  }
`;

export default Table;
