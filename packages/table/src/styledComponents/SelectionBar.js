import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";

const SelectionBar = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  height: 64px;
  position: relative;
  box-shadow: 0 2px 2px 0 ${colors.GREY_16};
  padding-right: 24px;
  padding-left: 24px;

  .title {
    margin-right: auto;
  }

  .clear {
    margin-right: ${props => (props.hasActions ? "24px" : "0")};
  }

  .actions {
    display: flex;
  }

  .primaryButton {
    margin-left: ${props => (props.hasSecondaryButton ? "8px" : "0")};
  }
`;

export default SelectionBar;
