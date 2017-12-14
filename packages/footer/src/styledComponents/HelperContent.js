import styled from "styled-components";
import { fontSizes } from "@crave/farmblocks-theme";


const HelperContentContainer = styled.div`
  font-family: Lato, sans-serif;

  display: flex;

  align-items: center;

  > .text {
    > :first-child {
      margin-bottom: ${props => props.size === fontSizes.MEDIUM && '8px'};
    }
  }

  > .image {
    margin-right: 16px;
  }
`;

HelperContentContainer.displayName = "HelperContentContainer";

export default HelperContentContainer;
