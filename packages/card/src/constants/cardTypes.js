import { colors } from "@crave/farmblocks-theme";

const cardTypes = {
  FEATURED: "FEATURED",
  NEUTRAL: "NEUTRAL",
  DEFAULT: "DEFAULT"
};

const cardTypeColors = {
  [cardTypes.FEATURED]: colors.INDIGO_MILK_CAP,
  [cardTypes.NEUTRAL]: colors.SUGAR,
  [cardTypes.DEFAULT]: "#ffffff"
};

module.exports = {
  cardTypes,
  cardTypeColors
};
