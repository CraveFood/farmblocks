import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="2 2 20 20"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M15.617 16c1.878 0 3.158.977 3.843 2.523.356.802.503 1.602.534 2.252l.006.211-.005.111c-.048.47-.414.842-.877.896L19 22h-9l-.117-.007-.112-.02-.072-.021L5.01 22a1 1 0 01-.987-.788l-.018-.115-.005-.11.011-.284a6.356 6.356 0 01.568-2.267c.667-1.433 1.857-2.353 3.567-2.43L8.383 16h7.234zM12.088 2c3.455 0 5.667 1.311 5.893 4.226l.008.142.005.02L18 6.5v3.042C17.87 12.62 15.632 14 12.087 14c-3.435 0-5.735-1.27-6.05-4.039l-.022-.228-.005-.087-.004-.03L6 9.5l.002-3.059.008-.083.01-.13c.227-2.758 2.325-4.085 5.524-4.217l.277-.008.267-.003z"
      fill={color}
      fillRule="evenodd"
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
const SmProfileFilled = withWrapper(Vector);
SmProfileFilled.groupName = "Misc";
export default SmProfileFilled;
