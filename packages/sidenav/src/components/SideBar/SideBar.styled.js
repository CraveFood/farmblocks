import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { colors } from "@crave/farmblocks-theme";

import { FULLSCREEN, PUSH, OVERLAY } from "../../constants/variants";

const fullScreenStyle = css`
  top:0;
  ${({ expanded }) => expanded && "padding: 16px;"}
  width: ${({ expanded }) => (expanded ? "100%" : "0px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  backdrop-filter: blur(5px);
  opacity: 0.9;
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
  transition: 0.25s;
  transition-timing-function: ease-in-out;
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: 0px 2px 2px 0px ${colors.GREY_32};
  z-index: ${({ zIndex }) => zIndex};

  ${({ variant }) => variantsStyle[variant]}
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
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default SideBar;
