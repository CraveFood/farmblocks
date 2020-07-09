import React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="6 6 88 88"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M25 28v-5.5a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 011.5 1.5V28h43.5a1.5 1.5 0 011.5 1.5v11a1.5 1.5 0 01-1.5 1.5H76v33h4c2 0 2 3 0 3H20c-2 0-2-3 0-3h5V42h-4.5a1.5 1.5 0 01-1.5-1.5v-11a1.5 1.5 0 011.5-1.5H25zm3 0h6v-4h-6v4zm13 31v16h6V59h-6zm-1 0h-6v16h6V59zm33-17H28v33h4V59a1.5 1.5 0 01-1.5-1.5c0-6.778 3.564-9.5 10.001-9.5 6.435 0 9.999 2.722 9.999 9.5A1.5 1.5 0 0149 59v16h24v-5H57a3 3 0 01-3-3V51a3 3 0 013-3h16v-6zm0 26V50H57a1 1 0 00-1 1v16a1 1 0 001 1h16zM40.501 51c-4.39 0-6.512 1.254-6.925 5h13.848c-.413-3.746-2.536-5-6.923-5zM22 39h57v-8H22v8zm36 14a1 1 0 012 0v6a1 1 0 01-2 0v-6zM25 34a1 1 0 010-2h21a1 1 0 010 2H25zm24 0a1 1 0 010-2h3a1 1 0 010 2h-3zm9 29a1 1 0 012 0v2a1 1 0 01-2 0v-2z"
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
const LgPurchasers = withWrapper(Vector);
LgPurchasers.groupName = "Business";
export default LgPurchasers;
