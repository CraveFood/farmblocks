import React from "react";
import PropTypes from "prop-types";

const MdPlaceholder = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M31.556 4A4.444 4.444 0 0 1 36 8.444v23.112A4.444 4.444 0 0 1 31.556 36H8.444A4.444 4.444 0 0 1 4 31.556V8.444A4.444 4.444 0 0 1 8.444 4h23.112zm-2.167 3H10.61A3.611 3.611 0 0 0 7 10.611V29.39A3.611 3.611 0 0 0 10.611 33H29.39A3.611 3.611 0 0 0 33 29.389V10.61A3.611 3.611 0 0 0 29.389 7z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdPlaceholder.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdPlaceholder.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdPlaceholder.groupName = "Placeholder";
export default MdPlaceholder;
