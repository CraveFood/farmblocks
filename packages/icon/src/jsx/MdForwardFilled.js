import React from "react";
import PropTypes from "prop-types";

const MdForwardFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M24.394 17h-6.131C15.92 17 14 18.812 14 21.078V26a1 1 0 1 0 2 0v-4.922C16 19.944 17 19 18.263 19h6.132l-3.064 2.757a1 1 0 1 0 1.338 1.486l5-4.499a1 1 0 0 0 0-1.486l-5-4.501a1 1 0 0 0-1.338 1.486L24.394 17zM33 20c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdForwardFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdForwardFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdForwardFilled.groupName = "Actions";
export default MdForwardFilled;
