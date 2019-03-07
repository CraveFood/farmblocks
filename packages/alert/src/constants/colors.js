import { colors as colorConstants } from "@crave/farmblocks-theme";

import AlertTypes from "./alertTypes";

export default {
  [AlertTypes.NEWS]: colorConstants.INDIGO_MILK_CAP,
  [AlertTypes.POSITIVE]: colorConstants.LETTUCE,
  [AlertTypes.NEGATIVE]: colorConstants.STRAWBERRY,
  [AlertTypes.ATTENTION]: colorConstants.CORN,
};
