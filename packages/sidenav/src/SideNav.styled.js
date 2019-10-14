import styled, { css } from "styled-components";
import { colors } from "@crave/farmblocks-theme";
import { transparentize } from "polished";

import { FULLWIDTH, PUSH, OVERLAY } from "./constants/variants";

export const GREY_48 = "rgba(0, 0, 0, 0.48)";

// Sidebar variant style
const sideBarFullWidth = css`
  top:0;
  ${({ expanded }) => expanded && "padding: 16px;"}
  width: ${({ expanded }) => (expanded ? "100%" : "0px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  backdrop-filter: blur(5px);
  opacity: 0.9;
`;

const sideBarOverlay = css`
  width: ${({ expanded, expandedWidth }) => (expanded ? expandedWidth : "0px")};
`;

const sideBarPush = css`
  width: ${({ expanded, collapsedWidth, expandedWidth }) =>
    expanded ? expandedWidth : collapsedWidth};
`;

// NavItem variant style
const navItemFullWidth = css`
  border-radius: 90px;
  padding: 8px 16px;

  &:hover,
  &.activated {
    color: ${({ highlightColor }) => highlightColor && highlightColor};
  }

  &.activated {
    padding-left: 16px;
    border-left: none;
  }
`;

// Content variant style
const contentOverlay = css`
  transition: 0.3s;
  ${({ expanded }) => expanded && `background-color:${colors.GREY_16};`};
`;

const contentPush = css`
  transition: margin 0.25s;
  transition-timing-function: ease-in-out;
  margin-left: ${({ expanded, collapsedWidth, expandedWidth }) =>
    expanded ? expandedWidth : collapsedWidth};
`;

// variant theme
const sideNavTheme = {
  [FULLWIDTH]: {
    sidebar: sideBarFullWidth,
    navitem: navItemFullWidth,
    content: "",
  },
  [OVERLAY]: { sidebar: sideBarOverlay, navitem: "", content: contentOverlay },
  [PUSH]: { sidebar: sideBarPush, navitem: "", content: contentPush },
};

// Components

export const Sidebar = styled.nav`
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  top: ${({ offsetTop }) => offsetTop};
  overflow-x: hidden;
  transition: 0.25s;
  transition-timing-function: ease-in-out;
  background-color: ${({ background }) => background};
  box-shadow: 0px 2px 2px 0px ${colors.GREY_32};
  z-index: ${({ zIndex }) => zIndex};

  ${({ variant }) => sideNavTheme[variant].sidebar}
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 8px;
  cursor: pointer;
  background-color: ${({ background }) => background};
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
    font-size: 24px;
    color: ${GREY_48};
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

  ${({ variant }) => sideNavTheme[variant].navitem}
`;

export const Content = styled.div`
  box-sizing: border-box;
  ${({ offsetTop }) => offsetTop && `margin-top: ${offsetTop};`};
  ${({ variant }) => sideNavTheme[variant].content}
`;

export default {
  Sidebar,
  NavItem,
  Content,
};
