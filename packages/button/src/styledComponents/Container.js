// @flow
import styled from "styled-components";

const Container = styled.div`
  position: relative;

  > .hit-box-container {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
  }

  width: ${props => props.fluid && "100%"};
`;

export default Container;
