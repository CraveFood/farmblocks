import styled from "styled-components";
import { colors as colorConstants, fontWeights } from "@crave/farmblocks-theme";

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

  > .link {
    color: ${colorConstants.OYSTER};
    font-weight: ${fontWeights.SEMIBOLD};
    text-decoration: none;

    :hover {
      color: ${colorConstants.INDIGO_MILK_CAP};
    }
  }
`;

HelperContentContainer.displayName = "HelperContentContainer";

export default HelperContentContainer;
