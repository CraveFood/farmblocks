import styled from "styled-components";
import { space, flexbox } from "styled-system";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${space};
  ${flexbox};

  > .thumbnail,
  > .icon-wrapper {
    margin-bottom: 16px;
  }

  > .description,
  > .info {
    margin-top: 16px;
  }
`;

export default Container;
