import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="6 6 88 88"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M58.5 77H68V56c0-.132.017-.26.05-.383l-5.217-9.406-16.83-6.178-16.597 6.192-5.679 8.912c.172.244.273.542.273.863v21h1v-7a1 1 0 012 0v7h6.5v-9.753c0-2.628 2.383-4.247 5.122-4.247h14.756c2.738 0 5.122 1.619 5.122 4.247V77zm-3 0v-9.753c0-.67-.85-1.247-2.122-1.247H47v11h8.5zM45 66h-6.378c-1.273 0-2.122.577-2.122 1.247V77H45V66zm26 11h8V40H61v2.342l3.39 1.245a1.5 1.5 0 01.796.68l8.626 15.555a1.5 1.5 0 01-2.624 1.455l-.188-.34V77zm-50 0V59.417l-1.235 1.938a1.5 1.5 0 11-2.53-1.612l9.911-15.554a1.5 1.5 0 01.74-.6l17.408-6.494a1.5 1.5 0 01.524-.095h.363a1.5 1.5 0 01.517.092L58 41.242v-8.65C58 26 63.33 21.036 70.095 21H70.197C76.913 21.036 82 25.96 82 32.592V78a1.5 1.5 0 01-.72 1.28A1.5 1.5 0 0180 80H20a1.5 1.5 0 010-3h1zm58-39v-2H61v2h18zm0-4v-1.408c0-4.966-3.746-8.581-8.854-8.592-5.18.01-9.146 3.693-9.146 8.592V34h18zM50 52.385a4 4 0 10-8.001.001 4 4 0 008.001 0zm2 0a6 6 0 11-12 0 6 6 0 0112 0zM27 66a1 1 0 01-2 0v-3a1 1 0 012 0v3z"
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
const LgVendors = withWrapper(Vector);
LgVendors.groupName = "Business";
export default LgVendors;
