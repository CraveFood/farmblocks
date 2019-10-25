import React from "react";
import PropTypes from "prop-types";

const MdFacebookFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M20 7c7.179 0 13 5.821 13 13 0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7zm1.21 6.5c-1.765 0-2.976 1.078-2.976 3.055v1.703h-1.992v2.312h1.992v5.93h2.391v-5.93h1.984l.305-2.312h-2.289V16.78c0-.664.18-1.125 1.14-1.125h1.227v-2.062a15.31 15.31 0 0 0-1.781-.094z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdFacebookFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdFacebookFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdFacebookFilled.groupName = "Social";
export default MdFacebookFilled;
