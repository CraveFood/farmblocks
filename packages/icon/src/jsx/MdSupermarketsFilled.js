import React from "react";
import PropTypes from "prop-types";

const MdSupermarketsFilled = React.forwardRef(
  ({ size, color, ...props }, ref) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      ref={ref}
      aria-hidden={!props["aria-label"]}
      {...props}
    >
      <path
        d="M25 30v-2a2 2 0 0 0-2-2h-2.5v4H25zm-10 0h4.5v-4H17a2 2 0 0 0-2 2v2zm19 0c1.333 0 1.333 2 0 2H6c-1.333 0-1.333-2 0-2V19.982C6 18.323 7.392 17 9.084 17H11v-2.396A2.604 2.604 0 0 1 13.604 12h12.792A2.604 2.604 0 0 1 29 14.604V17h1.916C32.608 17 34 18.323 34 19.982V30zM9 21v2h4v-2H9zm5 0v2h3v-2h-3zm9 0v2h3v-2h-3zm-5 0v2h4v-2h-4zm9 0v2h4v-2h-4zm-13-6v2h12v-2H14z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  ),
);
MdSupermarketsFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdSupermarketsFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdSupermarketsFilled.groupName = "Business";
export default MdSupermarketsFilled;
