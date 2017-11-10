// import styled, { css } from "styled-components";
import styled from "styled-components";
import { fontSizes, fontWeights, fontTypes } from "@crave/farmblocks-theme";

const TitleContainer = styled.div`
  font-family: Lato, sans-serif;
  font-size: ${props => fontSizes.values[props.size]};
  font-weight: ${fontWeights.values.SEMIBOLD};

  color: ${props => fontTypes.values[props.type]};
`;

TitleContainer.displayName = "TitleContainer";

export default TitleContainer;
