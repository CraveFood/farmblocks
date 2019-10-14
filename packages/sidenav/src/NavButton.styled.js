import styled from "styled-components";
import { transparentize } from "polished";

import { PUSH } from "./constants/variants";

const isPush = variant => variant === PUSH;
export const GREY_48 = "rgba(0, 0, 0, 0.48)";

export const IconButton = styled.div`
  box-sizing: border-box;
  color: ${({ active, highlightColor }) => (active ? highlightColor : GREY_48)};
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
  z-index: ${({ variant, zIndex }) =>
    isPush(variant) ? zIndex + 10 : zIndex - 10};
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  opacity: ${({ expanded }) => (expanded ? 1 : 0)};
  transition: 0.25s;
  ${({ variant }) => isPush(variant) && "display: none;"}
`;

export default {
  IconButton,
  ToggleButton,
  CloseButton,
};
