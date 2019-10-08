import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";
import { transparentize } from "polished";

export const Sidebar = styled.nav`
  * {
    box-sizing: border-box;
  }
  position: fixed;
  bottom: 0;
  left: 0;
  overflow-x: hidden;
  transition: width 0.25s;
  transition-timing-function: ease-in-out;
  top: ${({ offsetTop }) => offsetTop};
  background-color: ${({ background }) => background};
  box-shadow: 0px 2px 2px 0px ${colors.GREY_32};
  z-index: ${({ zIndex }) => zIndex};
  width: ${({ collapsedWidth }) => collapsedWidth};
  ${({ expanded, expandedWidth }) => expanded && `width: ${expandedWidth};`}
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  list-style-type: none;
  cursor: pointer;
  color: ${colors.GREY_48};
  ${({ background }) => `background-color: ${background};`}

  .thumb-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    min-width: 40px;
    margin-right: 8px;
  }

  .icon {
    font-size: 24px;
    color: ${colors.GREY_48};
  }

  &:hover,
  &.activated {
    color: ${colors.CARBON};
    background-color: ${({ highlightColor }) =>
      transparentize(0.96, highlightColor)};
    .icon {
      color: ${({ highlightColor }) => highlightColor};
    }
  }

  &.activated {
    padding-left: 4px;
    border-left: 4px solid ${({ highlightColor }) => highlightColor};
  }
`;

export const IconButton = styled.div`
  box-sizing: border-box;
  color: ${({ active, highlightColor }) =>
    active ? highlightColor : colors.GREY_48};
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  height: 40px;
  width: 40px;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: ${({ highlightColor }) =>
      transparentize(0.92, highlightColor)};
    color: ${({ highlightColor }) => highlightColor};
  }
`;

export default {
  Sidebar,
  Item,
  IconButton,
};
