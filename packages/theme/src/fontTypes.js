import {
  CARBON,
  LETTUCE,
  STRAWBERRY,
  INDIGO_MILK_CAP,
  GREY_32,
  OYSTER
} from "./colors";

const keys = {
  NORMAL: "NORMAL",
  NEUTRAL: "NEUTRAL",
  POSITIVE: "POSITIVE",
  NEGATIVE: "NEGATIVE",
  FEATURED: "FEATURED",
  SUBTLE: "SUBTLE",
  WHITE: "WHITE"
};

const values = {
  [keys.NORMAL]: CARBON,
  [keys.NEUTRAL]: OYSTER,
  [keys.POSITIVE]: LETTUCE,
  [keys.NEGATIVE]: STRAWBERRY,
  [keys.FEATURED]: INDIGO_MILK_CAP,
  [keys.SUBTLE]: GREY_32,
  [keys.WHITE]: "white"
};

export default {
  keys,
  values
};
