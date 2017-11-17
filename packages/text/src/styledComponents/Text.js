import styled, { css } from "styled-components";
import { fontWeights } from "@crave/farmblocks-theme";

const TextContainer = styled.div`
  font-family: Lato, sans-serif;
  font-size: ${props => `${props.size}px`};

  color: ${props => props.type};

  text-align: ${props => props.align};

  line-height: ${props => props.lineHeight};

  ${titleStyle};
`;

function titleStyle(props) {
  if (props.title) {
    return css`
      font-weight: ${fontWeights.SEMIBOLD};
    `;
  }
}

TextContainer.displayName = "TextContainer";

export default TextContainer;
