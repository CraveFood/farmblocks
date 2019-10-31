import React from "react";
import PropTypes from "prop-types";

const MdCautionFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M32.727 25.639A5 5 0 0 1 28.319 33H11.681a5 5 0 0 1-4.408-7.361l8.32-15.53a5 5 0 0 1 8.814 0l8.32 15.53zM20 26.019c-1.119 0-1.948.828-1.948 1.903v.044c0 1.074.83 1.903 1.948 1.903 1.119 0 1.948-.829 1.948-1.903v-.044c0-1.075-.83-1.903-1.948-1.903zM18.008 15.14l.962 8.416c.068.605.47.986 1.03.986s.962-.38 1.03-.986l.962-8.416c.067-.648-.292-1.14-.894-1.14h-2.195c-.603 0-.962.492-.895 1.14z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdCautionFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdCautionFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdCautionFilled.groupName = "States";
export default MdCautionFilled;
