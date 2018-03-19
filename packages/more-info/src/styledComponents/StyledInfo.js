import styled, { css } from "styled-components";
import { colors as colorConstants } from "@crave/farmblocks-theme";

const align = props => {
  const { tooltipAlign } = props;
  if (tooltipAlign === "center") {
    return null;
  }
  return css`
    margin-${tooltipAlign}: -10px;
  `;
};

const StyledInfo = styled.div`
	.tooltip {
		${align};
	}

	.icon {
		display: inline-block;
		margin: 0 8px;
	}

	.hit-area{
		margin: -12px;
		padding: 12px;
		margin-top: -62px;
		padding-top: 62px;
	}

	.icon:hover, .hovered {
		color: ${colorConstants.INDIGO_MILK_CAP};
	}

	.icon:hover {
		color: ${colorConstants.INDIGO_MILK_CAP};
	}
}`;

export default StyledInfo;
