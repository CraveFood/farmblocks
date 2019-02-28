import { colors } from "@crave/farmblocks-theme";

export const cardTypes = {
  FEATURED: "FEATURED",
  NEUTRAL: "NEUTRAL",
  DEFAULT: "DEFAULT",
};

export const cardTypeColors = {
  [cardTypes.FEATURED]: colors.INDIGO_MILK_CAP,
  [cardTypes.NEUTRAL]: colors.SUGAR,
  [cardTypes.DEFAULT]: "#ffffff",
};

export default {
  cardTypes,
  cardTypeColors,
};
