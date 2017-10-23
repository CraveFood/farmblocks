import {
  PRIMARY,
  SECONDARY,
  NEGATIVE,
  NEUTRAL_OFF,
  CLOSED,
  REQUEST
} from "./buttonTypes";

export default {
  [PRIMARY]: {
    color: "#FF4411",
    hoverColor: "#DD3311"
  },
  [NEUTRAL_OFF]: {
    color: "transparent",
    hoverColor: "#2980B9"
  },
  [SECONDARY]: {
    color: "#3498db",
    hoverColor: "#2980B9"
  },
  [REQUEST]: {
    color: "#2ECC71",
    hoverColor: "#27AE60"
  },
  [CLOSED]: {
    color: "#9b59b6",
    hoverColor: "#8e44ad"
  },
  [NEGATIVE]: {
    color: "#dd3311",
    hoverColor: "#bc2b0e"
  }
};
