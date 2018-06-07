import styled from "styled-components";

export default styled.ul`
  max-height: ${props => props.maxHeight};
  overflow-y: auto;
  scroll-behavior: smooth;
`;
