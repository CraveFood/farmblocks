import styled from "styled-components";
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
  }
`;

export default Table;
