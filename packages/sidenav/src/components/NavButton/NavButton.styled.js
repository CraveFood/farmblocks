import styled from "styled-components";
import { transparentize } from "polished";

export const GREY_48 = "rgba(0, 0, 0, 0.48)";

export default styled.div`
  box-sizing: border-box;
  color: ${({ active, highlightColor }) => (active ? highlightColor : GREY_48)};
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
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
