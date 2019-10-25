import React from "react";
import PropTypes from "prop-types";

const MdProductsFilled = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M25.235 30.561L9.3 20.213l6.985-10.755a4 4 0 0 1 2.465-1.721l7.698-1.756a4 4 0 0 1 4.79 3.01l.024.116 1.527 7.747a4 4 0 0 1-.57 2.952l-6.984 10.755zm-.545.839l-1.32 2.032a4 4 0 0 1-5.533 1.177l-9.225-5.991a4 4 0 0 1-1.176-5.534l1.32-2.032L24.69 31.4zm-.573-16.56a2 2 0 1 0 2.179-3.355 2 2 0 0 0-2.179 3.355z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdProductsFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdProductsFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdProductsFilled.groupName = "Menu";
export default MdProductsFilled;
