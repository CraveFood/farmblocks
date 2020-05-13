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
      d="M27 12h-4V8.06L22.932 8H11v22h7.568a1 1 0 110 2H10a1 1 0 01-1-1V7a1 1 0 011-1h13.313a1 1 0 01.666.254l4.687 4.183a1 1 0 01.334.746v8.156a1 1 0 01-2 0v-7.34zm6.848 12.15a.75.75 0 011.06 1.061L26.75 33.37a3.373 3.373 0 11-4.771-4.772l7.229-7.23a2.061 2.061 0 112.916 2.915L24.93 31.48a.75.75 0 11-1.06-1.06l7.195-7.197a.562.562 0 10-.796-.794l-7.229 7.23a1.874 1.874 0 102.65 2.65l8.159-8.157zm-20.173-8.475a.75.75 0 110-1.5h10.65a.75.75 0 110 1.5h-10.65zm0 2.933a.75.75 0 110-1.5h10.65a.75.75 0 110 1.5h-10.65z"
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
const MdFile = withWrapper(Vector);
MdFile.groupName = "Docs";
export default MdFile;
