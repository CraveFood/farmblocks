import React from "react";
import PropTypes from "prop-types";

const MdTip = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M23.698 23a1 1 0 1 1-2 0c0-2.235.723-3.67 2.387-5.64.002-.001.463-.544.588-.693 1.053-1.264 1.411-2.036 1.313-3.126C25.75 10.944 23.727 9 20 9c-3.694 0-5.744 2.046-5.985 4.706-.101 1.117.223 1.871 1.192 3.109l.526.66c1.51 1.903 2.168 3.315 2.168 5.525a1 1 0 1 1-2 0c0-1.671-.48-2.7-1.735-4.281-.017-.023-.417-.523-.533-.67-1.254-1.601-1.767-2.795-1.61-4.524C12.356 9.871 15.232 7 20.001 7c4.783 0 7.65 2.754 7.976 6.36.158 1.738-.407 2.954-1.768 4.587-.132.16-.6.71-.596.705-1.388 1.641-1.915 2.688-1.915 4.348zM17 26a.5.5 0 1 1 0-1h6a.5.5 0 1 1 0 1h-6zm0 2a.5.5 0 1 1 0-1h6a.5.5 0 1 1 0 1h-6zm0 2a.5.5 0 1 1 0-1h6a.5.5 0 1 1 0 1h-6z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdTip.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdTip.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdTip.groupName = "Misc";
export default MdTip;
