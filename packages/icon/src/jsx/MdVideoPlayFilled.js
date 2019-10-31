import React from "react";
import PropTypes from "prop-types";

const MdVideoPlayFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M33 20c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13zm-8.869 1.449a1.5 1.5 0 0 0 0-2.497l-4.598-3.065a1.5 1.5 0 0 0-2.332 1.248v6.131a1.5 1.5 0 0 0 2.332 1.248l4.598-3.065z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdVideoPlayFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdVideoPlayFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdVideoPlayFilled.groupName = "Actions";
export default MdVideoPlayFilled;
