import styled, { css } from "styled-components";
import { colors } from "@crave/farmblocks-theme";
import { CENTER } from "../constants/alignments";

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

const PositionWrapper = styled.div`
  position: relative;
`;

const Container = styled.div`
  position: absolute;
  z-index: ${props => props.zIndex};
  top: ${props => props.top};
  ${alignX(0)};
`;

const arrow = ({ hideArrow }) => {
  return (
    !hideArrow &&
    css`
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
        bottom: 100%;
        border-color: transparent;
        border-bottom-color: rgba(0, 0, 0, 0.16);
        border-width: 8px;
        ${alignX("7px")};
      }

      &:after {
        bottom: calc(100% - 1px);
        border-color: transparent;
        border-bottom-color: #ffffff;
        border-width: 7px;
        ${alignX("8px")};
      }
    `
  );
};

const StyledTooltip = styled.div`
  visibility: ${props => (props.isVisible ? "visible" : "hidden")};

  z-index: ${props => props.zIndex};
  top: ${props => props.top};
  padding: ${props => props.padding || "8px"};
  background-color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  white-space: pre;
  color: ${colors.CARBON};

  font-family: lato, sans-serif;

  ${arrow};

  overflow: ${props => props.overflow};
`;

export { Container, StyledTooltip, PositionWrapper };
