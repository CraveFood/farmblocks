import styled, { css } from "styled-components";
import { colors } from "@crave/farmblocks-theme";

import { PUSH, OVERLAY } from "../../constants/variants";

const overlayStyle = css`
  transition: 0.3s;
  ${({ expanded }) => expanded && `background-color:${colors.GREY_16};`};
`;

const pushStyle = css`
  transition: margin 0.25s;
  transition-timing-function: ease-in-out;
  margin-left: ${({ expanded, collapsedWidth, expandedWidth }) =>
    expanded ? expandedWidth : collapsedWidth};
`;

const variantsStyle = {
  [OVERLAY]: overlayStyle,
  [PUSH]: pushStyle,
};

const PageWrapper = styled.div`
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
  ${({ offsetTop }) => offsetTop && `margin-top: ${offsetTop};`};
  ${({ variant }) => variantsStyle[variant]}
`;

export default PageWrapper;
