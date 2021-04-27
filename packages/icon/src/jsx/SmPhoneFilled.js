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
      d="M6.95 3.018a2.373 2.373 0 00-1.39.684l-1.64 1.64c-.643.644-.968 1.408-.914 2.241.04.66.219 1.32.528 1.972l.336.613.209.364.25.415.374.587.083.127c.397.607.875 1.275 1.433 2.004a22.32 22.32 0 001.927 2.188c.71.71 1.44 1.352 2.188 1.926.73.56 1.398 1.038 2.004 1.434l.49.316.44.273.39.23.735.408c.703.335 1.363.512 2.025.554.832.054 1.597-.27 2.24-.915l1.64-1.64c.38-.38.613-.854.684-1.39.084-.634-.131-1.209-.616-1.591l-3.038-2.176a2.425 2.425 0 00-1.364-.429l-.183.01a2.062 2.062 0 00-1.276.621l-.369.361-.506-.392-.248-.197a17.07 17.07 0 01-2.638-2.638l-.434-.552-.157-.204.368-.373c.4-.4.624-.899.625-1.452a2.387 2.387 0 00-.407-1.334L8.613 3.73c-.358-.543-.977-.804-1.664-.712z"
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
const SmPhoneFilled = withWrapper(Vector);
SmPhoneFilled.groupName = "Misc";
export default SmPhoneFilled;
