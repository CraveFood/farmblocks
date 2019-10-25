import React from "react";
import PropTypes from "prop-types";

const MdPhoneMobileFilled = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M15 5v1.283C15 7.25 15.875 8 16.92 8h6.16C24.125 8 25 7.25 25 6.283V5h.168C27.272 5 29 6.628 29 8.669V31.33C29 33.371 27.272 35 25.168 35H14.833C12.73 35 11 33.372 11 31.331V8.67C11 6.629 12.729 5 14.833 5H15zm1 0h8v1.283c0 .377-.396.717-.92.717h-6.16c-.524 0-.92-.34-.92-.717V5zm1 28h6a.5.5 0 1 0 0-1h-6a.5.5 0 1 0 0 1z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdPhoneMobileFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdPhoneMobileFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdPhoneMobileFilled.groupName = "Misc";
export default MdPhoneMobileFilled;
