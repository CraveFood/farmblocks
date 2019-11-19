import styled, { css } from "styled-components";
import { colors as colorConstants } from "@crave/farmblocks-theme";
import { POSITIONS } from "@crave/farmblocks-tooltip";

const tooltipAlign = ({ tooltipProps }) => {
  const { positionX } = tooltipProps;
  if (!positionX || positionX === POSITIONS.X.CENTER) return null;

  return css`
    margin-${positionX}: -3px;
  `;
};

const StyledInfo = styled.div`
	.tooltip {
		${tooltipAlign};
	}

	display: flex;
	align-items: baseline;

	.icon {
		display: inline-block;
		margin: 0 4px;
		cursor: pointer;
		color: ${colorConstants.OYSTER};
		.farmblocks-icon {
			font-size: 1.2em;
		}
	}

	.icon:hover, .hovered {
		color: ${colorConstants.INDIGO_MILK_CAP};
	}

}`;

export default StyledInfo;
