import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { colors } from "@crave/farmblocks-theme";

import { FULLSCREEN, PUSH, OVERLAY } from "../../constants/variants";

const fullScreenStyle = css`
  top: 0;
  padding: ${({ expanded }) => (expanded ? "16px" : "16px 0")};

  display: flex;
  flex-direction: column;
  justify-content: center;

  /* Keeping 1px width when collapsed to prevent Safari from losing 
     backdrop-filter if it's set to 0 */
  width: ${({ expanded }) => (expanded ? "100%" : "1px")};
  transform: translate(${({ expanded }) => (expanded ? "0" : "1px")});

  backdrop-filter: blur(8px);
  background: ${({ backgroundColor }) => backgroundColor};
  background: ${({ backgroundColor }) => backgroundColor}CC;
`;

const overlayStyle = css`
  width: ${({ expanded, expandedWidth }) => (expanded ? expandedWidth : "0px")};
`;

const pushStyle = css`
  width: ${({ expanded, collapsedWidth, expandedWidth }) =>
    expanded ? expandedWidth : collapsedWidth};
`;

const variantsStyle = {
  [FULLSCREEN]: fullScreenStyle,
  [OVERLAY]: overlayStyle,
  [PUSH]: pushStyle,
};

export const SideBar = styled.nav`
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  top: ${({ offsetTop }) => offsetTop};
  overflow-x: hidden;
  transition: width 0.25s, padding-right 0.25s, padding-left 0.25s;
  transition-timing-function: ease-in-out;
  background: ${({ backgroundColor }) => backgroundColor};
  box-shadow: 0px 2px 2px 0px ${colors.GREY_32};
  z-index: ${({ zIndex }) => zIndex};

  ${({ variant }) => variantsStyle[variant] || ""};
`;

SideBar.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  collapsedWidth: PropTypes.string.isRequired,
  expandedWidth: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([PUSH, FULLSCREEN, OVERLAY]).isRequired,
  render: PropTypes.func,
  offsetTop: PropTypes.string,
  expanded: PropTypes.bool,
  highlightColor: PropTypes.string,
  zIndex: PropTypes.number,
};

export default SideBar;
