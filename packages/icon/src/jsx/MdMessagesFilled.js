import React from "react";
import PropTypes from "prop-types";

const MdMessagesFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M10 26.81c-3.222-1.828-5-4.748-5-8.6C5 11.063 11.107 7 20 7s15 4.062 15 11.21C35 25.298 29.062 29 20 29c-.704 0-1.388-.023-2.053-.068l-6.338 4.861A1 1 0 0 1 10 33v-6.19zM14 16h7a.5.5 0 1 0 0-1h-7a.5.5 0 1 0 0 1zm0 3h12a.5.5 0 1 0 0-1H14a.5.5 0 1 0 0 1zm0 3h12a.5.5 0 1 0 0-1H14a.5.5 0 1 0 0 1z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdMessagesFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdMessagesFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdMessagesFilled.groupName = "Menu";
export default MdMessagesFilled;
