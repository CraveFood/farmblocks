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
      d="M20 7c7.179 0 13 5.821 13 13 0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7zm2.367 8.5a2.522 2.522 0 00-2.523 2.523c0 .196.023.391.062.579a7.173 7.173 0 01-5.203-2.641 2.522 2.522 0 00.781 3.375 2.542 2.542 0 01-1.14-.32v.03c0 1.227.867 2.243 2.023 2.477a2.668 2.668 0 01-1.14.047c.32 1 1.25 1.727 2.359 1.75a5.054 5.054 0 01-3.133 1.078c-.21 0-.406-.007-.61-.03A7.13 7.13 0 0017.72 25.5c4.64 0 7.18-3.844 7.18-7.18 0-.11 0-.218-.008-.328.492-.36.922-.805 1.265-1.305a5.06 5.06 0 01-1.453.391 2.517 2.517 0 001.11-1.39c-.485.289-1.032.5-1.602.609a2.517 2.517 0 00-1.844-.797z"
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
const MdTwitterFilled = withWrapper(Vector);
MdTwitterFilled.groupName = "Social";
export default MdTwitterFilled;
