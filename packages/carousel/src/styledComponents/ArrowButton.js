import styled from "styled-components";

import Button from "@crave/farmblocks-button";

const ArrowButton = styled(Button)`
  z-index: 1;
  border-radius: 32px;

  @media (hover: none) and (pointer: coarse) {
    & {
      display: none;
    }
  }
`;

export default ArrowButton;
