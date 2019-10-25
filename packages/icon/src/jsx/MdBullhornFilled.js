import React from "react";
import PropTypes from "prop-types";

const MdBullhornFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M31 15.15a2.699 2.699 0 0 1 0 5.21V27a1 1 0 0 1-1.583.812 13.572 13.572 0 0 0-.908-.577A23.987 23.987 0 0 0 26 25.947V10.053c.93-.411 1.77-.85 2.51-1.288.448-.266.756-.469.907-.577A1 1 0 0 1 31 9v6.15zm-12.063 8.918l2.786 6.54a1 1 0 0 1-.92 1.392h-4.096a1 1 0 0 1-.918-.604L12.6 24h-.844c-1.237 0-2.297-.756-2.584-1.952l-2.145-8.811A1 1 0 0 1 8 12h9.355c2.26 0 4.495-.423 6.645-1.16v14.32a21.16 21.16 0 0 0-5.063-1.092zM16 16h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1zm0 2h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdBullhornFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdBullhornFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdBullhornFilled.groupName = "Menu";
export default MdBullhornFilled;
