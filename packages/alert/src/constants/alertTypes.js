//@flow
export type AlertType = $Keys<typeof ALERT_TYPES>;

const ALERT_TYPES = {
  NEWS: "NEWS",
  POSITIVE: "POSITIVE",
  NEGATIVE: "NEGATIVE",
  ATTENTION: "ATTENTION",
  REFRESH: "REFRESH"
};

module.exports = ALERT_TYPES;
