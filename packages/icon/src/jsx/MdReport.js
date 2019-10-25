import React from "react";
import PropTypes from "prop-types";

const MdReport = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M27 12h-4V8.06L22.932 8H11v22h10a1 1 0 0 1 0 2H10a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h13.313a1 1 0 0 1 .666.254l4.687 4.183a1 1 0 0 1 .334.746V20a1 1 0 0 1-2 0v-8zm-8.75 11.184V19a.75.75 0 0 1 .75-.75h4.184a4.251 4.251 0 1 0-4.934 4.934zm4.934-3.434H19.75v3.434a4.254 4.254 0 0 0 3.434-3.434zm5.72 13.442a1 1 0 0 1-1.808 0L23.8 29.595a1 1 0 1 1 1.475-1.351L27 30.127v-5.691a1 1 0 1 1 2 0v5.691l1.726-1.883a1 1 0 1 1 1.475 1.351l-3.297 3.597zM19 24.75a5.75 5.75 0 1 1 0-11.5 5.75 5.75 0 0 1 0 11.5z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdReport.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdReport.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdReport.groupName = "Docs";
export default MdReport;
