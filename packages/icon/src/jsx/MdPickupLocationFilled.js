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
      d="M10.66 33H5a1 1 0 010-2h4.136c-.176-.25-.35-.503-.52-.762C5.733 25.896 4 21.11 4 16.02 4 10.167 8.266 6 13.897 6h.206C19.733 6 24 10.167 24 16.02c0 5.09-1.734 9.876-4.615 14.218a32.885 32.885 0 01-3.155 4.038c-.378.413-.73.774-1.048 1.083-.194.188-.336.32-.418.391a1 1 0 01-.661.25h-.206a1 1 0 01-.661-.25 12.922 12.922 0 01-.418-.391 26.22 26.22 0 01-1.048-1.083c-.371-.404-.742-.83-1.11-1.276zM18 17a4 4 0 10-8 0 4 4 0 008 0zm14.74 5.25h1.414a.75.75 0 01.747.68l.758 8.07h.18a1 1 0 010 2H21a1 1 0 010-2h2.34l.76-8.07a.75.75 0 01.746-.68h1.413a3.25 3.25 0 016.482 0zm-1.508 0a1.75 1.75 0 00-3.464 0h3.464z"
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
const MdPickupLocationFilled = withWrapper(Vector);
MdPickupLocationFilled.groupName = "Delivery";
export default MdPickupLocationFilled;
