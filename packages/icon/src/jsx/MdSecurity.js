import React from "react";
import PropTypes from "prop-types";

const MdSecurity = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M20.5 25.45V28a.5.5 0 1 1-1 0v-2.55a2.5 2.5 0 1 1 1 0zM14 18.306V13a6 6 0 1 1 12 0v5.306a7.097 7.097 0 0 1 3 5.8V32a1 1 0 0 1-1 1H12a1 1 0 0 1-1-1v-7.894a7.097 7.097 0 0 1 3-5.8zm2-.989A7.103 7.103 0 0 1 18.106 17h3.788c.733 0 1.44.111 2.106.317V13a4 4 0 1 0-8 0v4.317zM27 31v-6.894A5.106 5.106 0 0 0 21.894 19h-3.788A5.106 5.106 0 0 0 13 24.106V31h14zm-7-9.5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 20 21.5z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdSecurity.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdSecurity.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdSecurity.groupName = "Misc";
export default MdSecurity;
