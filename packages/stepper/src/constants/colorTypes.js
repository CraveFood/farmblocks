import { colors as colorConstants } from "@crave/farmblocks-theme";

const { INDIGO_MILK_CAP, LETTUCE } = colorConstants;

export const COMPLETED = {
  background: LETTUCE,
  color: "white",
};

export const CURRENT = {
  hover: {
    color: INDIGO_MILK_CAP,
    border: `solid 1px ${INDIGO_MILK_CAP}`,
  },
};

export const PENDING = {
  opacity: 0.24,
};

export default {
  COMPLETED,
  CURRENT,
  PENDING,
};
