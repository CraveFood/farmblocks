// @flow
import styled, { css } from "styled-components";

const Container = styled.div`
  position: relative;
`;

const StyledTooltip = styled.div`
  visibility: ${props => (props.isVisible ? "visible" : "hidden")};
  position: absolute;
  top: 15px;
  padding: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  white-space: pre;

  font-family: lato, sans-serif;

  ${props => props.align}: 0;

  &:after,
  &:before {
    bottom: 100%;
    border: solid 1px rgba(0, 0, 0, 0.16);
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:before {
    border-color: transparent;
    border-bottom-color: rgba(0, 0, 0, 0.16);
    border-width: 8px;
    ${props => props.align}: 7px;
  }

  &:after {
    border-color: transparent;
    border-bottom-color: #ffffff;
    border-width: 7px;
    ${props => props.align}: 8px;
  }
`;

export { Container, StyledTooltip };
