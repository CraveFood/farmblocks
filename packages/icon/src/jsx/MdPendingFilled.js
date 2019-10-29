import React from "react";
import PropTypes from "prop-types";

const MdPendingFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M19.653 20.938c.108.04.225.062.347.062h5a1 1 0 0 0 0-2h-4v-7a1 1 0 0 0-2 0v8c0 .056.005.11.013.164l-5.39 5.39a.5.5 0 1 0 .707.707l5.323-5.323zM33 20c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdPendingFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdPendingFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdPendingFilled.groupName = "States";
export default MdPendingFilled;