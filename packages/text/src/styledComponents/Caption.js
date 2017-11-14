import styled from "styled-components";

const CaptionContainer = styled.div`
  font-family: Lato, sans-serif;
  font-size: ${props => `${props.size}px`};

  color: ${props => props.type};

  text-align: ${props => props.align};
`;

CaptionContainer.displayName = "CaptionContainer";

export default CaptionContainer;
