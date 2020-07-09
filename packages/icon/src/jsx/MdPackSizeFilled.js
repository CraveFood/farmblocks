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
      d="M19.5 33.722l-.084.155-9.43-5.155a1 1 0 01-.515-.782L8.05 13.13l11.417 5.4a1 1 0 00.451.096l.091-.002a1 1 0 00.404-.096l11.522-5.45-1.424 14.862a1 1 0 01-.516.782l-9.43 5.155-.066-.122v-9.514a.5.5 0 10-1 0v9.481zM9.113 11.42l10.39-4.443a1 1 0 01.393-.08h.19a1 1 0 01.394.08l10.334 4.42-10.875 5.144-10.826-5.12z"
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
const MdPackSizeFilled = withWrapper(Vector);
MdPackSizeFilled.groupName = "Actions";
export default MdPackSizeFilled;
