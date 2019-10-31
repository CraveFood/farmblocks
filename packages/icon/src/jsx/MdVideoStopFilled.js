import React from "react";
import PropTypes from "prop-types";

const MdVideoStopFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M20 7c7.179 0 13 5.821 13 13 0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7zm2.5 9h-5a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdVideoStopFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdVideoStopFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdVideoStopFilled.groupName = "Actions";
export default MdVideoStopFilled;
