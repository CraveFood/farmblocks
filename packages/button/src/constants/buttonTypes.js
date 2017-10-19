//@flow
export type ButtonType = $Keys<typeof BUTTON_TYPES>;

const BUTTON_TYPES = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  REQUEST: "request",
  NEUTRAL: "neutral",
  NEUTRAL_OFF: "neutral-off",
  CLOSED: "closed",
  NEGATIVE: "negative"
};

module.exports = BUTTON_TYPES;
