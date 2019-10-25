import React from "react";
import PropTypes from "prop-types";

const MdSupermarkets = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M24 30v-3h-3.5v3H24zm1 0h7V19.982c0-.531-.474-.982-1.084-.982H28a1 1 0 0 1-1-1v-3.396a.604.604 0 0 0-.604-.604H13.604a.604.604 0 0 0-.604.604V18a1 1 0 0 1-1 1H9.084c-.61 0-1.084.451-1.084.982V30h7v-3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5V30zm-9 0h3.5v-3H16v3zm18 0c1.333 0 1.333 2 0 2H6c-1.333 0-1.333-2 0-2V19.982C6 18.323 7.392 17 9.084 17H11v-2.396A2.604 2.604 0 0 1 13.604 12h12.792A2.604 2.604 0 0 1 29 14.604V17h1.916C32.608 17 34 18.323 34 19.982V30zm-8-9h-3v2h3v-2zm1 0v2h3v-2h-3zm-5 0h-4v2h4v-2zm-5 0h-3v2h3v-2zm-4 0h-3v2h3v-2zm17-1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h20zm-15-3h10v-1H15v1zm0 1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H15z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdSupermarkets.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdSupermarkets.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdSupermarkets.groupName = "Business";
export default MdSupermarkets;
