import styled, { css } from "styled-components";
import { colors } from "@crave/farmblocks-theme";
import { TOP, BOTTOM, CENTER } from "./constants/positions";

const Container = styled.div`
  position: relative;
  z-index: ${props => props.zIndex};

  @media only screen and (max-width: ${props => props.fullScreenBreakpoint}) {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${colors.GREY_32};
    position: fixed;
  }
`;

const centerAlignment = css`
  left: 50%;
  transform: translateX(-50%);
`;

const positionXStyle = coordinate => ({ positionX }) => {
  if (positionX === CENTER) {
    return centerAlignment;
  }

  return css`
    ${positionX}: ${coordinate};
  `;
};

const positionYStyle = ({ positionY, offset, triggerHeight }) => {
  if (positionY === BOTTOM) {
    return css`
      top: ${offset};
    `;
  }

  if (positionY === TOP) {
    return css`
      bottom: ${triggerHeight + Number.parseInt(offset, 10)}px;
    `;
  }

  return css`
    top: ${offset};
  `;
};

const arrow = ({ hideArrow, positionY, fullScreenBreakpoint }) => {
  if (hideArrow) return css``;

  return css`
    &:after,
    &:before {
      border: solid 1px rgba(0, 0, 0, 0.16);
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }

    &:before {
      ${positionY}: 100%;
      border-color: transparent;
      border-${positionY}-color: rgba(0, 0, 0, 0.16);
      border-width: 8px;
      ${positionXStyle("7px")};
    }

    &:after {
      ${positionY}: calc(100% - 1px);
      border-color: transparent;
      border-${positionY}-color: #ffffff;
      border-width: 7px;
      ${positionXStyle("8px")};
    }
    
    @media only screen and (max-width: ${fullScreenBreakpoint}) { 
      &:after,
      &:before {
        display: none;
      }
    }
  `;
};

const StyledTooltip = styled.div`
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};

  position: absolute;
  padding: ${props => props.padding || "8px"};
  background-color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  white-space: pre;
  color: ${colors.CARBON};

  font-family: lato, sans-serif;

  ${positionXStyle(0)};

  ${arrow};
  ${positionYStyle};

  overflow: ${props => props.overflow};

  @media only screen and (max-width: ${props => props.fullScreenBreakpoint}) {
    top: 16px;
    right: 16px;
    bottom: 16px;
    left: 16px;
  }
`;

export { Container, StyledTooltip };
