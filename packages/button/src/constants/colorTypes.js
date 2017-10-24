import {
  PRIMARY,
  NEUTRAL,
  SECONDARY,
  POSITIVE,
  NEGATIVE,
  CLOSED,
  OFF_NEUTRAL
} from "./buttonTypes";

export default {
  [PRIMARY]: {
    color: "#FF4411",
    hoverColor: "#DD3311"
  },
  [NEUTRAL]: {
    textColor: "#59636f",
    iconColor: "rgba(0, 0, 0, 0.32)",
    textHoverColor: "#3498db",
    color: "#FFFFFF"
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
  [OFF_NEUTRAL]: {
    color: "rgba(0, 0, 0, 0.16)",
    hoverColor: "#3498db"
  }
};
