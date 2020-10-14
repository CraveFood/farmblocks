import { colors } from "@crave/farmblocks-theme";

const WHITE = "#FFFFFF";

const primaryStyle = {
  normal: {
    backgroundColor: colors.TANGERINE,
    textColor: WHITE,
  },
  hover: {
    backgroundColor: colors.TANGERINE_3,
  },
};

const secondaryStyle = {
  normal: {
    backgroundColor: colors.INDIGO_MILK_CAP,
    textColor: WHITE,
  },
  hover: {
    backgroundColor: colors.BLUE_CORN,
  },
};

const positiveStyle = {
  normal: { backgroundColor: colors.LETTUCE, textColor: WHITE },
  hover: {
    backgroundColor: colors.AVOCADO,
  },
};

const negativeStyle = {
  normal: { backgroundColor: colors.STRAWBERRY, textColor: WHITE },
  hover: {
    backgroundColor: colors.TOMATO,
  },
};

const neutralStyle = {
  normal: {
    backgroundColor: WHITE,
    textColor: colors.OYSTER,
    iconColor: colors.GREY_32,
  },
  hover: {
    textColor: colors.INDIGO_MILK_CAP,
    iconColor: colors.INDIGO_MILK_CAP,
    borderColor: colors.INDIGO_MILK_CAP,
    borderWidth: 2,
  },
};

const ghostStyle = {
  normal: {
    backgroundColor: "transparent",
    textColor: colors.OYSTER,
    iconColor: colors.GREY_32,
    border: "none",
    boxShadow: "none",
  },
  hover: {
    backgroundColor: colors.GREY_04,
    textColor: colors.INDIGO_MILK_CAP,
    iconColor: colors.INDIGO_MILK_CAP,
    border: "none",
    boxShadow: "none",
  },
  active: {
    backgroundColor: colors.GREY_08,
  },
};

export const PRIMARY_BUTTON = primaryStyle;
export const SECONDARY_BUTTON = secondaryStyle;
export const POSITIVE_BUTTON = positiveStyle;
export const NEGATIVE_BUTTON = negativeStyle;
export const NEUTRAL_BUTTON = neutralStyle;
export const GHOST_BUTTON = ghostStyle;

export default {
  PRIMARY_BUTTON,
  SECONDARY_BUTTON,
  POSITIVE_BUTTON,
  NEGATIVE_BUTTON,
  NEUTRAL_BUTTON,
  GHOST_BUTTON,
};
