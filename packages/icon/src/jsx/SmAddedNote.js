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
      d="M15.586 2a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V21a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1h10.586zm-.415 2H6v16h12V6.829L15.171 4zm-1.518 4.468a1 1 0 011.75.962l-.056.102-3.144 5a1 1 0 01-1.57.158l-.083-.1-1.857-2.539a1 1 0 011.534-1.277l.08.097.987 1.35 2.36-3.753z"
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
const SmAddedNote = withWrapper(Vector);
SmAddedNote.groupName = "Actions";
export default SmAddedNote;
