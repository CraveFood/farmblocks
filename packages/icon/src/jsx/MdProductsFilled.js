import React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M25.235 30.561L9.3 20.213l6.985-10.755a4 4 0 012.465-1.721l7.698-1.756a4 4 0 014.79 3.01l.024.116 1.527 7.747a4 4 0 01-.57 2.952l-6.984 10.755zm-.545.839l-1.32 2.032a4 4 0 01-5.533 1.177l-9.225-5.991a4 4 0 01-1.176-5.534l1.32-2.032L24.69 31.4zm-.573-16.56a2 2 0 102.179-3.355 2 2 0 00-2.179 3.355z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
Vector.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
Vector.defaultProps = {
  color: "currentColor",
  size: "1em",
};
const MdProductsFilled = withWrapper(Vector);
MdProductsFilled.groupName = "Menu";
export default MdProductsFilled;
