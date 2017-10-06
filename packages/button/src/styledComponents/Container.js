// @flow
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: inline-block;

  > .hit-box-container {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
`;

export default Container;
