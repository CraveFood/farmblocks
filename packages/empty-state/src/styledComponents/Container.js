// @flow
import styled from "styled-components";

const Container = styled.div`
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

  > .buttons {
    margin-top: 24px;
    display: flex;
    flex-direction: row;
  }

  > .buttons .withMargin {
    margin-right: 16px;
  }

  > .info {
    margin-top: 16px;
  }
`;

export default Container;
