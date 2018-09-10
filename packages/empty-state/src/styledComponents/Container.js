import styled from "styled-components";
import { fontTypes } from "@crave/farmblocks-text";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > .thumbnail {
    margin-bottom: 24px;
  }

  > .description,
  > .info {
    margin-top: 16px;
  }

  > .buttons {
    margin-top: 24px;

    > * {
      margin: 0 8px;
    }
  }

  .icon {
    font-size: 72px;
    color: ${fontTypes.SUBTLE};
  }
`;

export default Container;
