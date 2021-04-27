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
      d="M29 28v-2a1 1 0 00-2 0v2h-2a1 1 0 000 2h2v2a1 1 0 002 0v-2h2a1 1 0 000-2h-2zm-19 4a1 1 0 01-1-1V7a1 1 0 011-1h12.932a2 2 0 011.331.508l4.403 3.929a1 1 0 01.334.746v9.884a7.96 7.96 0 00-8.414 10.894l-.03.039H10zm23.918-3.041a5.958 5.958 0 01-5.959 5.959 5.958 5.958 0 110-11.918 5.96 5.96 0 015.959 5.959zM13 13.25h12a.75.75 0 100-1.5H13a.75.75 0 100 1.5zm0 3h12a.75.75 0 100-1.5H13a.75.75 0 100 1.5zm0 3h12a.75.75 0 100-1.5H13a.75.75 0 100 1.5z"
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
const MdAddNoteFilled = withWrapper(Vector);
MdAddNoteFilled.groupName = "Actions";
export default MdAddNoteFilled;
