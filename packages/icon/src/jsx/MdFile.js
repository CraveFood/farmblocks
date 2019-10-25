import React from "react";
import PropTypes from "prop-types";

const MdFile = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M27 12h-4V8.06L22.932 8H11v22h7.568a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h13.313a1 1 0 0 1 .666.254l4.687 4.183a1 1 0 0 1 .334.746v8.156a1 1 0 0 1-2 0v-7.34zm6.848 12.15a.75.75 0 0 1 1.06 1.061L26.75 33.37a3.373 3.373 0 1 1-4.771-4.772l7.229-7.23a2.061 2.061 0 1 1 2.916 2.915L24.93 31.48a.75.75 0 1 1-1.06-1.06l7.195-7.197a.562.562 0 1 0-.796-.794l-7.229 7.23a1.874 1.874 0 1 0 2.65 2.65l8.159-8.157zm-20.173-8.475a.75.75 0 1 1 0-1.5h10.65a.75.75 0 1 1 0 1.5h-10.65zm0 2.933a.75.75 0 1 1 0-1.5h10.65a.75.75 0 1 1 0 1.5h-10.65z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdFile.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdFile.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdFile.groupName = "Docs";
export default MdFile;
