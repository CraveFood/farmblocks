import styled, { css } from "styled-components";
import { colors as colorConstants } from "@crave/farmblocks-theme";

import colorTypes from "../constants/colorTypes";
import statusTypes from "../constants/statusTypes";

function colors({ status }) {
  const { color, background, opacity, hover = {} } = colorTypes[status];

  return css`
    color: ${color};
    background: ${background};
    opacity: ${opacity};

    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${hover.color};
      border: ${hover.border};
    }
  `;
}

const StepContainer = styled.div`
  font-family: Lato, sans-serif;

  display: flex;
  align-items: center;

  border-radius: 4px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px rgba(0, 0, 0, 0.16);

  background: white;

  padding: 8px 24px;
  min-height: 48px;

  .description {
    padding: 0 16px;
    flex-grow: 1;

    line-height: 1.33;
  }

  cursor: ${(props) => props.status === statusTypes.CURRENT && "pointer"};

  color: ${colorConstants.CARBON};

  ${colors};
`;

StepContainer.displayName = "StepContainer";

export default StepContainer;
