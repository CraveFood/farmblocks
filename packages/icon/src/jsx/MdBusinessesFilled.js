import React from "react";
import PropTypes from "prop-types";

const MdBusinessesFilled = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M25 27h5a.5.5 0 1 0 0-1h-5v1zm0-3h5a.5.5 0 1 0 0-1h-5v1zm0-3h7v10h-7 7V21h-7zm-1 12H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v3h5a1 1 0 0 1 1 1v8h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-9zm1-3h5a.5.5 0 1 0 0-1h-5v1zM8 10h9V8H8v2zm7.007 17H10a1 1 0 0 0 0 2h5.007v-2zm1 0v2H21a1 1 0 0 0 0-2h-4.993zm-1-6H10a1 1 0 0 0 0 2h5.007v-2zm1 0v2H21a1 1 0 0 0 0-2h-4.993zm-1-6H10a1 1 0 0 0 0 2h5.007v-2zm1 0v2H21a1 1 0 0 0 0-2h-4.993z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdBusinessesFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdBusinessesFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdBusinessesFilled.groupName = "Business";
export default MdBusinessesFilled;
