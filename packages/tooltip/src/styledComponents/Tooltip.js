import styled, { css } from "styled-components";
import { colors } from "@crave/farmblocks-theme";
import { CENTER } from "../constants/alignments";

const Container = styled.div`
  position: relative;
`;

const centerAlignment = css`
  left: 50%;
  transform: translateX(-50%);
`;

const alignX = coordinate => ({ align }) => {
  if (align === CENTER) {
    return centerAlignment;
  }

  return css`
    ${align}: ${coordinate};
  `;
};

const positionStyle = ({ position, offset, triggerHeight }) => {
  if (position === "bottom") {
    return css`
      top: ${offset};
    `;
  }

  if (position === "top") {
    return css`
      bottom: ${triggerHeight + Number.parseInt(offset, 10)}px;
    `;
  }

  return css`
    top: ${offset};
  `;
};

const arrow = ({ hideArrow, position }) => {
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
      ${position}: 100%;
      border-color: transparent;
      border-${position}-color: rgba(0, 0, 0, 0.16);
      border-width: 8px;
      ${alignX("7px")};
    }

    &:after {
      ${position}: calc(100% - 1px);
      border-color: transparent;
      border-${position}-color: #ffffff;
      border-width: 7px;
      ${alignX("8px")};
    }
  `;
};

const StyledTooltip = styled.div`
  visibility: ${props => (props.isVisible ? "visible" : "hidden")};

  position: absolute;
  z-index: ${props => props.zIndex};
  padding: ${props => props.padding || "8px"};
  background-color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  white-space: pre;
  color: ${colors.CARBON};

  font-family: lato, sans-serif;

  ${alignX(0)};

  ${arrow};
  ${positionStyle};

  overflow: ${props => props.overflow};
`;

export { Container, StyledTooltip };
