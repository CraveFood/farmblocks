import React from "react";
import PropTypes from "prop-types";

const MdCanceledFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M33 20c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13zm-5.37 0a7.63 7.63 0 0 1-12.469 5.9L25.9 15.16A7.599 7.599 0 0 1 27.63 20zm-3.19-6.207L13.792 24.44A7.63 7.63 0 0 1 24.44 13.793zM29.63 20A9.63 9.63 0 0 0 20 10.37 9.63 9.63 0 0 0 10.37 20c0 5.318 4.312 9.63 9.63 9.63 5.318 0 9.63-4.312 9.63-9.63z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdCanceledFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdCanceledFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdCanceledFilled.groupName = "States";
export default MdCanceledFilled;
