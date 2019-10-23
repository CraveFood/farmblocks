import styled, { css } from "styled-components";
import { colors } from "@crave/farmblocks-theme";
import { transparentize } from "polished";

import { FULLSCREEN } from "../../constants/variants";

const isFullScreen = variant => variant === FULLSCREEN;
const GREY_48 = "rgba(0, 0, 0, 0.48)";

const fullScreenStyle = css`
  border-radius: 90px;
  padding: 8px 16px;

  &:hover,
  &.active {
    color: ${({ highlightColor }) => highlightColor};
  }

  &.active {
    padding-left: 16px;
    border-left: none;
  }
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 8px;
  cursor: pointer;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${GREY_48};

  .thumb-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    min-width: 40px;
    margin-right: 8px;
  }

  .icon {
    font-size: ${({ iconSize }) => iconSize};
    color: ${GREY_48};
  }

  &:hover,
  &.active {
    color: ${colors.CARBON};
    background-color: ${({ highlightColor }) =>
      transparentize(0.96, highlightColor)};
    .icon {
      color: ${({ highlightColor }) => highlightColor};
    }
  }

  &.active {
    padding-left: 4px;
    border-left: 4px solid ${({ highlightColor }) => highlightColor};
  }

  ${({ variant }) => isFullScreen(variant) && fullScreenStyle}
`;

export default NavItem;
