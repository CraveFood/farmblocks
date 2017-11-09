import { colors as colorConstants } from "@crave/farmblocks-theme";

import statusTypes from "./statusTypes";

const { INDIGO_MILK_CAP, LETTUCE } = colorConstants;

export default {
  [statusTypes.COMPLETED]: {
    background: LETTUCE,
    color: "white"
  },
  [statusTypes.CURRENT]: {
    hover: {
      color: INDIGO_MILK_CAP,
      border: `solid 2px ${INDIGO_MILK_CAP}`
    }
  },
  [statusTypes.PENDING]: {
    opacity: 0.24
  }
};
