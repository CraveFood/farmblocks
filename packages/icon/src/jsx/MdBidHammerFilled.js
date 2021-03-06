import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M19.982 23.762a1 1 0 01-.087.1L9.77 33.987c-1.055 1.056-2.795.96-3.893-.136-1.095-1.096-1.19-2.836-.135-3.89l10.127-10.128a1 1 0 01.1-.087l-1.246-1.245L24.848 8.376l6.505 6.505-10.126 10.126-1.245-1.245zm2.66 2.659l10.125-10.126 1.67 1.67a1 1 0 010 1.414l-8.712 8.711a1 1 0 01-1.414 0l-1.67-1.67zm-9.334-9.333l-1.669-1.67a1 1 0 010-1.414l8.711-8.711a1 1 0 011.415 0l1.669 1.669-10.126 10.126z"
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
const MdBidHammerFilled = withWrapper(Vector);
MdBidHammerFilled.groupName = "States";
export default MdBidHammerFilled;
