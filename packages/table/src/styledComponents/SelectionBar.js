import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";

const height = "64px";

const SelectionBar = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  height: ${height};
  position: relative;
  box-shadow: 0 2px 2px 0 ${colors.GREY_16};
  padding-right: 24px;
  padding-left: 24px;

  &.grow-enter {
    max-height: 1px;
    & > div {
      opacity: 0.01;
    }
  }
  &.grow-enter.grow-enter-active {
    max-height: ${height};
    overflow: hidden;
    transition: max-height 300ms ease-in-out;
    & > div {
      opacity: 1;
      transition: opacity 300ms ease-in;
    }
  }
  &.grow-leave {
    max-height: ${height};
    & > div {
      opacity: 1;
    }
  }
  &.grow-leave.grow-leave-active {
    max-height: 1px;
    overflow: hidden;
    transition: max-height 300ms ease-in-out;
    & > div {
      opacity: 0.01;
      transition: opacity 300ms ease-in;
    }
  }

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
