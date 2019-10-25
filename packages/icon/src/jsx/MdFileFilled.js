import React from "react";
import PropTypes from "prop-types";

const MdFileFilled = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M29 19.442a3.309 3.309 0 0 0-2.59 1.274l-6.294 8.057a4.605 4.605 0 0 0-.96 3.29h-8.314V32H10a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h13.313a1 1 0 0 1 .666.254l4.687 4.183a1 1 0 0 1 .334.746v8.259zm3.34 4.24a.75.75 0 1 1 1.181.924l-7.103 9.092a3.373 3.373 0 1 1-5.317-4.155l6.294-8.057a2.061 2.061 0 1 1 3.25 2.538l-6.264 8.02a.75.75 0 0 1-1.182-.924l6.264-8.02a.562.562 0 1 0-.887-.691l-6.293 8.057a1.874 1.874 0 1 0 2.954 2.307l7.102-9.09zM13.74 15.5h10.52c.408 0 .74-.336.74-.75a.745.745 0 0 0-.74-.75H13.74c-.408 0-.74.336-.74.75s.332.75.74.75zm0 3h10.52c.408 0 .74-.336.74-.75a.745.745 0 0 0-.74-.75H13.74c-.408 0-.74.336-.74.75s.332.75.74.75z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdFileFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdFileFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdFileFilled.groupName = "Docs";
export default MdFileFilled;
