import {
  PRIMARY,
  SECONDARY,
  POSITIVE,
  NEGATIVE,
  CLOSED,
  NEUTRAL_OFF
} from "./buttonTypes";

export default {
  [PRIMARY]: {
    color: "#FF4411",
    hoverColor: "#DD3311"
  },
  [SECONDARY]: {
    color: "#3498db",
    hoverColor: "#2980B9"
  },
  [POSITIVE]: {
    color: "#2ECC71",
    hoverColor: "#27AE60"
  },
  [NEGATIVE]: {
    color: "#dd3311",
    hoverColor: "#bc2b0e"
  },
  [CLOSED]: {
    color: "#9b59b6",
    hoverColor: "#8e44ad"
  },
  [NEUTRAL_OFF]: {
    color: "transparent",
    hoverColor: "#2980B9"
  }
};
