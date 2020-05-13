import * as React from "react";
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
      d="M20 8a1 1 0 011 1v2h9.08A2.92 2.92 0 0133 13.92v14.16A2.92 2.92 0 0130.08 31H9.92a2.92 2.92 0 01-2.92-2.92V13.92A2.92 2.92 0 019.92 11H19L19 9a1 1 0 011-1zm9.483 13.008a2.329 2.329 0 00-3.266.096l-3.4 3.55-3.827-3.64a2.33 2.33 0 00-3.15-.03l-.123.12-6.306 6.587a.75.75 0 001.084 1.038l6.306-6.587a.828.828 0 011.161-.034l5.717 5.436a.75.75 0 001.034-1.088l-.809-.768 3.397-3.547a.83.83 0 011.075-.104l.087.07 1.354 1.258a.75.75 0 101.02-1.099zM12.5 14a2.5 2.5 0 000 5 2.5 2.5 0 000-5z"
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
const MdPhotoFilled = withWrapper(Vector);
MdPhotoFilled.groupName = "Actions";
export default MdPhotoFilled;
