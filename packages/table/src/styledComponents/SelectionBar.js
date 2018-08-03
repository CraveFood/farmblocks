import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";

const SelectionBar = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  height: ${props => props.height};
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
    max-height: ${props => props.height};
    overflow: hidden;
    transition: max-height 300ms ease-in-out;
    & > div {
      opacity: 1;
      transition: opacity 300ms ease-in;
    }
  }
  &.grow-leave {
    max-height: ${props => props.height};
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
    flex: 1;
  }

  .actions {
    margin-left: 24px;
    display: flex;
  }
`;

export default SelectionBar;
