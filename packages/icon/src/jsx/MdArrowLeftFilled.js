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
      d="M20 33c-7.179 0-13-5.821-13-13 0-7.18 5.82-13 13-13s13 5.82 13 13-5.82 13-13 13zm-1.676-6.763a1 1 0 101.352-1.474L15.57 21 26 21a1 1 0 00.993-.883L27 20a1 1 0 00-1-1l-10.429.001 4.105-3.764a1 1 0 00.14-1.315l-.079-.098a1 1 0 00-1.413-.061l-6 5.5a1 1 0 000 1.474z"
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
const MdArrowLeftFilled = withWrapper(Vector);
MdArrowLeftFilled.groupName = "Actions";
export default MdArrowLeftFilled;
