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
      d="m29.707 17.293-7-7 2-2a1 1 0 0 1 1.415 0l5.585 5.585a1 1 0 0 1 0 1.414l-2 2Zm-1.414 1.414-10.97 10.97a1 1 0 0 1-.45.26l-7.616 2.029a1 1 0 0 1-1.223-1.224l2.03-7.614a1 1 0 0 1 .26-.45l10.97-10.97 6.999 6.999Z"
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
const MdEditFilled = withWrapper(Vector);
MdEditFilled.groupName = "Actions";
export default MdEditFilled;
