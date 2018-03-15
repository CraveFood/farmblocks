import styled, { css } from "styled-components";
import { colors as colorConstants } from "@crave/farmblocks-theme";

const align = props => {
  const { tooltipAlign } = props;
  if (tooltipAlign === "center") {
    return null;
  }
  return css`
    transform: translateX(${tooltipAlign === "left" && "-"}10px);
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

	.icon:hover, .hovered {
		color: ${colorConstants.INDIGO_MILK_CAP};
	}

	.icon:hover {
		color: ${colorConstants.INDIGO_MILK_CAP};
	}
}`;

export default StyledInfo;
