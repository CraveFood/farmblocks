import styled, { css } from "styled-components";
import { fontWeights } from "@crave/farmblocks-theme";

import paragraphLineHeights from "../constants/paragraphLineHeights";

const TextContainer = styled.div`
  font-family: Lato, sans-serif;
  font-size: ${props => `${props.size}px`};

  color: ${props => props.type};

  text-align: ${props => props.align};

  ${titleStyle};
  ${paragraphStyle};

  line-height: ${props => props.lineHeight};
`;

function titleStyle(props) {
  if (props.title) {
    return css`
      font-weight: ${fontWeights.SEMIBOLD};
    `;
  }
}

function paragraphStyle(props) {
  if (props.paragraph) {
    return css`
      line-height: ${paragraphLineHeights[props.size]};
    `;
  }
}

TextContainer.displayName = "TextContainer";

export default TextContainer;
