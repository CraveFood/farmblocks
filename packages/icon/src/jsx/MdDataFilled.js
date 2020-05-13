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
      d="M8 32a1 1 0 010-2h24a1 1 0 010 2H8zm23-5V11h-1v16h-8V16h-1v11h-7v-6h-1v6H7v-7a1 1 0 011-1h7v-4a1 1 0 011-1h7v-4a1 1 0 011-1h8a1 1 0 011 1v17h-2z"
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
const MdDataFilled = withWrapper(Vector);
MdDataFilled.groupName = "Misc";
export default MdDataFilled;
