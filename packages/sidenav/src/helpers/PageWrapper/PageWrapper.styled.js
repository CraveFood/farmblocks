import styled, { css } from "styled-components";
import { colors } from "@crave/farmblocks-theme";

import { PUSH } from "../../constants/variants";

const pushStyle = css`
  transition: margin 0.25s;
  transition-timing-function: ease-in-out;
  margin-left: ${({ expanded, collapsedWidth, expandedWidth }) =>
    expanded ? expandedWidth : collapsedWidth};
`;

const variantsStyle = {
  [PUSH]: pushStyle,
};

const PageWrapper = styled.div`
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
  ${({ offsetTop }) => offsetTop && `margin-top: ${offsetTop};`};
  ${({ variant }) => variantsStyle[variant]}
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.3s;
  ${({ expanded }) =>
    expanded &&
    css`
      background-color: ${colors.GREY_16};
      cursor: pointer;
    `};
`;

export default PageWrapper;
