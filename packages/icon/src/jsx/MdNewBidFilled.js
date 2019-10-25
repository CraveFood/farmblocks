import React from "react";
import PropTypes from "prop-types";

const MdNewBidFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M13.297 10.315c4.625-2.259 6.69-1.61 8.51 1.515.066.114.14.241.276.48.11.19.192.33.274.467 1.625 2.696 3.612 3.521 8.835 2.301 1.337-.312 2.482 1.08 1.409 2.228-6.625 7.108-9.276 8.027-11.903 5.224l-.304-.328c-1.434-1.538-2.493-1.725-5.596.121l1.194 9.553a1 1 0 1 1-1.984.248l-3-24a1 1 0 0 1 1.984-.248l.305 2.44zm17.737 5.74l.018.001a.66.66 0 0 1 .087-.115l-.105.113z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdNewBidFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdNewBidFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdNewBidFilled.groupName = "States";
export default MdNewBidFilled;
