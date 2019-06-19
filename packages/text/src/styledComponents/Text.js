import styled, { css } from "styled-components";

import paragraphLineHeights from "../constants/paragraphLineHeights";

const paragraphStyle = props => {
  return (
    props.paragraph &&
    css`
      line-height: ${paragraphLineHeights[props.size]};
    `
  );
};

const TextContainer = styled.div`
  font-family: Lato, sans-serif;
  font-size: ${props => `${props.size}px`};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: ${props => props.type};

  text-align: ${props => props.align};

  ${paragraphStyle};

  line-height: ${props => props.lineHeight};
  font-weight: ${({ theme, fontWeight }) =>
    theme?.fontWeights?.[fontWeight] || fontWeight};

  letter-spacing: ${props => props.letterSpacing};

  ${({ upper }) => upper && "text-transform: uppercase"}

  ${({ truncate }) =>
    truncate &&
    ` white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      `};
`;

TextContainer.displayName = "TextContainer";

export default TextContainer;
