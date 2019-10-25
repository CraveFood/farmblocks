import React from "react";
import PropTypes from "prop-types";

const MdInCartFilled = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M12.062 12a8.001 8.001 0 0 1 15.876 0H31a1 1 0 0 1 .995.9l2 20A1 1 0 0 1 33 34H7a1 1 0 0 1-.995-1.1l2-20A1 1 0 0 1 9 12h3.062zm2.021 0h11.834a6.002 6.002 0 0 0-11.834 0zm8.07 7.468l-2.987 4.753-1.359-1.858a1 1 0 0 0-1.614 1.18l2.228 3.047a1 1 0 0 0 1.654-.058l3.772-6a1 1 0 1 0-1.694-1.064z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdInCartFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdInCartFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdInCartFilled.groupName = "CartBag";
export default MdInCartFilled;
