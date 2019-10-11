import styled, { css } from "styled-components";
import { colors } from "@crave/farmblocks-theme";
import { transparentize } from "polished";

const isFullWidth = variant => variant === "fullWidth";
const isOverlay = variant => variant === "overlay";
const isPush = variant => variant === "push";

const sideNavFullWidth = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${({ expanded }) => expanded && "padding: 16px;"}
  width: ${({ expanded }) => (expanded ? "100%" : "0px")};
`;

const sideNavOverlay = css`
  width: ${({ expanded, expandedWidth }) => (expanded ? expandedWidth : "0px")};
`;

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
  width: ${({ expanded, collapsedWidth, expandedWidth }) =>
    expanded ? expandedWidth : collapsedWidth};

  @media screen and (min-width: 760px) {
    ${({ variant }) => {
      if (isOverlay(variant)) {
        return sideNavOverlay;
      }
      if (isFullWidth(variant)) {
        return sideNavFullWidth;
      }
      return "";
    }}
  }

  @media screen and (max-width: 760px) {
    ${({ mobileVariant }) => {
      if (isOverlay(mobileVariant)) {
        return sideNavOverlay;
      }
      if (isFullWidth(mobileVariant)) {
        return sideNavFullWidth;
      }
      return "";
    }}
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 8px;
  cursor: pointer;
  background-color: ${({ background }) => background};
  color: ${colors.GREY_48};

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

  @media screen and (min-width: 760px) {
    ${({ variant, highlightColor }) =>
      isFullWidth(variant) &&
      css`
        border-radius: 90px;
        padding: 8px 16px;

        &:hover,
        &.activated {
          color: ${highlightColor};
        }

        &.activated {
          padding-left: 16px;
          border-left: none;
        }
      `}
  }
  @media screen and (max-width: 760px) {
    ${({ mobileVariant, highlightColor }) =>
      isFullWidth(mobileVariant) &&
      css`
        border-radius: 90px;
        padding: 8px 16px;

        &:hover,
        &.activated {
          color: ${highlightColor};
        }

        &.activated {
          padding-left: 16px;
          border-left: none;
        }
      `}
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

export const ToggleButton = styled(IconButton)`
  position: fixed;
  top: 8px;
  left: 8px;

  @media screen and (min-width: 760px) {
    z-index: ${({ variant, zIndex }) =>
      isPush(variant) ? zIndex + 1 : zIndex - 1};
  }

  @media screen and (max-width: 760px) {
    z-index: ${({ mobileVariant, zIndex }) =>
      isPush(mobileVariant) ? zIndex + 1 : zIndex - 1};
  }
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;

  @media screen and (min-width: 760px) {
    ${({ variant, expanded }) =>
      isPush(variant)
        ? css`
            display: none;
          `
        : css`
            opacity: ${expanded ? 1 : 0};
            transition: 0.25s;
          `}
  }
  @media screen and (max-width: 760px) {
    ${({ mobileVariant, expanded }) =>
      isPush(mobileVariant)
        ? css`
            display: none;
          `
        : css`
            opacity: ${expanded ? 1 : 0};
            transition: 0.25s;
          `}
  }
`;

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

export const Content = styled.div`
  box-sizing: border-box;
  ${({ offsetTop }) => offsetTop && `margin-top: ${offsetTop};`};

  @media screen and (min-width: 760px) {
    ${({ variant }) => isPush(variant) && contentPush};
    ${({ variant }) => isOverlay(variant) && contentOverlay};
  }

  @media screen and (max-width: 760px) {
    ${({ mobileVariant }) => isPush(mobileVariant) && contentPush};
    ${({ mobileVariant }) => isOverlay(mobileVariant) && contentOverlay};
  }
`;

export default {
  Sidebar,
  Item,
  IconButton,
  Content,
};
