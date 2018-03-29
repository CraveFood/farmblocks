import styled, { css, keyframes } from "styled-components";
import Card from "@crave/farmblocks-card";

import alignments from "../constants/alignments";

const alignStyles = {
  [alignments.LEFT]: css`
    left: -33px;
    transform-origin: bottom left;
  `,
  [alignments.RIGHT]: css`
    transform-origin: bottom right;
    right: -33px;
  `
};

const open = keyframes`
  from {
    transform: scale(.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const animation = css`animation: ${open} 0.3s ease-in-out;`;

const Balloon = styled(Card)`
  ${props => props.animated && animation};
  position: absolute;
  bottom: 17px;
  ${props => alignStyles[props.align]} height: ${props =>
      props.theme.balloonSize}px;
  width: ${props => props.theme.balloonSize}px;
  padding: 0;
  border-radius: ${props => props.borderRadius};
  border: none;
  display: flex;
  flex-direction: column;

  .caption {
    margin: 16px 8px;
  }
`;

export default Balloon;
