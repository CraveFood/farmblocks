import linkTypes from "./linkTypes";
import { colors as colorConstants, fontTypes } from "@crave/farmblocks-theme";

export default {
  [linkTypes.PRIMARY]: {
    color: fontTypes.FEATURED,
    hoverColor: colorConstants.BLUE_CORN
  },
  [linkTypes.DISABLED]: {
    color: fontTypes.SUBTLE,
    hoverColor: fontTypes.SUBTLE
  },
  [linkTypes.NEUTRAL]: {
    color: fontTypes.NEUTRAL,
    hoverColor: fontTypes.FEATURED
  },
  [linkTypes.ROW_TITLE]: {
    color: fontTypes.NORMAL,
    hoverColor: colorConstants.BLUE_CORN
  },  
  [linkTypes.WHITE]: {
    color: fontTypes.WHITE,
    hoverColor: colorConstants.WHITE_56
  }
};


