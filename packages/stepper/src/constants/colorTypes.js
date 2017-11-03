import statusTypes from "./statusTypes";

export const CARBON = "#2f313a";
export const INDIGO_MILK_CAP = "#3498db";
export const LETTUCE = "#2ecc71";

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
