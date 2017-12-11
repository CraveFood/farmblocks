import styled from "styled-components";

const HelperContentContainer = styled.div`
  font-family: Lato, sans-serif;

  display: flex;

  align-items: center;

  > .text {
    > :first-child {
      margin-bottom: 8px;
    }
  }

  > .image {
    margin-right: 16px;
  }
`;

HelperContentContainer.displayName = "HelperContentContainer";

export default HelperContentContainer;
