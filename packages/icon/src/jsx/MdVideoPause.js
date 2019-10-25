import React from "react";
import PropTypes from "prop-types";

const MdVideoPause = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M31 20c0-6.074-4.926-11-11-11-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11zm2 0c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13zm-16-4a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0v-8zm4 0a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0v-8z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdVideoPause.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdVideoPause.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdVideoPause.groupName = "Actions";
export default MdVideoPause;
