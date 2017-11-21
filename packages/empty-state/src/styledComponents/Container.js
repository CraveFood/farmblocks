// @flow
import styled from "styled-components";

const width = props => props.width;

const Container = styled.div`
  width: ${width}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-font-smoothing: antialiased;

  > .thumbnail {
    margin-bottom: 24px;
  }

  > .description {
    margin-top: 16px;
  }

  > .primaryButton {
    margin-top: 24px;
  }

  > .info {
    margin-top: 16px;
  }
`;

export default Container;
