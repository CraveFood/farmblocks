import styled, { css } from "styled-components";
import { fontWeights } from "@crave/farmblocks-theme";

import paragraphLineHeights from "../constants/paragraphLineHeights";

const TextContainer = styled.div`
  font-family: Lato, sans-serif;
  font-size: ${props => `${props.size}px`};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: ${props => props.type};

  text-align: ${props => props.align};

  ${paragraphStyle};

  line-height: ${props => props.lineHeight};
  font-weight: ${props => {
    if (props.isTitle) {
      return fontWeights.SEMIBOLD;
    }

    if (props.light) {
      return fontWeights.LIGHT;
    }
  }};

  letter-spacing: ${props => props.letterSpacing};
`;

function paragraphStyle(props) {
  if (props.paragraph) {
    return css`
      line-height: ${paragraphLineHeights[props.size]};
    `;
  }
}

TextContainer.displayName = "TextContainer";

export default TextContainer;
