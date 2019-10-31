import React from "react";
import PropTypes from "prop-types";

const MdLostConnection = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M16.63 17H27a1 1 0 0 1 0 2H14c-.92 0-1.352-1.136-.665-1.747l11.246-10a1 1 0 1 1 1.329 1.494L16.63 17zm7.658 6H13a1 1 0 0 1 0-2h14c.93 0 1.356 1.157.65 1.76l-11.714 10a1 1 0 1 1-1.299-1.52L24.288 23z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdLostConnection.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdLostConnection.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdLostConnection.groupName = "States";
export default MdLostConnection;
