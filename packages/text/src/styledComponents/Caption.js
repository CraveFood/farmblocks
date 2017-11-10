import styled from "styled-components";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

const CaptionContainer = styled.div`
  font-family: Lato, sans-serif;
  font-size: ${props => fontSizes.values[props.size]};

  color: ${props => fontTypes.values[props.type]};

  text-align: ${props => props.align};
`;

CaptionContainer.displayName = "CaptionContainer";

export default CaptionContainer;
