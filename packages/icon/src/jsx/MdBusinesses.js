import React from "react";
import PropTypes from "prop-types";

const MdBusinesses = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M6 32V7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v3h5a1 1 0 0 1 1 1v8h8a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V21h-7v2h5a.5.5 0 1 1 0 1h-5v2h5a.5.5 0 1 1 0 1h-5v2h5a.5.5 0 1 1 0 1h-5v2a1 1 0 0 1-2 0V12H8v20a1 1 0 0 1-2 0zm2-22h9V8H8v2zm7.007 19v-2H10v2h5.007zm1 0H21v-2h-4.993v2zm-1-6v-2H10v2h5.007zm1 0H21v-2h-4.993v2zm-1-6v-2H10v2h5.007zm1 0H21v-2h-4.993v2zM10 14h11a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm0 6h11a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm0 6h11a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdBusinesses.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdBusinesses.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdBusinesses.groupName = "Business";
export default MdBusinesses;
