// import styled, { css } from "styled-components";
import styled from "styled-components";
import { fontWeights } from "@crave/farmblocks-theme";

const TitleContainer = styled.div`
  font-family: Lato, sans-serif;
  font-size: ${props => `${props.size}px`};
  font-weight: ${fontWeights.SEMIBOLD};

  color: ${props => props.type};
`;

TitleContainer.displayName = "TitleContainer";

export default TitleContainer;
