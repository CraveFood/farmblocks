import styled from "styled-components";
import { colors as colorConstants } from "@crave/farmblocks-theme";

const margin = "16px";

const FooterContainer = styled.div`
  font-family: Lato, sans-serif;

  background-color: ${colorConstants.SUGAR};

  border-top: solid 1px ${colorConstants.GREY_16};

  padding: 16px 24px;

  display: flex;
  justify-content: space-between;

  .button-container {
    display: flex;

    align: flex-end;

    > * {
      margin-left: ${margin};
    }
  }
`;

FooterContainer.displayName = "FooterContainer";

export default FooterContainer;
