import linkTypes from "./linkTypes";
import { colors as colorConstants } from "@crave/farmblocks-theme";

export default {
  [linkTypes.PRIMARY]: {
    color: colorConstants.INDIGO_MILK_CAP,
    hoverColor: colorConstants.BLUE_CORN
  },
  [linkTypes.DISABLED]: {
    color: colorConstants.GREY_32,
    hoverColor: colorConstants.GREY_32
  },
  [linkTypes.NEUTRAL]: {
    color: colorConstants.OYSTER,
    hoverColor: colorConstants.INDIGO_MILK_CAP
  },
  [linkTypes.ROW_TITLE]: {
    color: colorConstants.CARBON,
    hoverColor: colorConstants.BLUE_CORN
  },
  [linkTypes.EXTERNAL_DEFAULT]: {
    color: colorConstants.INDIGO_MILK_CAP,
    hoverColor: colorConstants.BLUE_CORN
  },
  [linkTypes.EXTERNAL_ADDRESS]: {
    color: colorConstants.INDIGO_MILK_CAP,
    hoverColor: colorConstants.BLUE_CORN
  },
  [linkTypes.EXTERNAL_ADDRESS_MINI]: {
    color: colorConstants.INDIGO_MILK_CAP,
    hoverColor: colorConstants.BLUE_CORN
  },
  [linkTypes.EXTERNAL_ADDRESS_WHITE]: {
    color: "#ffffff",
    hoverColor: colorConstants.WHITE_56
  },
  [linkTypes.EXTERNAL_ADDRESS_MINI_WHITE]: {
    color: "#ffffff",
    hoverColor: colorConstants.WHITE_56
  },
};


