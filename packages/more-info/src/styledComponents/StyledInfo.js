import styled from "styled-components";
import { colors as colorConstants } from "@crave/farmblocks-theme";

const StyledInfo = styled.div`
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
