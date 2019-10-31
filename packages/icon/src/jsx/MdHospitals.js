import React from "react";
import PropTypes from "prop-types";

const MdHospitals = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M10 19h6v-2h-6v2zm-1 0v-2H7a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h9.002c.052-1.646 1.31-3 2.904-3h.143a3.593 3.593 0 0 1 3.543-3h4.816a3.593 3.593 0 0 1 3.543 3h.143C32.722 9 34 10.413 34 12.107V31a1 1 0 0 1-2 0V12.107c0-.632-.43-1.107-.906-1.107H18.906c-.476 0-.906.475-.906 1.107V31a1 1 0 0 1-2 0v-1h-5a.5.5 0 1 1 0-1h5v-2h-5a.5.5 0 1 1 0-1h5v-2h-5a.5.5 0 1 1 0-1h5v-2H8v10a1 1 0 0 1-2 0V20a1 1 0 0 1 1-1h2zm7-4v-1H8v1h8zm10-.5h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1zM25.5 27v4.5a.5.5 0 1 1-1 0V27H20v4.5a.5.5 0 1 1-1 0v-5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v5a.5.5 0 1 1-1 0V27h-4.5zm-1-4v-2H20v2h4.5zm1 0H30v-2h-4.5v2zm3.386-14c-.235-.586-.808-1-1.478-1h-4.816c-.67 0-1.243.414-1.478 1h7.772zM20 20h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H20a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdHospitals.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdHospitals.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdHospitals.groupName = "Business";
export default MdHospitals;
