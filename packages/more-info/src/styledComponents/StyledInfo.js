import styled, { css } from "styled-components";
import { colors as colorConstants } from "@crave/farmblocks-theme";
import { POSITIONS } from "@crave/farmblocks-tooltip";

const tooltipAlign = ({ tooltipProps }) => {
  const { positionX } = tooltipProps;
  if (!positionX || positionX === POSITIONS.X.CENTER) return null;

  return css`
    margin-${positionX}: -4px;
  `;
};

const StyledInfo = styled.div`
	.tooltip {
		${tooltipAlign};
	}

	.icon {
		display: inline-block;
		margin: 0 8px;
		cursor: pointer;
	}

	.icon:hover, .hovered {
		color: ${colorConstants.INDIGO_MILK_CAP};
	}

}`;

export default StyledInfo;
