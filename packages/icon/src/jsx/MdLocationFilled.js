import React from "react";
import PropTypes from "prop-types";

const MdLocationFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M20.764 34.75a1 1 0 0 1-.661.25h-.206a1 1 0 0 1-.661-.25 12.922 12.922 0 0 1-.418-.391 26.22 26.22 0 0 1-1.048-1.083 32.885 32.885 0 0 1-3.155-4.038C11.735 24.896 10 20.11 10 15.02 10 9.167 14.266 5 19.897 5h.206C25.733 5 30 9.167 30 15.02c0 5.09-1.734 9.876-4.615 14.218a32.885 32.885 0 0 1-3.155 4.038c-.378.413-.73.774-1.048 1.083-.194.188-.336.32-.418.391zM24 16a4 4 0 1 0-8 0 4 4 0 0 0 8 0z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdLocationFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdLocationFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdLocationFilled.groupName = "Misc";
export default MdLocationFilled;
