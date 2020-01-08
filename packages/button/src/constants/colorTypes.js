import { colors as colorConstants } from "@crave/farmblocks-theme";

import {
  PRIMARY,
  NEUTRAL,
  SECONDARY,
  POSITIVE,
  NEGATIVE,
  CLOSED,
  OFF_NEUTRAL,
} from "./buttonTypes";

export default {
  [PRIMARY]: {
    color: colorConstants.TANGERINE,
    hoverColor: colorConstants.TANGERINE_2,
  },
  [NEUTRAL]: {
    textColor: colorConstants.OYSTER,
    iconColor: colorConstants.GREY_32,
    textHoverColor: colorConstants.INDIGO_MILK_CAP,
    color: "#FFFFFF",
  },
  [SECONDARY]: {
    color: colorConstants.INDIGO_MILK_CAP,
    hoverColor: colorConstants.BLUE_CORN,
  },
  [POSITIVE]: {
    color: colorConstants.LETTUCE,
    hoverColor: colorConstants.AVOCADO,
  },
  [NEGATIVE]: {
    color: colorConstants.STRAWBERRY,
    hoverColor: colorConstants.TOMATO,
  },
  [CLOSED]: {
    color: colorConstants.GRAPE,
    hoverColor: colorConstants.EGGPLANT,
  },
  [OFF_NEUTRAL]: {
    color: colorConstants.GREY_16,
    hoverColor: colorConstants.INDIGO_MILK_CAP,
  },
};
