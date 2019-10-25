import React from "react";
import PropTypes from "prop-types";

const MdSearch = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M22.46 22.271a.952.952 0 0 1 .063-.059 7.447 7.447 0 0 0 1.837-4.918c0-4.08-3.244-7.39-7.246-7.39-4.002 0-7.247 3.309-7.247 7.39 0 4.082 3.245 7.391 7.247 7.391a7.159 7.159 0 0 0 5.242-2.287.954.954 0 0 1 .104-.127zm9.267 8.104a.966.966 0 0 1 0 1.346.92.92 0 0 1-1.32 0l-7.29-7.433a8.977 8.977 0 0 1-6.003 2.302C12.08 26.59 8 22.428 8 17.294 8 12.161 12.08 8 17.114 8c5.033 0 9.113 4.161 9.113 9.294a9.376 9.376 0 0 1-1.837 5.599l7.337 7.482z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdSearch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdSearch.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdSearch.groupName = "Actions";
export default MdSearch;
