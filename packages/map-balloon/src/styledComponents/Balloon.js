import styled, { css } from "styled-components";
import Card from "@crave/farmblocks-card";
import { colors } from "@crave/farmblocks-theme";
import Text from "@crave/farmblocks-text";

import alignments from "../constants/alignments";

const alignStyles = {
  [alignments.LEFT]: css`
    left: -33px;
    transform-origin: bottom left;
  `,
  [alignments.RIGHT]: css`
    transform-origin: bottom right;
    right: -33px;
  `,
};

const animation = css`
  transition: transform 0.3s, opacity 0.3s, color 0.3s;

  &.fade-enter,
  &.fade-exit-active {
    transform: scale(0.5) rotate(5deg);
    opacity: 0;
  }
  &.fade-enter-active,
  &.fade-enter-done {
    transform: scale(1);
    opacity: 1;
  }
`;

const interactiveStyle = css`
  cursor: pointer;

  bottom: ${props => props.pinSize / 2 + 8}px;

  color: ${colors.GREY_16};

  &:active {
    transform: translateY(2px);
    color: ${colors.GREY_32};
  }
`;
const Balloon = styled(Card).attrs({ overflow: "hidden", p: 0 })`
  ${props => props.animated && animation};
  position: absolute;
  bottom: ${props => props.pinSize + 8}px;

  ${props => alignStyles[props.align]};

  height: ${props => props.balloonSize}px;
  width: ${props => props.balloonSize}px;
  padding: 0;
  border-radius: ${props => props.borderRadius};
  border: none;
  box-shadow: 0 2px 16px 0 ${colors.GREY_16};

  display: flex;
  flex-direction: column;

  user-select: none;

  .caption {
    margin: 16px 8px;
  }

  ${props => (props.interactive ? interactiveStyle : "")};
`;

export const Caption = styled(Text)`
  padding-left: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Balloon;
