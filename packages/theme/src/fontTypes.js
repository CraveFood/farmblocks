import {
  CARBON,
  LETTUCE,
  STRAWBERRY,
  INDIGO_MILK_CAP,
  GREY_32
} from "./colors";

const keys = {
  NORMAL: "NORMAL",
  POSITIVE: "POSITIVE",
  NEGATIVE: "NEGATIVE",
  FOCUSED: "FOCUSED",
  SUBTLE: "SUBTLE",
  WHITE: "WHITE"
};

const values = {
  [keys.NORMAL]: CARBON,
  [keys.POSITIVE]: LETTUCE,
  [keys.NEGATIVE]: STRAWBERRY,
  [keys.FOCUSED]: INDIGO_MILK_CAP,
  [keys.SUBTLE]: GREY_32,
  [keys.WHITE]: "white"
};

export default {
  keys,
  values
};
